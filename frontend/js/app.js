import { getCareer, getCareers, getHealth, getSchools } from "./api.js"
import { API_DOCUMENTATION_URL } from "./config.js"
import { getState, setState, subscribe } from "./state.js"
import { initTheme } from "./theme.js"
import {
	closeCareerDialog,
	configureApiLinks,
	initializeReveals,
	openCareerDialog,
	renderHealth,
	renderHealthError,
	renderSchools,
	renderState,
} from "./ui.js"

const searchForm = document.querySelector("#search-form")
const schoolSelect = document.querySelector("#school-select")
const searchInput = document.querySelector("#career-search")
const refreshButton = document.querySelector("#refresh-button")
const retryButton = document.querySelector("#retry-button")
const clearFiltersButton = document.querySelector("#clear-filters-button")
const dialog = document.querySelector("#career-dialog")

subscribe(renderState)
configureApiLinks(API_DOCUMENTATION_URL)
initializeReveals()
initTheme()

async function loadInitialData() {
	setState({ loading: true, error: null })
	const healthRequest = getHealth().then(renderHealth).catch(renderHealthError)

	try {
		const schools = await getSchools()
		const careers = await getCareers()
		renderSchools(schools)
		setState({ schools, careers, totalCareers: careers.length, loading: false })
	} catch (error) {
		setState({ loading: false, error: error.message })
	}

	await healthRequest
}

async function loadCareers(filters = getState().filters) {
	setState({ loading: true, error: null, filters })
	try {
		const careers = await getCareers(filters)
		setState({ careers, loading: false })
	} catch (error) {
		setState({ careers: [], loading: false, error: error.message })
	}
}

searchForm.addEventListener("submit", (event) => {
	event.preventDefault()
	loadCareers({ schoolId: schoolSelect.value, name: searchInput.value })
	document
		.querySelector("#catalogo")
		.scrollIntoView({ behavior: "smooth", block: "start" })
})

schoolSelect.addEventListener("change", () => {
	loadCareers({ schoolId: schoolSelect.value, name: searchInput.value })
})

refreshButton.addEventListener("click", () => loadCareers())
retryButton.addEventListener("click", () => loadCareers())

clearFiltersButton.addEventListener("click", () => {
	schoolSelect.value = ""
	searchInput.value = ""
	loadCareers({ schoolId: "", name: "" })
})

document
	.querySelector("#career-table-body")
	.addEventListener("click", async (event) => {
		const trigger = event.target.closest("[data-detail-id], [data-career-id]")
		if (!trigger) return
		await showDetail(trigger.dataset.detailId || trigger.dataset.careerId)
	})

document
	.querySelector("#career-table-body")
	.addEventListener("keydown", async (event) => {
		if (!["Enter", " "].includes(event.key)) return
		const row = event.target.closest("[data-career-id]")
		if (!row) return
		event.preventDefault()
		await showDetail(row.dataset.careerId)
	})

async function showDetail(id) {
	try {
		const cached = getState().careers.find(
			(career) => String(career.id) === String(id),
		)
		openCareerDialog(cached || (await getCareer(id)))
	} catch (error) {
		setState({ error: error.message })
	}
}

document
	.querySelector("#dialog-close")
	.addEventListener("click", closeCareerDialog)
dialog.addEventListener("click", (event) => {
	if (event.target === dialog) closeCareerDialog()
})

document.querySelector("#exit-button").addEventListener("click", () => {
	window.location.replace("https://unapec.edu.do")
})

loadInitialData()

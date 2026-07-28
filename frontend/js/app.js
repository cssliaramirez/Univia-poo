import { getCareer, getCareers, getHealth, getSchools } from "./api.js"
import { API_DOCUMENTATION_URL } from "./config.js"
import { getState, setState, subscribe } from "./state.js"
import { initTheme } from "./theme.js"
import { showVocationalTest } from "./vocational-test.js"
import {
	closeCareerDialog,
	configureApiLinks,
	initializeReveals,
	openCareerDialog,
	openComparator,
	renderHealth,
	renderHealthError,
	renderSchools,
	renderState,
	updateComparatorButton,
} from "./ui.js"

const searchForm = document.querySelector("#search-form")
const schoolSelect = document.querySelector("#school-select")
const searchInput = document.querySelector("#career-search")
const refreshButton = document.querySelector("#refresh-button")
const retryButton = document.querySelector("#retry-button")
const clearFiltersButton = document.querySelector("#clear-filters-button")
const dialog = document.querySelector("#career-dialog")
const testLaunchBtn = document.querySelector("#test-launch")
const compareBtn = document.querySelector("#compare-btn")
const filterModality = document.querySelector("#filter-modality")
const filterDuration = document.querySelector("#filter-duration")
const filterCategory = document.querySelector("#filter-category")

subscribe(renderState)
configureApiLinks(API_DOCUMENTATION_URL)
initializeReveals()
initTheme()

function getActiveFilters() {
	return {
		schoolId: schoolSelect.value,
		name: searchInput.value,
		modality: filterModality?.value || "",
		duration: filterDuration?.value || "",
		category: filterCategory?.value || "",
	}
}

async function loadInitialData() {
	setState({ loading: true, error: null })
	const healthRequest = getHealth().then(renderHealth).catch(renderHealthError)

	try {
		const [schools, careers] = await Promise.all([getSchools(), getCareers()])
		renderSchools(schools)
		setState({ schools, careers, totalCareers: careers.length, loading: false })
	} catch (error) {
		setState({ loading: false, error: error.message })
	}

	await healthRequest
}

async function loadCareers(filters) {
	setState({ loading: true, error: null, filters })
	try {
		const careers = await getCareers({ schoolId: filters.schoolId, name: filters.name })
		setState({ careers, loading: false })
	} catch (error) {
		setState({ careers: [], loading: false, error: error.message })
	}
}

function applyAllFilters() {
	const f = getActiveFilters()
	loadCareers({ schoolId: f.schoolId, name: f.name })
}

searchForm.addEventListener("submit", (event) => {
	event.preventDefault()
	applyAllFilters()
	document
		.querySelector("#catalogo")
		.scrollIntoView({ behavior: "smooth", block: "start" })
})

schoolSelect.addEventListener("change", applyAllFilters)
filterModality?.addEventListener("change", () => {
	setState({ filters: getActiveFilters() })
})
filterDuration?.addEventListener("change", () => {
	setState({ filters: getActiveFilters() })
})
filterCategory?.addEventListener("change", () => {
	setState({ filters: getActiveFilters() })
})

refreshButton.addEventListener("click", applyAllFilters)
retryButton.addEventListener("click", applyAllFilters)

clearFiltersButton.addEventListener("click", () => {
	schoolSelect.value = ""
	searchInput.value = ""
	if (filterModality) filterModality.value = ""
	if (filterDuration) filterDuration.value = ""
	if (filterCategory) filterCategory.value = ""
	loadCareers({ schoolId: "", name: "" })
})

document
	.querySelector("#career-table-body")
	.addEventListener("click", async (event) => {
		const compareBtn = event.target.closest("[data-compare-id]")
		if (compareBtn) return
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

export async function showDetail(id) {
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

testLaunchBtn?.addEventListener("click", showVocationalTest)

document.querySelector("#test-close-btn")?.addEventListener("click", () => {
	document.querySelector("#test-dialog")?.close()
})
document.querySelector("#test-dialog")?.addEventListener("click", (e) => {
	if (e.target === e.currentTarget) e.currentTarget.close()
})

compareBtn?.addEventListener("click", openComparator)

document.querySelector("#comparator-close-btn")?.addEventListener("click", () => {
	document.querySelector("#comparator-dialog")?.close()
})
document.querySelector("#comparator-dialog")?.addEventListener("click", (e) => {
	if (e.target === e.currentTarget) e.currentTarget.close()
})

loadInitialData()

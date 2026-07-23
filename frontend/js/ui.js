const elements = {
	tableBody: document.querySelector("#career-table-body"),
	loading: document.querySelector("#loading-state"),
	empty: document.querySelector("#empty-state"),
	error: document.querySelector("#error-notice"),
	errorMessage: document.querySelector("#error-message"),
	resultCount: document.querySelector("#result-count"),
	activeFilter: document.querySelector("#active-filter"),
	schoolSelect: document.querySelector("#school-select"),
	schoolCount: document.querySelector("#school-count"),
	programCount: document.querySelector("#program-count"),
	heroProgramCount: document.querySelector("#hero-program-count"),
	serviceStatus: document.querySelector("#service-status"),
	dialog: document.querySelector("#career-dialog"),
	apiLinks: document.querySelectorAll("[data-api-link]"),
}

export function configureApiLinks(url) {
	elements.apiLinks.forEach((link) => {
		link.href = url
	})
}

function escapeHtml(value) {
	const node = document.createElement("span")
	node.textContent = String(value ?? "")
	return node.innerHTML
}

function careerRow(career, index) {
	return `
        <tr class="career-row" data-career-id="${career.id}" tabindex="0" style="--index:${index}">
            <td><span class="code-label">${escapeHtml(career.code)}</span></td>
            <td><strong>${escapeHtml(career.name)}</strong></td>
            <td>${escapeHtml(career.school.name)}</td>
            <td>${career.durationTerms} ${escapeHtml(career.durationUnit).toLowerCase()}</td>
            <td><span class="tag tag-blue">${escapeHtml(career.modality)}</span></td>
            <td><span class="tag tag-green"><i></i>${escapeHtml(career.status)}</span></td>
            <td>
                <button class="row-action" type="button" data-detail-id="${career.id}" aria-label="Ver ${escapeHtml(career.name)}">
                    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>
                </button>
            </td>
        </tr>`
}

export function renderState(state) {
	const hasResults = state.careers.length > 0
	elements.loading.hidden = !state.loading
	elements.error.hidden = !state.error
	elements.empty.hidden = state.loading || Boolean(state.error) || hasResults
	elements.tableBody.closest("table").hidden =
		state.loading || Boolean(state.error) || !hasResults

	if (state.error) elements.errorMessage.textContent = state.error
	elements.tableBody.innerHTML = state.careers.map(careerRow).join("")
	elements.resultCount.textContent = `${state.careers.length} ${state.careers.length === 1 ? "resultado" : "resultados"}`
	elements.activeFilter.textContent = getFilterDescription(state)
	elements.programCount.textContent = state.totalCareers || "—"
	elements.heroProgramCount.textContent = state.totalCareers || "0"
}

function getFilterDescription(state) {
	const selectedSchool = state.schools.find(
		(school) => String(school.id) === String(state.filters.schoolId),
	)
	if (selectedSchool && state.filters.name)
		return `${selectedSchool.name} · “${state.filters.name}”`
	if (selectedSchool) return selectedSchool.name
	if (state.filters.name) return `Búsqueda: “${state.filters.name}”`
	return "Mostrando todo el catálogo"
}

export function renderSchools(schools) {
	const options = schools.map(
		(school) =>
			`<option value="${school.id}">${escapeHtml(school.name.replace("Escuela de ", ""))}</option>`,
	)
	elements.schoolSelect.insertAdjacentHTML("beforeend", options.join(""))
	elements.schoolCount.textContent = schools.length
}

export function renderHealth(health) {
	const isHealthy = health?.status === "saludable"
	elements.serviceStatus.classList.toggle("is-online", isHealthy)
	elements.serviceStatus.classList.toggle("is-offline", !isHealthy)
	elements.serviceStatus.lastElementChild.textContent = isHealthy
		? "Servicio disponible"
		: "Servicio degradado"
}

export function renderHealthError() {
	elements.serviceStatus.classList.add("is-offline")
	elements.serviceStatus.lastElementChild.textContent = "Servicio no disponible"
}

export function openCareerDialog(career) {
	document.querySelector("#dialog-code").textContent = career.code
	document.querySelector("#dialog-school").textContent = career.school.name
	document.querySelector("#dialog-title").textContent = career.name
	document.querySelector("#dialog-duration").textContent =
		`${career.durationTerms} ${career.durationUnit}`
	document.querySelector("#dialog-modality").textContent = career.modality
	document.querySelector("#dialog-status").textContent = career.status
	document.querySelector("#dialog-id").textContent = `#${career.id}`
	elements.dialog.showModal()
}

export function closeCareerDialog() {
	elements.dialog.close()
}

export function initializeReveals() {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible")
					observer.unobserve(entry.target)
				}
			})
		},
		{ threshold: 0.12 },
	)
	document
		.querySelectorAll(".reveal")
		.forEach((element) => observer.observe(element))
}

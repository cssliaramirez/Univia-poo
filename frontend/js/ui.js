import { getCareerInfo } from "./career-data.js"

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
	pensumContainer: document.querySelector("#dialog-pensum"),
	pensumBody: document.querySelector("#pensum-body"),
	pensumToggle: document.querySelector("#pensum-toggle"),
	apiLinks: document.querySelectorAll("[data-api-link]"),
}

const comparatorSelected = new Set()

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
	const checked = comparatorSelected.has(String(career.id)) ? "checked" : ""
	return `
		<tr class="career-row" data-career-id="${career.id}" tabindex="0" style="--index:${index}">
			<td><span class="code-label">${escapeHtml(career.code)}</span></td>
			<td><strong>${escapeHtml(career.name)}</strong></td>
			<td>${escapeHtml(career.school.name)}</td>
			<td>${career.durationTerms} ${escapeHtml(career.durationUnit).toLowerCase()}</td>
			<td><span class="tag tag-blue">${escapeHtml(career.modality)}</span></td>
			<td><span class="tag tag-green"><i></i>${escapeHtml(career.status)}</span></td>
			<td>
				<div class="row-actions-group">
					<button class="row-action-compare" type="button" data-compare-id="${career.id}" title="Comparar">
						<input type="checkbox" class="compare-checkbox" ${checked} tabindex="-1" />
					</button>
					<button class="row-action" type="button" data-detail-id="${career.id}" aria-label="Ver ${escapeHtml(career.name)}">
						<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></svg>
					</button>
				</div>
			</td>
		</tr>`
}

function getActiveFilterDescription(state) {
	const parts = []
	if (state.filters.schoolId) {
		const school = state.schools.find((s) => String(s.id) === String(state.filters.schoolId))
		if (school) parts.push(school.name.replace("Escuela de ", ""))
	}
	if (state.filters.name) parts.push(`"${state.filters.name}"`)
	if (state.filters.modality) parts.push(state.filters.modality)
	if (state.filters.duration) parts.push(`${state.filters.duration} cuatrimestres`)
	if (state.filters.category) {
		const labels = { licenciatura: "Licenciatura", ingenieria: "Ingeniería", tecnico_superior: "Técnico Superior" }
		parts.push(labels[state.filters.category] || state.filters.category)
	}
	return parts.length > 0 ? parts.join(" · ") : "Mostrando todo el catálogo"
}

export function applyClientFilters(state) {
	const { modality, duration, category } = state.filters
	const all = state.careers
	if (all.length === 0) return all

	return all.filter((c) => {
		if (modality && c.modality !== modality) return false
		if (duration && String(c.durationTerms) !== String(duration)) return false
		if (category) {
			const info = getCareerInfo(c.code)
			if (!info || info.category !== category) return false
		}
		return true
	})
}

export function renderState(state) {
	const filtered = applyClientFilters(state)
	const hasResults = filtered.length > 0
	elements.loading.hidden = !state.loading
	elements.error.hidden = !state.error
	elements.empty.hidden = state.loading || Boolean(state.error) || hasResults
	elements.tableBody.closest("table").hidden =
		state.loading || Boolean(state.error) || !hasResults

	if (state.error) elements.errorMessage.textContent = state.error
	elements.tableBody.innerHTML = filtered.map(careerRow).join("")
	elements.resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "resultado" : "resultados"}`
	elements.activeFilter.textContent = getActiveFilterDescription(state)
	elements.programCount.textContent = state.totalCareers || "—"
	elements.heroProgramCount.textContent = state.totalCareers || "0"

	document.querySelectorAll(".compare-checkbox").forEach((cb) => {
		cb.addEventListener("change", (e) => {
			e.stopPropagation()
			const id = cb.closest("[data-compare-id]")?.dataset.compareId
			if (!id) return
			if (cb.checked) {
				if (comparatorSelected.size >= 3) {
					cb.checked = false
					alert("Puedes comparar hasta 3 carreras a la vez.")
					return
				}
				comparatorSelected.add(id)
			} else {
				comparatorSelected.delete(id)
			}
			updateComparatorButton()
		})
	})

	updateComparatorButton()
}

export function updateComparatorButton() {
	const btn = document.querySelector("#compare-btn")
	if (!btn) return
	btn.disabled = comparatorSelected.size < 2
	btn.textContent = comparatorSelected.size >= 2
		? `Comparar (${comparatorSelected.size})`
		: "Comparar"
}

export function openComparator() {
	const allCareers = document.querySelectorAll("[data-career-id]")
	const selected = []
	allCareers.forEach((row) => {
		const id = row.dataset.careerId
		if (comparatorSelected.has(id)) {
			const name = row.querySelector("strong")?.textContent || ""
			const code = row.querySelector(".code-label")?.textContent || ""
			selected.push({ id, name, code })
		}
	})
	if (selected.length < 2) return

	const dialog = document.querySelector("#comparator-dialog")
	const container = dialog.querySelector("#comparator-content")
	container.innerHTML = `
		<div class="comparator-grid" style="--cols:${selected.length}">
			${selected.map((s) => {
				const career = document.querySelector(`[data-career-id="${s.id}"]`)
				const cells = career ? Array.from(career.querySelectorAll("td")) : []
				const schoolName = cells[2]?.textContent || ""
				const duration = cells[3]?.textContent || ""
				const modality = cells[4]?.textContent || ""
				const status = cells[5]?.textContent || ""
				return `<div class="comparator-col">
					<div class="comparator-header">
						<span class="code-label">${escapeHtml(s.code)}</span>
						<strong>${escapeHtml(s.name)}</strong>
					</div>
					<div class="comparator-rows">
						<div><span>Escuela</span>${escapeHtml(schoolName)}</div>
						<div><span>Duración</span>${escapeHtml(duration)}</div>
						<div><span>Modalidad</span>${escapeHtml(modality)}</div>
						<div><span>Estado</span>${escapeHtml(status)}</div>
					</div>
				</div>`
			}).join("")}
		</div>
		<div class="comparator-actions">
			<button class="secondary-button" id="clear-comparator">Limpiar comparador</button>
			<button class="primary-button" id="close-comparator">Cerrar</button>
		</div>`
	dialog.showModal()

	document.querySelector("#clear-comparator")?.addEventListener("click", () => {
		comparatorSelected.clear()
		updateComparatorButton()
		dialog.close()
	})
	document.querySelector("#close-comparator")?.addEventListener("click", () => {
		dialog.close()
	})
	dialog.addEventListener("click", (e) => {
		if (e.target === dialog) dialog.close()
	})
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

	const info = getCareerInfo(career.code)
	const pensumLink = document.querySelector("#dialog-pensum-link")
	const infoSection = document.querySelector("#dialog-info")
	const profileSection = document.querySelector("#dialog-profile-section")

	if (info) {
		pensumLink.href = info.pensumLink
		pensumLink.classList.remove("hidden")

		document.querySelector("#dialog-profile").textContent = info.idealProfile
		document.querySelector("#dialog-areas").textContent = info.workAreas
		profileSection.hidden = false

		const admissionList = document.querySelector("#dialog-admission-list")
		admissionList.innerHTML = info.admission.map((r) => `<li>${escapeHtml(r)}</li>`).join("")
		document.querySelector("#dialog-cost").textContent = info.cost
		document.querySelector("#dialog-scholarships").textContent = info.scholarships
		document.querySelector("#dialog-registration").textContent = info.registrationDates
		infoSection.hidden = false
	} else {
		pensumLink.classList.add("hidden")
		profileSection.hidden = true
		infoSection.hidden = true
	}

	const dialogImg = document.querySelector("#dialog-image")
	if (dialogImg) {
		const dialogImgContainer = dialogImg.parentElement
		dialogImgContainer.hidden = false
		if (career.imageUrl) {
			dialogImg.src = career.imageUrl
			dialogImg.alt = career.name
		} else {
			dialogImg.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
			dialogImg.alt = "Campus universitario"
		}
	}

	elements.dialog.showModal()
}

export function closeCareerDialog() {
	elements.dialog.close()
}

export function renderPensum(entries, totalTerms) {
	const grouped = {}
	entries.forEach((e) => {
		if (!grouped[e.termNumber]) grouped[e.termNumber] = []
		grouped[e.termNumber].push(e)
	})

	let html = "<div class='pensum-grid'>"
	for (let t = 1; t <= totalTerms; t++) {
		const subjects = grouped[t] || []
		html += "<div class='pensum-term'><h4>Cuatrimestre " + t + "</h4><ul>"
		if (subjects.length === 0) {
			html += "<li class='pensum-empty-term'>Sin materias registradas</li>"
		} else {
			subjects.forEach((s) => {
				html += "<li><span class='pensum-subject'>" + escapeHtml(s.subjectName) + "</span><span class='pensum-credits'>" + s.credits + " cr</span></li>"
			})
		}
		html += "</ul></div>"
	}
	html += "</div>"

	const totalCredits = entries.reduce((sum, e) => sum + e.credits, 0)
	html += "<p class='pensum-total'><strong>Total: " + entries.length + " materias · " + totalCredits + " creditos</strong></p>"

	if (elements.pensumBody) {
		elements.pensumBody.innerHTML = html
		elements.pensumBody.hidden = false
	}
	if (elements.pensumContainer) elements.pensumContainer.hidden = false
	if (elements.pensumToggle) elements.pensumToggle.textContent = "Ocultar pensum"
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

export { comparatorSelected }

import { CATEGORY_CAREERS, TEST_QUESTIONS } from "./career-data.js"
import { getState } from "./state.js"

export function showVocationalTest() {
	const dialog = document.querySelector("#test-dialog")
	const container = dialog.querySelector("#test-container")
	const particles = dialog.querySelector(".test-particles")
	let current = 0
	const scores = {}

	if (particles) {
		particles.innerHTML = Array.from({ length: 18 }, () => {
			const s = 3 + Math.random() * 8; const x = Math.random() * 100; const y = Math.random() * 100
			const d = 6 + Math.random() * 14; const dl = 0.5 + Math.random() * 2.5
			return `<span style="width:${s}px;height:${s}px;left:${x}%;top:${y}%;animation-delay:${dl}s;animation-duration:${d}s;opacity:${0.15 + Math.random() * 0.2}"></span>`
		}).join("")
	}

	function renderQuestion() {
		if (current >= TEST_QUESTIONS.length) return showResults()
		const q = TEST_QUESTIONS[current]
		container.innerHTML = `
			<div class="test-progress">
				<div class="test-progress-top">
					<span class="test-progress-text">Pregunta ${current + 1} de ${TEST_QUESTIONS.length}</span>
					<span class="test-percent" data-val="${Math.round((current / TEST_QUESTIONS.length) * 100)}">0%</span>
				</div>
				<div class="test-steps">
					${TEST_QUESTIONS.map((_, i) =>
						`<div class="test-step ${i < current ? 'filled' : ''} ${i === current ? 'active' : ''}"></div>`
					).join("")}
				</div>
			</div>
			<h3 class="test-question">${q.question}</h3>
			<div class="test-answers">
				${q.answers.map((a, i) => `
					<button class="test-answer test-answer-fun" data-i="${i}" style="--ai:${i}">
						<span class="test-answer-num">${String.fromCharCode(97 + i)}</span>
						<span>${escapeHtml(a.text)}</span>
						<span class="test-answer-sparkle"></span>
					</button>
				`).join("")}
			</div>`

		animatePercent(container.querySelector(".test-percent"), current === 0 ? 0 : parseInt(container.querySelector(".test-percent").dataset.val))

		container.querySelectorAll(".test-answer-fun").forEach((btn) => {
			btn.addEventListener("click", function () {
				this.classList.add("test-answer-pop")
				this.querySelector(".test-answer-sparkle")?.classList.add("active")
				const answer = q.answers[parseInt(this.dataset.i)]
				for (const [cat, pts] of Object.entries(answer.scores)) {
					scores[cat] = (scores[cat] || 0) + pts
				}
				setTimeout(() => { current++; renderQuestion() }, 350)
			})
		})
	}

	function animatePercent(el, target) {
		if (!el) return
		let v = 0
		const step = () => {
			if (v < target) { v++; el.textContent = v + "%"; requestAnimationFrame(step) }
		}
		requestAnimationFrame(step)
	}

	function showResults() {
		const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])
		const topCats = sorted.slice(0, 3)
		const allCareers = getState().careers
		const recommendedCodes = []
		for (const [cat] of topCats) {
			if (CATEGORY_CAREERS[cat]) {
				for (const code of CATEGORY_CAREERS[cat]) {
					if (!recommendedCodes.includes(code)) recommendedCodes.push(code)
				}
			}
		}
		const recommended = allCareers.filter((c) => recommendedCodes.includes(c.code))
		const top3 = recommended.slice(0, 3)
		const emojis = ["🏆", "🥈", "🥉"]

		launchConfetti()

		container.innerHTML = `
			<div class="test-results">
				<div class="test-results-icon">
					<svg viewBox="0 0 24 24">
						<path d="M9 11l3 3L22 4"/>
						<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
					</svg>
				</div>
				<h3>¡Resultados listos!</h3>
				<p class="test-subtitle">Estas carreras encajan con tu perfil</p>
				<div class="test-recommended-list">
					${top3.map((c, i) => `
						<div class="test-recommended-card" style="--i:${i}">
							<span class="test-rank-emoji">${emojis[i] || "⭐"}</span>
							<div>
								<strong>${escapeHtml(c.name)}</strong>
								<span class="code-label">${escapeHtml(c.code)} · ${escapeHtml(c.school.name)}</span>
								<p class="test-card-meta">${c.durationTerms} cuatrimestres · ${escapeHtml(c.modality)}</p>
							</div>
							<button class="secondary-button test-detail-btn" data-id="${c.id}">Ver</button>
						</div>
					`).join("")}
				</div>
				${top3.length === 0 ? '<p class="test-empty">No se encontraron coincidencias. Intenta de nuevo.</p>' : ''}
				<div class="test-actions">
					<button class="secondary-button test-fun-btn" id="test-retry">
						<svg aria-hidden="true" viewBox="0 0 24 24" width="15" fill="none" stroke="currentColor" stroke-width="1.8">
							<path d="M20 7v5h-5"/><path d="M18.1 16a8 8 0 1 1 .9-9l1 5"/>
						</svg>
						Repetir
					</button>
					<button class="primary-button" id="test-close">Entendido</button>
				</div>
			</div>`

		document.querySelector("#test-retry")?.addEventListener("click", () => {
			current = 0
			for (const k of Object.keys(scores)) delete scores[k]
			renderQuestion()
		})
		document.querySelector("#test-close")?.addEventListener("click", () => dialog.close())

		container.querySelectorAll(".test-detail-btn").forEach((btn) => {
			btn.addEventListener("click", async (event) => {
				event.stopPropagation()
				const { showDetail } = await import("./app.js")
				dialog.close()
				showDetail(btn.dataset.id)
			})
		})
	}

	function launchConfetti() {
		const colors = ["#0071e3", "#30d158", "#ff9f0a", "#ff453a", "#bf5af2", "#5ac8fa", "#ffd60a"]
		for (let i = 0; i < 60; i++) {
			const confetti = document.createElement("span")
			confetti.className = "confetti-piece"
			confetti.style.cssText = `
				left:${Math.random() * 100}%;
				top:${-10 - Math.random() * 20}%;
				width:${6 + Math.random() * 8}px;
				height:${4 + Math.random() * 8}px;
				background:${colors[Math.floor(Math.random() * colors.length)]};
				animation-delay:${Math.random() * 0.8}s;
				animation-duration:${1.2 + Math.random() * 2}s;
				border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
				transform: rotate(${Math.random() * 360}deg);
			`
			container.appendChild(confetti)
			setTimeout(() => confetti.remove(), 3500)
		}
	}

	renderQuestion()

	if (particles) particles.classList.add("active")
	dialog.showModal()
}

function escapeHtml(v) {
	const n = document.createElement("span")
	n.textContent = String(v ?? "")
	return n.innerHTML
}

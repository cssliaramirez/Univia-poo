const STORAGE_KEY = "univia-theme"

function applyTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme)
}

function resolveTheme() {
	const stored = localStorage.getItem(STORAGE_KEY)
	if (stored) return stored
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function initTheme() {
	applyTheme(resolveTheme())

	document.querySelector("#theme-toggle").addEventListener("click", () => {
		const current = document.documentElement.getAttribute("data-theme")
		const next = current === "dark" ? "light" : "dark"
		applyTheme(next)
		localStorage.setItem(STORAGE_KEY, next)
	})
}

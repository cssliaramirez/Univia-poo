import { API_BASE_URL, ENDPOINTS } from "./config.js"

async function request(path, options = {}) {
	const controller = new AbortController()
	const timeout = window.setTimeout(() => controller.abort(), 10000)

	try {
		const response = await fetch(`${API_BASE_URL}/api${path}`, {
			...options,
			headers: { Accept: "application/json", ...options.headers },
			signal: controller.signal,
		})

		const payload = await response.json().catch(() => null)
		if (!response.ok) {
			throw new Error(
				payload?.message || "El servidor no pudo completar la solicitud",
			)
		}
		return payload
	} catch (error) {
		if (error.name === "AbortError") {
			throw new Error("La solicitud tardó demasiado tiempo")
		}
		if (error instanceof TypeError) {
			throw new Error("No hay conexión con el backend")
		}
		throw error
	} finally {
		window.clearTimeout(timeout)
	}
}

export function getHealth() {
	return request(ENDPOINTS.health)
}

export function getSchools() {
	return request(ENDPOINTS.schools)
}

export function getCareers({ schoolId = "", name = "" } = {}) {
	const params = new URLSearchParams()
	if (schoolId) params.set("schoolId", schoolId)
	if (name.trim()) params.set("name", name.trim())
	const query = params.toString()
	return request(`${ENDPOINTS.careers}${query ? `?${query}` : ""}`)
}

export function getCareer(id) {
	return request(`${ENDPOINTS.careers}/${id}`)
}

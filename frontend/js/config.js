const isLocalDevelopment = ["localhost", "127.0.0.1"].includes(
	window.location.hostname,
)

export const API_BASE_URL = isLocalDevelopment
	? "http://localhost:7000"
	: window.location.origin

export const API_DOCUMENTATION_URL = `${API_BASE_URL.replace(/\/+$/, "")}/docs`

export const ENDPOINTS = {
	health: "/health",
	schools: "/schools",
	careers: "/careers",
}

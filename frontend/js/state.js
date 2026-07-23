const state = {
	schools: [],
	careers: [],
	totalCareers: 0,
	filters: { schoolId: "", name: "" },
	loading: true,
	error: null,
}

const listeners = new Set()

export function getState() {
	return structuredClone(state)
}

export function setState(patch) {
	Object.assign(state, patch)
	listeners.forEach((listener) => listener(getState()))
}

export function subscribe(listener) {
	listeners.add(listener)
	return () => listeners.delete(listener)
}

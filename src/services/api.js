import axios from 'axios'
import store from '../store'

const api = axios.create({
	baseURL: 'http://127.0.0.1:3333',
})

api.interceptors.request.use(config => {
	const { token } = store.getState().auth
	const headers = { ...config.headers }

	const { active: currentTeam } = store.getState().teams

	if (token) {
		headers.Authorization = `Bearer ${token}`
	}

	if (currentTeam) {
		headers.TEAM = currentTeam.slug
	}

	return { ...config, headers }
})

export default api

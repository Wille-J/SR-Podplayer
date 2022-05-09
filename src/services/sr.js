async function fetchJson(myUrl) {
	const response = await fetch(myUrl)
	if (!response.ok) {
		throw new Error("response error")
	}
	return response.json()
}

const sr = {
	async searchForPod(searchWord) {
		// Alla radioprogram som har en podd (filter=program.haspod)
		const endpoint = `https://api.sr.se/api/v2/programs?filter=program.haspod&filterValue=true&pagination=false&format=json`
		const response = await fetchJson(endpoint)

		const podResult = []

		for (const pod of response.programs) {
			if (pod.name.toLowerCase().includes(searchWord.toLowerCase())) {
				const podObject = {
					id: pod.id,
					name: pod.name,
				}

				podResult.push(podObject)
			}
		}

		return podResult
	},

	async getEpisodes(id) {
		const endpoint =
			`https://api.sr.se/api/v2/episodes?programid=` +
			id +
			`&size=1&format=json`
		const response = await fetchJson(endpoint)

		return response.episodes
	},

	async updatePlayerUrl(id) {
		// Uppdatera spelaren med en ny URL
		const endpoint =
			`https://api.sr.se/api/v2/episodes?programid=` +
			id +
			`&size=1&format=json`
		const response = await fetchJson(endpoint)
		const episodes = response.episodes
		const updateResult = episodes[0].listenpodfile.url

		return updateResult
	},
}

export default sr

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
		const endpoint = `https://api.sr.se/api/v2/programs?filter=program.haspod&filterValue=true&isarchived=false&pagination=false&format=json`
		const response = await fetchJson(endpoint)

		const podResult = []

		for (const pod of response.programs) {
			if (pod.programcategory !== undefined) {
				// const endpoint =
				// 	`http://api.sr.se/api/v2/episodes/getlatest?programid=` +
				// 	pod.id +
				// 	`&format=json`
				// const response = await fetchJson(endpoint)
				// if (response.episode.listenpodfile !== undefined) {
				if (pod.name.toLowerCase().includes(searchWord.toLowerCase())) {
					const podObject = {
						id: pod.id,
						name: pod.name,
						image: pod.programimage,
						desc: pod.description,
						category: pod.programcategory.name,
						// OBS: Vissa program har programcategory.name = undefined
					}
					podResult.push(podObject)
				}
				// }
			}
		}

		return podResult
	},

	async getEpisodes(id) {
		// Alla avsnitt för ett visst programid
		const endpoint =
			`https://api.sr.se/api/v2/episodes?programid=` +
			id +
			`&pagination=false&format=json`
		const response = await fetchJson(endpoint)

		return response.episodes
	},

	async loadLatestEpisode(id) {
		// Det senaste avsnittet för ett visst programid
		const endpoint =
			`http://api.sr.se/api/v2/episodes/getlatest?programid=` +
			id +
			`&format=json`
		const response = await fetchJson(endpoint)

		return response.episode.listenpodfile.url
	},
}

export default sr

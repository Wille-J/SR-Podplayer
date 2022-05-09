import { defineStore } from "pinia"

export const usePlayerStore = defineStore({
	id: "player",
	state: () => ({
		url: "",
	}),
	actions: {
		changeUrl(url) {
			console.log("url:", url)
			this.url = url
		},
	},
})

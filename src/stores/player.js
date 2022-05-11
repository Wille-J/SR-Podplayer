import { defineStore } from "pinia"

export const usePlayerStore = defineStore({
	id: "player",
	state: () => ({
		url: "",
	}),
	actions: {
		changeUrl(url) {
			this.url = url
		},
	},
})

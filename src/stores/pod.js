import { defineStore } from "pinia"

export const usePodStore = defineStore({
	id: "pod",
	state: () => ({
		pod: "",
	}),
	actions: {
		changePod(pod) {
			this.pod = pod
		},
	},
})

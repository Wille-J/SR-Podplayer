import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const usePodStore = defineStore({
	id: "pod",
	state: () => ({
		todos: useStorage("todos", []),
		pod: "",
	}),
	actions: {
		changePod(pod) {
			this.pod = pod
		},
	},
})

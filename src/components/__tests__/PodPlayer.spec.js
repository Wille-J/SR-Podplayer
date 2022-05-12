import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import PodPlayer from "../PodPlayer.vue"

// Det här är ett dåligt test, funkar ej..

describe("PodPlayer", () => {
	it("exists", () => {
		const wrapper = mount(PodPlayer)
		const domWrapper = wrapper.find("audio")
		console.log(domWrapper.attributes())
		expect(PodPlayer.exists()).toBe(true)
	})
})

// FUNKAR EJ:
// describe("PodPlayer", () => {
// 	it("contains the audio-tag", () => {
// 		const wrapper = mount(PodPlayer)
// 		wrapper.get("audio")
// 		expect(() => wrapper.get("audio"))
// 		console.log("Det här meddelandet kommer från Vitest...")
// 	})
// })

import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import PodPlayer from "../PodPlayer.vue"

describe("PodPlayer", () => {
	it("renders properly", () => {
		const wrapper = mount(PodPlayer, { props: { msg: "Hello Vitest" } })
		expect(wrapper.text()).toContain("Hello Vitest")
		console.log("Det här meddelandet kommer från Vitest...")
	})
})

// Det här är ett test

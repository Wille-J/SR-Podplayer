<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
import Carousel from "@/components/Carousel.vue"
import "bootstrap"
</script>

<template>
	<RouterLink to="/about">
		<div class="header text-center">
			<img src="@/assets/logo.svg" alt="logo.svg" class="mySvg" />
			<!-- Media query: Poddler text-logo -->
			<img src="@/assets/Poddler.svg" alt="Poddler.svg" height="100" width="300" class="poddler" />
		</div>
	</RouterLink>

	<div class="container p-2">
		<div class="channels">
			<h4>Utforska Sveriges Radios kanaler:</h4>
			<em>Hitta din nya favoritpodd!</em>

			<div class="carousels">
				<div class="carousel">
					<Carousel :list="p1" id="P1" />
				</div>
				<div class="carousel">
					<Carousel :list="p2" id="P2" />
				</div>
				<div class="carousel">
					<Carousel :list="p3" id="P3" />
				</div>
				<div class="carousel">
					<Carousel :list="p4" id="P4" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchText: "",
			p1: [],
			p2: [],
			p3: [],
			p4: [],
		}
	},
	methods: {
		async searchForPods() {
			this.p1 = await srApi.searchForPod("p1")
			this.p2 = await srApi.searchForPod("p2")
			this.p3 = await srApi.searchForPod("p3")
			this.p4 = await srApi.searchForPod("p4")
		},
		async performLoadEpisodes(pod) {
			this.podStore.changePod(pod)
			let audioUrl = await srApi.loadLatestEpisode(pod.id)
			this.playerStore.changeUrl(audioUrl)
		},
	},

	computed: {
		...mapStores(usePlayerStore),
		...mapStores(usePodStore),
	},
	async mounted() {
		this.searchForPods()
	},
}
</script>

<style scoped>
.carousels {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	overflow-y: scroll;
	max-height: 47vh;
}

.carousel {
	margin: 0.5em;
	border-radius: 0.7em;
}

.header,
a {
	display: block;
	width: fit-content;
	margin: auto;
}

.mySvg {
	mix-blend-mode: pass-through;
	margin-top: 1.25em;
}

#carousel-inner {
	border-radius: 0.7em;
	padding: 0.5em;
}

.carousel-inner:hover {
	background-color: #1d1f2d;
	transition: 0.5s;
}

.poddler {
	filter: invert(1);
	padding: 0.5em;
	margin-left: 0.5em;
}

@media (max-width: 768px) {
	.poddler {
		display: none;
	}
}
</style>

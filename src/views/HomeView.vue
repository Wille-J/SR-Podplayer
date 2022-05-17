<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
import "bootstrap"
</script>

<template>
	<div class="text-center">
		<img src="@/assets/logo.svg" alt="logo.svg" class="mySvg" />

		<!-- Poddler-text-logo
		<img src="@/assets/Poddler.svg" alt="Poddler.svg" height="100" width="300" class="poddler" /> -->
	</div>

	<div class="container p-3 mt-3">
		<div class="channels">
			<h2>Sveriges Radios kanaler:</h2>
			<p>Hitta din nya favoritpodd!</p>

			<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<!-- Ska bara vara Obj.1 -->
					<!-- <div class="carousel-item active">
						<img class="d-block w-25" :src="p1[0].program.image" alt="First slide" />
					</div> -->
					<div class="carousel-item" v-for="pod in p1.slice(1)">
						<img class="d-block w-25" :src="pod.image" alt="First slide" />
					</div>
				</div>
			</div>

			<!-- <div class="resultList mb-3">
				<RouterLink to="/pod" v-for="pod in p1" @click="performLoadEpisodes(pod)" class="listItem">
					<img :src="pod.image" alt="pod-pic" width="90" height="90" />
					<div>
						{{ pod.name }}
					</div>
				</RouterLink>
			</div> -->
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
			console.log(this.p1)
		},
		async performLoadEpisodes(pod) {
			this.podStore.changePod(pod)
			let audioUrl = await srApi.loadLatestEpisode(pod.id)
			this.playerStore.changeUrl(audioUrl)
			// this.$route.push('/pod')		HAMPUS: Laddar in view:en när allt är klart.
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
.mySvg {
	mix-blend-mode: pass-through;
	margin-top: 20px;
}

.carousel {
	/* display: flex;
	flex-direction: row;
	overflow-x: scroll; */
	background-color: #252836;
	border-radius: 0.7em;
}

#carousel-inner {
	border-radius: 0.7em;
	padding: 0.5em;
}

.carousel-inner:hover {
	background-color: #1d1f2d;
	transition: 0.5s;
}

/* .poddler {
	filter: invert(1);
} */
</style>

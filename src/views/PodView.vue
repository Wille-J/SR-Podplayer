<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>
	<div class="header justify-content-center p-3">
		<img :src="podStore.pod.image" alt="pod-pic" width="100" height="100" />
		<div>
			<h1>{{ podStore.pod.name }}</h1>
			{{ podStore.pod.desc }}
		</div>
	</div>

	<div class="d-flex justify-content-center">
		<div class="resultList mb-3">
			<div v-for="episode in episodes" class="listItem text-center p-2"
				@click="performUpdatePlayer(episode.listenpodfile.url)">
				<img :src="episode.imageurl" alt="pod-pic" width="70" height="70" />
				<p>
					{{ episode.title }}
					<br />
					Publicerades: {{ convertDate(episode.publishdateutc) }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			episodes: [],
		}
	},
	methods: {
		async performGetEpisodes(id) {
			this.episodes = await srApi.getEpisodes(id)
		},
		async performUpdatePlayer(url) {
			this.playerStore.changeUrl(url)
		},
		convertDate(pubdate) {
			const trimmed = pubdate.slice(6, 16)
			const date = new Date(trimmed * 1000)
			//const humanDateFormat = date.toLocaleString()
			return (
				date.getFullYear() +
				"-" +
				("0" + (date.getMonth() + 1)).slice(-2) +
				"-" +
				("0" + date.getDate()).slice(-2)
			)
		},
	},

	computed: {
		...mapStores(usePlayerStore),
		...mapStores(usePodStore),
	},
	async mounted() {
		// HAMPUS: " pod?. " utvärdera uttrycket, om det finns
		if (this.podStore.pod?.id)
			this.episodes = await srApi.getEpisodes(this.podStore.pod.id)
	},
	// "Först körs mounted, watch håller koll på pod.id, om pod.id ändras körs watch.. vänta på podStore..."
	watch: {
		async "podStore.pod.id"() {
			console.warn("Watch ID Test: " + this.podStore.pod.id)
			this.episodes = await srApi.getEpisodes(this.podStore.pod.id)
		},
	},
}
</script>

<style scoped>
.header {
	display: flex;
	margin-bottom: 1em;
}

.header img {
	margin-top: 0.5em;
}

.listItem {
	align-items: center;
	border-radius: 0.7em;
}

.listItem:hover {
	background-color: #1d1f2d;
	transition: 0.5s;
}

.resultList {
	border-radius: 0.7em;
	background-color: #252836;
	padding: 1em;
	width: 90%;
	max-height: 60vh;
	overflow-y: scroll;
}

.resultList * {
	display: flex;
	text-align: left;
	text-decoration: none;
	color: white;
	padding: 0.2em;
}

img {
	border-radius: 0.7em;
	margin-right: 0.75em;
}

::-webkit-scrollbar {
	width: 0;
	background: transparent;
}
</style>

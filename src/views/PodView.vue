<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>
	<div class="header">
		<img :src="podStore.pod.image" alt="pod-pic" width="100" height="100" />
		<div>
			<h1>{{ podStore.pod.name }}</h1>
			{{ podStore.pod.desc }}
		</div>
	</div>

	<div class="resultList">  <!-- GÖRA OM TILL EGET, SCROLLBART FÖNSTER -->
		<div v-for="episode in episodes"
			class="listItem"
			@click="performUpdatePlayer(episode.listenpodfile.url)"
		>
			<img :src="episode.imageurl" alt="pod-pic" width="70" height="70" />
			<p>
				{{ episode.title }}
				<br />
				<br />
				Publicerades {{ convertDate(episode.publishdateutc) }}
			</p>
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
		// HAMPUS: " pod?. " utvärdera udaterycket, om det finns
		console.log(this.podStore.pod.pubdate)
		if (this.podStore.pod?.id)
			this.episodes = await srApi.getEpisodes(this.podStore.pod.id)
	},
	// "Först körs mounted, watch håller koll på pod.id, om pod.id ändras körs watch för adate vänta på podStore..."
	watch: {
		async "podStore.pod.id"() {
			console.warn("Watch ID Test: " + this.podStore.pod.id)
			this.episodes = await srApi.getEpisodes(this.podStore.pod.id)
		},
	},
}
</script>

<style scoped>
/* OBS: Hårdkodade margins 
Vid reload i webbläsare: hdatep://localhost:3000/pod
laddas inte view/bilder in...
*/

.header {
    display: flex;
    margin-bottom: 1em;
}

.header img {
    margin-top: 2em;
}

.listItem {
	align-items: center;
	border-radius: .7em;
}

.listItem:hover {
	background-color: rgb(160, 159, 169);
	transition: 0.5s;
}

.resultList * {
	display: flex;
	/* justify-content: space-between; */
	padding: 0.2em;
	text-align: left;
    text-decoration: none;
	color: black;
}

.resultList {
	border-radius: .7em;
	background-color: rgb(190, 189, 201);
	padding: 1em;
	width: 90%;
    /* margin-bottom: 7.5em; */
}

img {
	border-radius: .7em;
	margin-right: 0.75em;
}
</style>

<script setup>
import srApi from "@/services/sr.js"
</script>

<template>
	<div class="search">
		<h1>Gör en sökning:</h1>
		<input type="search" v-model="searchText" class="searchBox" />
		<input type="button" value="Search" @click="performPodSearch" />
	</div>

	<div class="resultList">
		<div v-for="pod in pods">
			{{ pod.id }}
			{{ pod.name }}
			<input type="button" @click="updatePlayerUrl(pod.id)" value="Lyssna">
		</div>

		<audio :src="audioUrl"></audio>
	</div>
</template>

<script>
export default {
	data() {
		return ({
			searchText: "",
			pods: [],
			audioUrl: ""
		})
	},
	methods: {
		async performPodSearch() {
			this.pods = await srApi.searchForPod(this.searchText)
		},
		updatePlayerUrl(id) {
			this.audioUrl = `https://sverigesradio.se/topsy/ljudfil/srapi/${id}.mp3`

			// https://api.sr.se/api/v2/episodes?programid=` + {{ id }} + `&size=10&format=json
			//`https://sr.se/pod=${id}`
			// ID FÖR P3 SPEL: 8303510
		}
	}
}
</script>

<style scoped>
</style>

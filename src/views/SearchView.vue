<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia";
import { usePlayerStore } from "@/stores/player.js"
</script>

<template>
	<div class="search">
		<h1>Gör en sökning:</h1>
		<input type="search" v-model="searchText" class="searchBox" />
		<input type="button" value="Search" @click="performPodSearch" @keyup.enter="performPodSearch" />
	</div>

	<!-- /search/:searchText -->
	<!-- /search/results/episodes -->
	<!-- /search/episodes -->

	<div class="resultList">
		<div v-for="pod in pods">
			<br>
			{{ pod.name }}
			| ID: {{ pod.id }} |

			<!-- @click För att uppdatera spelarens URL -->
			<input type="button" @click="performUpdatePlayer(pod.id)" value="Välj" />
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			searchText: "",
			pods: [],
		}
	},
	methods: {
		async performPodSearch() {
			this.pods = await srApi.searchForPod(this.searchText)
		},
		async performUpdatePlayer(id) {
			console.log("poddens ID: " + id)
			let audioUrl = await srApi.updatePlayerUrl(id)
			console.log(audioUrl)
			this.playerStore.changeUrl(audioUrl)
		},
	},

	computed: {
		...mapStores(usePlayerStore),
	},
}
</script>

<style scoped>
</style>
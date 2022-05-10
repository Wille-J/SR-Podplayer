<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia";
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>
	<div class="search">
		<input type="search" v-model="searchText" class="searchBox" placeholder="Sök" />
		<input type="button" value="Search" @click="performPodSearch" @keyup.enter="performPodSearch" />
	</div>

	<!-- FÖRSLAG PÅ NAVIGERING: -->
	<!-- /search/:searchText -->
	<!-- /search/results/episodes -->
	<!-- /search/episodes -->

	<div class="resultList">
		<RouterLink to="/pod" v-for="pod in pods" @click="performLoadEpisodes(pod)" class="listItem">
			<img :src="pod.image" alt="pod-pic" width="100" height="100">
			{{ pod.name }}
		</RouterLink>
		<!-- HAMPUS: a tagg - prevent click - överskriva @click-->
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
		async performLoadEpisodes(pod) {
			this.podStore.changePod(pod)
			let audioUrl = await srApi.loadLatestEpisode(pod.id)
			this.playerStore.changeUrl(audioUrl)
			// this.$route.push('/pod')				HAMPUS: LADDAR IN VIEW:EN NÄR ALLT ÄR KLART!
		},
	},

	computed: {
		...mapStores(usePlayerStore),
		...mapStores(usePodStore),
	},
}
</script>

<style scoped>
.search {
	padding: 2em;
}

.listItem {
	border: 1px solid black;
	border-radius: 1em;
	align-items: center;
}

.listItem:hover {
	background-color: rgb(160, 160, 160);
}

.resultList * {
	display: flex;
	justify-content: space-between;
	padding: .2em;
}
</style>
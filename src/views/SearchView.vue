<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>
	<div class="search text-center p-5">
		<input type="search" v-model="searchText" class="searchBox" placeholder="Sök" @keyup.enter="performPodSearch" />
		<input type="button" value="Search" @click="performPodSearch" />
		<br />Eventuell filtreringsfunktion...
	</div>

	<!-- FÖRSLAG PÅ NAVIGERING: -->
	<!-- /search/:searchText -->
	<!-- /search/results/episodes -->
	<!-- /search/episodes -->

	<div class="resultList bg-info rounded">
		<!-- GÖRA OM TILL EGET, SCROLLBART FÖNSTER -->
		<RouterLink to="/pod" v-for="pod in pods" @click="performLoadEpisodes(pod)" class="listItem">
			<div class="text-center">
				<img :src="pod.image" alt="pod-pic" width="90" height="90" />
				{{ pod.name }}
				<br /><br />
				{{ pod.category }}
			</div>
		</RouterLink>
		<!-- HAMPUS: a tagg - prevent click - överskriva @click-->
	</div>

	Sökhistorik:
	<br />
	<br />Enklare databas?
	<br />PiniaStore?
	<br />(under denna session)
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
			// this.$route.push('/pod')		HAMPUS: Laddar in view:en när allt är klart.
		},
	},

	computed: {
		...mapStores(usePlayerStore),
		...mapStores(usePodStore),
	},
}
</script>

<style scoped>
/*

.search {
	padding: 2em;
}

.listItem {
	align-items: center;
	border-radius: 0.7em;
}

.listItem:hover {
	background-color: rgb(160, 159, 169);
	transition: 0.5s;
}

.resultList * {
	display: flex;
	padding: 0.2em;
	text-align: left;
	text-decoration: none;
	color: black;
}

*/

.resultList {
	/* 
	border-radius: 0.7em;
	background-color: rgb(190, 189, 201);
	padding: 1em; 
	*/

	width: 90%;
}

/*

img {
	border-radius: 0.7em;
	margin-right: 0.75em;
}

*/
</style>

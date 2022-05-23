<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
import "bootstrap"
</script>

<template>
	<div class="search mt-4">
		<input type="search" class="searchInput form-control w-50 mx-auto" v-model="searchText" @keyup.enter="performPodSearch" placeholder="Sök.." />
	</div>

	<div class="filterBar text-center mt-2 mb-2">
		<img src="../assets/filter.svg" alt="filter.svg" />
	</div>

	<div class="d-flex justify-content-center mytester">
		<div class="resultList">
			<RouterLink to="/pod" v-for="pod in pods" @click="performLoadEpisodes(pod)" class="listItem">
				<img :src="pod.image" alt="pod-pic" width="90" height="90" />
				<div>
					{{ pod.name }}
					<br />
					<em>Kategori: </em>{{ pod.category }}
				</div>
			</RouterLink>
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
}
</script>

<style scoped>
.resultList:empty {
	display: none;
}

.resultList {
	display: flex;
	flex-direction: column;
	background-color: #252836;
	border-radius: 0.7em;
	padding: 0.3em;
	width: 90%;
	max-height: 65vh;
	overflow-y: scroll;
}

.resultList img {
	border-radius: 0.7em;
	margin-right: 0.75em;
}

.listItem {
	display: flex;
	text-decoration: none;
	color: white;
	border-radius: 0.7em;
	padding: 0.5em;
}

.listItem:hover {
	background-color: #1d1f2d;
	transition: 0.5s;
}

::-webkit-scrollbar {
	width: 0;
	background: transparent;
}

.search input {
	padding-left: 1.8em;
	background-image: url("../assets/navbar/search.svg");
	background-size: 18px 18px;
	background-position: 7px 0.7rem;
	background-repeat: no-repeat;
}

input.searchInput:focus {
	outline: none;
	border: none;
	box-shadow: 0 0 0 0.2rem #726f9f;
}
</style>

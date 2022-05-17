<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>
	<div class="search p-3">
		<input type="search" class="form-control w-50 mx-auto" v-model="searchText" @keyup.enter="performPodSearch"
			placeholder=" Sök.." />
	</div>

	<div class="d-flex justify-content-center">
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
.resultList {
	display: flex;
	flex-direction: column;
	background-color: #252836;
	border-radius: 0.7em;
	padding: 1em;
	width: 90%;
	overflow-y: scroll;
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

img {
	border-radius: 0.7em;
	margin-right: 0.75em;
}

::-webkit-scrollbar {
	width: 0;
	background: transparent;
}
</style>

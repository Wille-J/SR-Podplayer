<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>
	<div class="search p-3">
		<input type="search" class="form-control w-50 mx-auto" v-model="searchText" @keyup.enter="performPodSearch"
			placeholder=" Sök..">
	</div>

	<div class="d-flex justify-content-center">
		<div class="resultList mb-3">

			<RouterLink to="/pod" v-for="pod in pods" @click="performLoadEpisodes(pod)" class="listItem">
				<div class="text-center p-2">
					<img :src="pod.image" alt="pod-pic" width="90" height="90" />
					{{ pod.name }}
					<br /><br />
					{{ pod.category }}
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
	color: white;
}

.resultList {
	border-radius: 0.7em;
	background-color: #252836;
	padding: 1em;
	width: 90%;
	overflow-y: scroll;
}

::-webkit-scrollbar {
	width: 0;
	background: transparent;
}

img {
	border-radius: 0.7em;
	margin-right: 0.75em;
}
</style>

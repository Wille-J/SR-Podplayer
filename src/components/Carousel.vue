<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>

    <div :id="id" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- Ska bara vara Obj.1 -->
            <div class="carousel-item active">
                <RouterLink to="/pod" @click="performLoadEpisodes(list[0])" class="listItem">
                    <img class="d-block w-100" :src="list[0]?.image" alt="First slide" />
                </RouterLink>
            </div>
            <div class="carousel-item" v-for="pod in list.slice(1)">
                <RouterLink to="/pod" @click="performLoadEpisodes(pod)" class="listItem">
                    <img class="d-block w-100" :src="pod.image" alt="First slide" />
                </RouterLink>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="'#' + id" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#' + id" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</template>

<script>
export default {
    props: {
        list: Array,
        id: String
    },
    methods: {
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
.carousel.slide {
    width: 35vw;
}

@media (min-width: 768px) {
    .carousel.slide {
        width: 22vw;
    }
}
</style>

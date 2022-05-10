<script setup>
import srApi from "@/services/sr.js"
import { mapStores } from "pinia";
import { usePlayerStore } from "@/stores/player.js"
import { usePodStore } from "@/stores/pod.js"
</script>

<template>
    <div class="header">
        <img :src="podStore.pod.image" alt="pod-pic" width="100" height="100">
        <div>
            <h1>{{ podStore.pod.name }}</h1>
            {{ podStore.pod.desc }}
        </div>
    </div>

    <div class="resultList">
        <div v-for="episode in episodes" class="listItem" @click="performUpdatePlayer(episode.listenpodfile.url)">
            <img :src="episode.imageurl" alt="pod-pic" width="50" height="50">
            <p>
                {{ episode.title }}
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
    // "Först körs mounted, watch håller koll på pod.id, om pod.id ändras körs watch för att vänta på podStore..." 
    watch: {
        async 'podStore.pod.id'() {
            console.warn("Watch ID Test: " + this.podStore.pod.id)
            this.episodes = await srApi.getEpisodes(this.podStore.pod.id)
        }
    },
}
</script>

<style scoped>
/* OBS: Hårdkodade margins 
Vid reload i webbläsare: http://localhost:3000/pod
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
    border: 1px solid black;
    border-radius: 1em;
    justify-content: center;
}

.listItem:hover {
    background-color: rgb(160, 160, 160);
}

.resultList {
    display: flex;
    flex-direction: column;
}

.resultList * {
    padding: .2em;
    display: flex;
    justify-content: left;
}
</style>
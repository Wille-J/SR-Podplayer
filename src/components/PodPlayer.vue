<script setup>
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
</script>

<template>
    <audio class="audioPlayer" controls id="mediaPlayer" :src="playerStore.url" type="audio/mpeg"
        controlsList="nodownload noplaybackrate">
        Your browser does not support the audio tag.
    </audio>
</template>

<script>
export default {
    computed: {
        ...mapStores(usePlayerStore),
    },


}
</script>

<style scoped>
</style>

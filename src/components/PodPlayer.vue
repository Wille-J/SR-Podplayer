<script setup>
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
</script>

<template>
    <audio controls id="mediaPlayer" :src="playerStore.url" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>
</template>

<script>
export default {
    computed: {
        ...mapStores(usePlayerStore)
    },
}
</script>

<style scoped>
</style>

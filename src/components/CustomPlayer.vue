<script setup>
import { mapStores } from "pinia"
import { usePlayerStore } from "@/stores/player.js"
</script>

<template>
    <audio ref="player" src="https://sverigesradio.se/topsy/ljudfil/srapi/8292355.mp3" type="audio/mpeg"></audio>
    <!-- <audio id="mediaPlayer" :src="playerStore.url" type="audio/mpeg"></audio> -->
    <button type="button" @click="this.playAudio">Play</button>
    <button type="button" @click="this.pauseAudio">Pause</button>
</template>

<script>
// const mp = document.getElementById('mediaPlayer')
export default {
    methods: {
        playAudio() {
            console.log(mp);
            mp.play();
        },
        pauseAudio() {
            mp.pause();
        },
        toggleAudio() {
            if (mp.paused) {
                mp.play()
            } else {
                mp.pause()
            }
        },
    },
    computed: {
        ...mapStores(usePlayerStore),
    },
}
</script>

<style scoped>
</style>

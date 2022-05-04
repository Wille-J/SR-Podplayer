<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <RouterView />

    <div class="footer">
      <div class="player">
        <p>
          Hårdkodad audio-source: <br />"P3 Spel - Avsnitt 54. Rollspela som bondtölp i GTA"
        </p>

        <audio controls id="mediaPlayer">
          <source
            src="https://sverigesradio.se/topsy/ljudfil/srapi/8303510.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
      </div>

      <div class="navbar">
        <nav>
          <RouterLink to="/"><font-awesome-icon icon="fa-thin fa-alarm-clock"/></RouterLink>
          <!-- <RouterLink to="/">Hem</RouterLink> -->
          <RouterLink to="/search">Sök</RouterLink>
          <RouterLink to="/filter">Filter</RouterLink>
          <RouterLink to="/profile">Profil</RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "@/assets/base.css";

.player, .navbar {
  /* border: 1px solid black; */
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.player {
	border: 1.5px solid red;
	min-width: 100%;
	bottom: 
}

nav * {
  padding-bottom: 0;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0;
  border: 1.5px solid black;
  font-size: 2em;
  /* height: 3em;*/
}

.footer {
  position: fixed;
  bottom: 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1.5px solid red; */
}

@media (min-width: 1024px) {
  /* Desktop */
}
</style>

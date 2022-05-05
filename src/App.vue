<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>

  </div>
  <div class="wrapper">
    <RouterView />

    <div class="footer">
      <div class="player">
        <p>
          Hårdkodad audio-source: <br />"P3 Spel - Avsnitt 54. Rollspela som bondtölp i GTA"
        </p>

        <audio controls id="mediaPlayer">
          <source src="https://sverigesradio.se/topsy/ljudfil/srapi/8303510.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>

      <div class="navbar">
        <nav>
          <RouterLink to="/"><img src="./assets/navbar/home.png" alt="home.png" width="40" height="40"></RouterLink>
          <RouterLink to="/search"><img src="./assets/navbar/search.png" alt="search.png" width="40" height="40"></RouterLink>
          <RouterLink to="/library"><img src="./assets/navbar/library.png" alt="library.png" width="40" height="40"></RouterLink>
          <RouterLink to="/profile"><img src="./assets/navbar/profile.png" alt="profile.png" width="40" height="40"></RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.navbar nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.player {
  border: 0.5px solid purple;
  min-width: 100%;
  margin-bottom: 0.5em;
}

nav img {
  padding: 0.5em;
  border: 1px solid black;
}

nav img:hover {
  background-color: rgb(160, 160, 160);
}

.footer {
  position: fixed;
  bottom: 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  /* Desktop */
}
</style>

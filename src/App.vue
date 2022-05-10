<script setup>
import { RouterLink, RouterView } from "vue-router";
import PodPlayer from "@/components/PodPlayer.vue";
</script>

<template>

  <div class="wrapper">
    <RouterView />

    <div class="player">
      <PodPlayer />
    </div>

    <div class="footer">
      <div class="navbar">
        <nav>
          <RouterLink to="/"><img src="./assets/navbar/home.png" alt="home.png" width="40" height="40"></RouterLink>
          <RouterLink to="/search"><img src="./assets/navbar/search.png" alt="search.png" width="40" height="40">
          </RouterLink>
          <RouterLink to="/library"><img src="./assets/navbar/library.png" alt="library.png" width="40" height="40">
          </RouterLink>
          <RouterLink to="/profile"><img src="./assets/navbar/profile.png" alt="profile.png" width="40" height="40">
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

/* OBS: Hårdkodade margins */

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

nav img {
  background-color: white;
  padding: 0.5em;
}

nav img:hover {
  background-color: rgb(160, 160, 160);
}

.footer {
  background-color: white;
  position: fixed;
  bottom: 0em;
  width: 100%;
}

.player {
  position: fixed;
  bottom: 0em;
  margin-bottom: 4em;
}

@media (min-width: 1024px) {
  /* Desktop */
}
</style>

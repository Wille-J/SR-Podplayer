<script setup>
import { RouterLink, RouterView } from "vue-router";
import PodPlayer from "@/components/PodPlayer.vue";
</script>

<template >

  <div class="wrapper">
    <div class="view">
      <RouterView />
    </div>

    <div class="player">
      <PodPlayer />
    </div>

    <div class="footer">
      <div class="navbar backgroundNav">
        <nav>
          <RouterLink to="/"><img src="./assets/navbar/home.svg" alt="home.svg" width="40" height="40"></RouterLink>
          <RouterLink to="/search"><img src="./assets/navbar/search.svg" alt="search.svg" width="40" height="40">
          </RouterLink>
          <RouterLink to="/library"><img src="./assets/navbar/library.svg" alt="library.svg" width="40" height="40">
          </RouterLink>
          <RouterLink to="/profile"><img src="./assets/navbar/profile.svg" alt="profile.svg" width="40" height="40">
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

/* OBS: Hårdkodade margins */

/* .backgroundNav{
  background-color: #1d1f2d;
} */

.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8em;
  width: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
}

nav img {
  background-color: white;
  border-radius: 0.2em;
  padding: .2em;
}

nav img:hover {
  background-color: rgb(160, 160, 160);
  filter: invert(1);
  transition: .5s;
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
  margin-bottom: 4.5em;
}

.navbar nav {
  display: flex;
  justify-content: space-evenly;
  padding: 0.5em;
}

@media (min-width: 1024px) {
  /* Desktop */
}
</style>

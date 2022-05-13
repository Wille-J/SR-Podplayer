<script setup>
import { RouterLink, RouterView } from "vue-router"
import PodPlayer from "@/components/PodPlayer.vue"
</script>

<template>
	<div class="view">
		<RouterView />
	</div>

	<div class="footer text-center fixed-bottom">
		<div class="player">
			<PodPlayer />
		</div>
		<nav class="navbar justify-content-between px-4 py-3">
			<RouterLink to="/"><img src="./assets/navbar/home.svg" alt="home.svg" /></RouterLink>
			<RouterLink to="/search"><img src="./assets/navbar/search.svg" alt="search.svg" />
			</RouterLink>
			<RouterLink to="/library"><img src="./assets/navbar/library.svg" alt="library.svg" />
			</RouterLink>
			<RouterLink to="/profile"><img src="./assets/navbar/profile.svg" alt="profile.svg" />
			</RouterLink>
		</nav>
	</div>
</template>

<style>
@import "@/assets/style/base.scss";

#app * {
	padding: 0;
}

.navbar img {
	filter: invert(1);
	height: 1.8em;
}

.navbar {
	background-color: #1d1f2d;
}

/* Ska vi ha bara font och färg i denna? */

/* FUNKAR EJ: */
/* Ligger fel?
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins"; 
*/



/*OBS, gammal CSS (innan Bootstrap)*/
/* .view {
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
	padding: 0.2em;
}

nav img:hover {
	background-color: rgb(160, 160, 160);
	filter: invert(1);
	transition: 0.5s;
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
} */


@media (min-width: 1024px) {
	/* Desktop */
}
</style>

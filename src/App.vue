<script setup>
import { RouterLink, RouterView } from "vue-router"
import PodPlayer from "@/components/PodPlayer.vue"
import "bootstrap"
</script>

<template>
	<div class="flexbox">
		<div class="view">
			<RouterView />
		</div>

		<div class="footer text-center fixed-bottom">
			<div class="player">
				<PodPlayer />
			</div>

			<nav class="navbar justify-content-between px-4 py-2">
				<RouterLink class="hus" to="/"><img src="./assets/navbar/home.svg" alt="home.svg" /></RouterLink>
				<RouterLink class="sok" to="/search"><img src="./assets/navbar/search.svg" alt="search.svg" /></RouterLink>
				<RouterLink class="bibl" to="/library"><img src="./assets/navbar/library.svg" alt="library.svg" /> </RouterLink>
				<RouterLink class="profil" to="/profile"><img src="./assets/navbar/profile.svg" alt="profile.svg" /> </RouterLink>
			</nav>
		</div>
	</div>
</template>

<style>
@import "@/assets/style/base.scss";

.hus:hover {
	background: url("./assets/navbar/homeHover.svg") no-repeat;
	background-position: 50%;
}

.sok:hover {
	background: url("./assets/navbar/searchHover.svg") no-repeat;
	background-position-x: 35%;
	background-position-y: 40%;
}

.bibl:hover {
	background: url("./assets/navbar/libraryHover.svg") no-repeat;
	background-position-x: 50%;
	background-position-y: 50%;
}

.profil:hover {
	background: url("./assets/navbar/profileHover.svg") no-repeat;
	background-position: 50%;
}

::-webkit-scrollbar {
	width: 0;
	background: transparent;
}

.footer {
	background-color: #1d1f2d;
}

.navbar img {
	filter: invert(1);
	height: 1.8em;
}

@media (min-width: 768px) {
	.navbar {
		margin: auto;
		width: 40%;
	}

	.view {
		margin: auto;
		width: 60%;
	}
}
</style>

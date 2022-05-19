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
				<RouterLink to="/"><img src="./assets/navbar/home.svg" alt="home.svg" /></RouterLink>
				<RouterLink to="/search"><img src="./assets/navbar/search.svg" alt="search.svg" /></RouterLink>
				<RouterLink to="/library"><img src="./assets/navbar/library.svg" alt="library.svg" /></RouterLink>
				<RouterLink to="/profile"><img src="./assets/navbar/profile.svg" alt="profile.svg" /></RouterLink>
			</nav>
		</div>
	</div>

</template>

<style>
@import "@/assets/style/base.scss";

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

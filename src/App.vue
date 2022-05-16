<script setup>
import { RouterLink, RouterView } from "vue-router"
import PodPlayer from "@/components/PodPlayer.vue"
</script>

<template>

	<!-- FLEXBOX TEST: -->

	<!-- <div class="flexbox">
		<div class="view">
			<RouterView />
		</div>

		<div class="footer text-center">
			<div class="player">
				<PodPlayer />
			</div>
			<nav class="navbar justify-content-between px-4 py-2">
				<RouterLink to="/"
					><img src="./assets/navbar/home.svg" alt="home.svg"
				/></RouterLink>
				<RouterLink to="/search"
					><img src="./assets/navbar/search.svg" alt="search.svg" />
				</RouterLink>
				<RouterLink to="/library"
					><img src="./assets/navbar/library.svg" alt="library.svg" />
				</RouterLink>
				<RouterLink to="/profile"
					><img src="./assets/navbar/profile.svg" alt="profile.svg" />
				</RouterLink>
			</nav>
		</div>
	</div> -->

	<div class="view">
		<RouterView />
	</div>

	<div class="footer text-center fixed-bottom">
		<div class="player">
			<PodPlayer />
		</div>
		<nav class="navbar justify-content-between px-4 py-2 ">
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

.footer {
	padding-top: 1rem;
	background-color: #1d1f2df2;
}

.flexbox {
	display: flex;
	flex-direction: column;
}

.flexbox footer {
	height: auto;
}

body {
	padding: 0;
}


.navbar img {
	filter: invert(1);
	height: 1.8em;
}

/* 
.view * {
	max-height: 70vh;
} 
*/

@media (min-width: 1024px) {}
</style>

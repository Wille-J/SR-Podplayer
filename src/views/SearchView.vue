<script setup>
import SearchList from '@/components/SearchList.vue'
</script>

<template>
	<div class="search">
		<h1>Gör en sökning:</h1>
		<input type="search" name="searchBox" class="searchBox" />
		<input type="button" value="Search" />
	</div>

	<div class="resultList">
		<SearchList />
	</div>
</template>

<script>
export default {
	// JavaScript
	// Komponenter kallar vi med stor bokstav (typ klasser)
	// ROUTER: Varje ny sak vi kan klicka på, gör vi som en egen komponent (vy - "view")
}
</script>

<style scoped>
@import "@/assets/base.css";

/* Mobile first CSS */

@media (min-width: 1024px) {
	/* Desktop */
}
</style>

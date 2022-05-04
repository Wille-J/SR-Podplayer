<script setup>
defineProps({
	list: {
		type: Array,
		required: true,
	},
})
</script>

<template>
	<div class="searchList">
		<h2>Results:</h2>
		<ul>
			<li v-for="item in Array"></li>
		</ul>
	</div>
</template>

<style scoped>
@import "@/assets/base.css";

/* Mobile first CSS */

@media (min-width: 1024px) {
	/* Desktop CSS */
}
</style>

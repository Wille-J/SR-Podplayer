<script setup>
</script>

<template>
	<div class="text-center">
		<img src="@/assets/logo.svg" alt="logo.svg" class="mySvg" />

		<!-- Poddler-text-logo 
		<img src="@/assets/Poddler.svg" alt="Poddler.svg" height="100" width="300" class="poddler" /> -->
	</div>

	<div class="container p-3">
		<div class="continueListen">
			<h2>Förslag från SR:</h2>
			<p>Hitta din nya favoritpodd!</p>
		</div>

		<div class="podTips">
			<h2>Bästa poddarna från SR:</h2>
			<p><em>{ Topp poddar från API ? }</em></p>
			<p>Det finns programkategorier i det stora podd-anropet</p>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.mySvg {
	mix-blend-mode: pass-through;
	margin-top: 20px;
}

.poddler {
	filter: invert(1);
}
</style>

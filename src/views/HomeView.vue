<script setup>
// Här kan vi importera saker om vi vill,
// har vi en "setup" så ligger den högst,
// men taggen är inte ett krav
</script>

<template>
	<div class="text-center">
		<img src="@/assets/logo.svg" alt="logo.svg" class="mySvg" />

		<img src="@/assets/Poddler.svg" alt="Poddler.svg" height="100" width="300" class="poddler" />
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
	// JavaScript
	// Komponenter kallar vi med stor bokstav (typ klasser)
	// ROUTER: Varje ny sak vi kan klicka på, gör vi som en egen komponent (vy - "view")
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

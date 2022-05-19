<script setup></script>

<template>
	<!-- locolStorage.library.{{ playlistName }}.{{ episode }} -->
	<!-- div v-for listItems in locolStorage.library -->

	<!-- podview - Lista med episodes - Knapp med SPARA I SPELLISTA => Lägg till i Spellista-view <=> PINIA STORE  -->
	<div class="library d-flex justify-content-center text center mt-4">
		<h1>Bibliotek</h1>
		<br />
		<div class="resultList">
			<div class="listItem">
				<img src="@/assets/library/klipp.svg" alt="" />
				Mina Klipp
				<img src="@/assets/library/arrow.svg" alt="" />
			</div>
			<div class="listItem">
				<img src="@/assets/library/vaxter.svg" alt="" />
				Växtpoddar
				<img src="@/assets/library/arrow.svg" alt="" />
			</div>
			<div class="listItem">
				<img src="@/assets/library/crime.svg" alt="" />
				Crime
				<img src="@/assets/library/arrow.svg" alt="" />
			</div>
			<div class="listItem">
				<img src="@/assets/library/humor.svg" alt="" />
				Humor
				<img src="@/assets/library/arrow.svg" alt="" />
			</div>
			<div class="listItem">
				<img src="@/assets/library/teknik.svg" alt="" />
				Teknik
				<img src="@/assets/library/arrow.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.library {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.listItem {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.7em;
	padding: 0.5em;
}

.listItem:hover {
	background-color: #1d1f2d;
	transition: 0.5s;
}

.resultList {
	display: flex;
	flex-direction: column;
	background-color: #252836;
	border-radius: 0.7em;
	padding: 0.3em;
	width: 90%;
	max-height: 74vh;
	overflow-y: scroll;
}
</style>

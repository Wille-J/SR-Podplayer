<script setup>
import "bootstrap"
</script>

<template>
	<div class="library d-flex text center m-4">
		<h1>Bibliotek</h1>
		<br />
		<div class="resultList">
			<div class="listItem">
				<div>
					<img src="@/assets/library/klipp.svg" alt="klipp.svg" />
					Mina Klipp
				</div>
				<img src="@/assets/library/arrow.svg" alt="arrow.svg" />
			</div>

			<div class="listItem">
				<div>
					<img src="@/assets/library/vaxter.svg" alt="vaxter.svg" />
					Växtpoddar
				</div>
				<img src="@/assets/library/arrow.svg" alt="arrow.svg" />
			</div>

			<div class="listItem">
				<div>
					<img src="@/assets/library/crime.svg" alt="crime.svg" />
					Crime
				</div>
				<img src="@/assets/library/arrow.svg" alt="arrow.svg" />
			</div>

			<div class="listItem">
				<div>
					<img src="@/assets/library/humor.svg" alt="humor.svg" />
					Humor
				</div>
				<img src="@/assets/library/arrow.svg" alt="arrow.svg" />
			</div>

			<div class="listItem">
				<div>
					<img src="@/assets/library/teknik.svg" alt="teknik.svg" />
					Teknik
				</div>
				<img src="@/assets/library/arrow.svg" alt="arrow.svg" />
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
	padding-right: 0.5em;
}

.library {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80vh;
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
	width: 100%;
	max-height: 74vh;
	overflow-y: scroll;
}
</style>

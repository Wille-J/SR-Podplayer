<script setup>
import "bootstrap"
</script>

<template>
	<div class="profile text-center p-4">
		<h1>Profil</h1>
		<br />
		<img src="../assets/profilepic.svg" alt="profilepic.svg" />
		<br />

		<br />
		<h2>Gudrun Skoglund</h2>
		<br />

		<div class="badges">
			<img src="../assets/badges/crime.svg" alt="crime.svg" />
			<img src="../assets/badges/noje.svg" alt="noje.svg" />
			<img src="../assets/badges/docs.svg" alt="docs.svg" />
			<img src="../assets/badges/news.svg" alt="news.svg" />
		</div>

		<div class="taskList">
			<img src="../assets/badges/task1.svg" alt="task1.svg" />
			<img src="../assets/badges/task2.svg" alt="task2.svg" />
			<img src="../assets/badges/task3.svg" alt="task3.svg" />
		</div>

		<div class="stats">
			<h3 class="text-left">Statistik</h3>
			<img src="../assets/badges/stats.svg" alt="stats.svg" />

		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
@media (min-width: 768px) {
	.badges {
		width: 115%;
		margin-left: -7%;
	}

	.taskList {
		margin-left: 10%;
		width: 80%;
	}
}

@media (min-width: 1024px) {
	.badges {
		margin-left: 14%;
		width: 73%;
	}

	.taskList {
		margin-left: 29%;
		width: 42%;
	}
}

.badges {
	display: flex;
	flex-direction: row;
	overflow-x: scroll;
	background-color: #252836;
	border-radius: 0.7em;
}

.badges * {
	padding-top: 2em;
}

.taskList {
	display: flex;
	flex-direction: column;
	padding-top: 1em;
	margin-bottom: 6em;
}

.taskList * {
	padding-top: 1em;
}

.stats {
	margin-bottom: 7em;
	margin-top: -4em;
}
</style>

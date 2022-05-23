<script setup>
import "bootstrap"
</script>

<template>
	<div class="about-header text-center p-4">
		<h1>Om projektet</h1>
		<a href="https://sverigesradio.se/oppetapi">Sveriges Radios Öppna API</a>
	</div>
	<div class="about-body p-2">
		<h4>UX-studenter:</h4>
		<ul>
			<li>Gabriel Göransson</li>
			<li>Lotta Snijder</li>
			<li>Michelle Pettersson</li>
			<li>Patrick Elmerup</li>
			<li>Adam Sköld</li>
			<li>Isabelle Zachén</li>
			<li>Ivan Gelin</li>
			<li>Martin Ejdenwik</li>
		</ul>
		<h4>JAVA-studenter:</h4>
		<ul>
			<li>Andreas Karlsson</li>
			<li>David Urman</li>
			<li>Wilhelm Junger</li>
			<li>Rayan Sabah Mahmod</li>
		</ul>
		<br />
		<p>© 2022 Yrgo, högre yrkesutbildning Göteborg</p>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
	color: white;
}

.about-body {
	background-color: #252836;
	border-radius: 0.7em;
	margin: auto;
	width: 90%
}

@media (min-width: 768px) {
	.about-body {
		margin: auto;
		width: 75%;
	}
}
</style>

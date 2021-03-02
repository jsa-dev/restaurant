<script>
	// components
	import Navbar from "./components/Navbar.svelte";
	import Modal from "./components/Modal.svelte";
	import Hero from "./components/Hero.svelte";
	import About from "./components/About.svelte";
	import Plates from "./components/Plates.svelte";
	import Footer from "./components/Footer.svelte";
	import Select from "./components/Select.svelte";
	// stores
	import user from "./stores/userStore";
</script>

<Navbar/>
<Hero></Hero>
<div class="page-main">
	<Modal/>
	<About/>
	<Plates/>
	{#if $user.jwt}
		<Select/>
	{/if}
</div>
<Footer/>

<script>
	import { onMount } from 'svelte';
	import Generator from '../lib/components/Generator.svelte';
	import Themes from '$lib/components/Themes.svelte';
	import TextInput from '$lib/components/TextInput.svelte';

	export let theme = 'Interview';
	export let text = "I'm ready for my interview";
	let themeActive = theme;
	let textColor = '';
	let justify = false;

	const themes = [
		{
			name: 'October',
			textColor: '#275670',
			bgColor: '#DCDADC',
			justify: false
		},
		{
			name: 'Duct tape',
			textColor: '#100E0E',
			bgColor: '#7DA97F',
			justify: false
		},
		{
			name: 'Tell Me',
			textColor: '#FFFFF',
			bgColor: '#151515',
			justify: false
		},
		{
			name: 'Interview',
			textColor: '#DDC9B0',
			bgColor: '#991B1B',
			justify: true
		}
	];

	onMount(() => {
		updateTheme(themeActive);
	});

	function updateTheme(themeName) {
		const activeTheme = themes.find((t) => t.name === themeName);
		if (activeTheme) {
			document.body.style.backgroundColor = activeTheme.bgColor;
			textColor = activeTheme.textColor;
			justify = activeTheme.justify;
		}
	}

	function changeTheme(event) {
		themeActive = event.detail.name;
		updateTheme(themeActive);
	}

	function handleInput(event) {
		text = event.detail.value;
	}
</script>

<Themes {themeActive} on:themeChange={changeTheme} />
<Generator {textColor} {justify} {text} />
<TextInput bind:text />

<div class=" text-white text-xs text-center font-eraser p-5">
	Not associated with Little Monsters LLC or Interscope Records
</div>

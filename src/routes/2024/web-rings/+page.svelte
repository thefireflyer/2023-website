<script lang="ts">
	import Article from '$lib/components/article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const webrings = [
		{
			name: 'Cuddler Webring',
			index: 'https://cuddler-webring.netlify.app/',
			next: '',
			prev: ''
		}
	];
</script>

<Article header={'Web-rings'} date={'2024/07/12'}>
	<ul />
</Article>

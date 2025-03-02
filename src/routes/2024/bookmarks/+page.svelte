<script lang="ts">
	///////////////////////////////////////////////////////////////////////////

	import Article from '$lib/components/article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	///////////////////////////////////////////////////////////////////////////

	const bookmarks = [
		{
			section: 'Software Development',
			contents: [
				// {
				// 	name: 'Best practices for inclusive textual websites',
				// 	url: 'https://seirdy.one/posts/2020/11/23/website-best-practices/'
				// },
				{
					name: 'Advanced Functional Programming',
					url: 'https://www.youtube.com/watch?v=V1FamhjNVcs&list=PLF1Z-APd9zK5uFc8FKr_di9bfsYv8-lbc&index=1'
				},
				{
					name: 'Regex Tooling',
					url: 'https://regex101.com/'
				},
				{
					name: 'Idiomatic Rust',
					url: 'https://github.com/mre/idiomatic-rust'
				},
				{
					name: 'The Oivio Documentation System',
					url: 'https://docs.divio.com/documentation-system/'
				},
				{
					name: 'Kind Engineering',
					url: 'https://kind.engineering/'
				}
			]
		},
		{
			section: 'Math',
			contents: [
				{
					name: 'Book of Proof',
					url: 'https://richardhammack.github.io/BookOfProof/Main.pdf'
				},
				{
					name: 'Intro to Homotopy Type Theory',
					url: 'https://www.youtube.com/watch?v=Pu16iodESTU&list=PL245PKGUDdcN9-El9D7DRefwX4c9feiYq&index=1'
				},
				{
					name: 'Category Theory',
					url: 'https://www.youtube.com/watch?v=I8LbkfSSR58&list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_&index=1'
				},
				{
					name: 'Openstax - Calculus Textbooks',
					url: 'https://openstax.org/details/books/calculus-volume-3'
				}
			]
		},
		{
			section: 'Writing',
			contents: [
				{
					name: "Butterick's Practical Typography",
					url: 'https://practicaltypography.com/'
				},
				{
					name: 'So, do you actually want to write?',
					url: 'https://artemis.sh/2024/06/19/do-you-really-want-to-write.html'
				}
			]
		},
		// {
		// 	section: 'Art',
		// 	contents: [
		// 		{
		// 			name: 'Xenia (Chimmie)',
		// 			url: 'https://xenia.chimmie.k.vu/'
		// 		},
		// 		{
		// 			name: 'Xenia',
		// 			url: 'http://xenia-linux-site.glitch.me/'
		// 		},
		// 		{
		// 			name: 'Volpeon',
		// 			url: 'https://volpeon.ink/'
		// 		}
		// 	]
		// },
		{
			section: 'Blogs',
			contents: [
				// {
				// 	name: 'Foone',
				// 	url: 'https://wiki.foone.org//w/Main_Page'
				// },
				{
					name: 'Verity',
					url: 'https://cofree.coffee/~verity/'
				},
				{
					name: 'Seirdy',
					url: 'https://seirdy.one/'
				},
				{
					name: 'Artemis',
					url: 'https://artemis.sh/'
				},
				{
					name: 'Natty',
					url: 'https://natty.sh/'
				},
				{
					name: 'LunarEclipse',
					url: 'https://lunareclipse.zone/'
				}
			]
		},
		// {
		// 	section: 'Academics',
		// 	contents: [
		// 		{
		// 			name: 'REAP Notes',
		// 			url: 'https://www.jstor.org/stable/40032892'
		// 		},
		// 		{
		// 			name: 'Citation Style Guide',
		// 			url: 'https://pitt.libguides.com/citationhelp'
		// 		}
		// 	]
		// },
		{
			section: 'Fonts',
			contents: [
				{
					name: 'B612 Font Family',
					url: 'https://b612-font.com/'
				},
				{
					name: 'Linux Libertine & Biolinum',
					url: 'https://github.com/libertine-fonts/libertine'
				},
				{
					name: 'Libre Baskerville',
					url: 'https://fonts.google.com/specimen/Libre+Baskerville'
				},
				// {
				// 	name: 'Iconoir',
				// 	url: 'https://iconoir.com/'
				// },
				// {
				// 	name: 'Bootstrap Icons',
				// 	url: 'https://icons.getbootstrap.com/'
				// }
			]
		},
		{
			section: 'Themes',
			contents: [
				{
					name: 'Catppuccin',
					url: 'https://github.com/catppuccin/catppuccin'
				},
				{
					name: 'Rosé Pine',
					url: 'https://rosepinetheme.com/'
				}
			]
		},
		{
			section: 'Misc',
			contents: [
				{
					name: 'ADHD Task Initiation',
					url: 'https://www.tiimoapp.com/blog/adhd-task-initiation'
				},
				{
					name: 'BBC Sound Effects',
					url: 'https://sound-effects.bbcrewind.co.uk/'
				}
			]
		}
	];

	///////////////////////////////////////////////////////////////////////////
</script>

<svelte:head>
	<title>bookmarks | thefireflyer</title>
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inclusive+Sans:ital@0;1&display=swap" rel="stylesheet">
</svelte:head>

<Article header="Bookmarks" date="2024/07/12">
	<ul>
		{#each bookmarks as bookmark}
			<li><h2>{bookmark.section}</h2></li>
			<ul>
				{#each bookmark.contents as link}
					<li>
						{#if link.url == ''}
							<div class="placeholder">{link.name}</div>
						{:else}
							<a href={link.url}>
								{link.name}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		{/each}
	</ul>
</Article>

<style lang="scss">
	$primary: rgb(250, 230, 243);
	$primary-o50: transparentize($primary, 0.5);
	$primary-o60: transparentize($primary, 0.6);
	$primary-o70: transparentize($primary, 0.7);
	$primary-o80: transparentize($primary, 0.8);
	$primary-o90: transparentize($primary, 0.9);

	.footnote {
		text-align: center;
		opacity: 70%;
		font-style: italic;

		a {
			text-decoration-color: $primary-o70;
			text-decoration-style: dotted;
		}
	}

	h1 {
		font-family: 'Cormorant Garamond', Times, Serif;
		font-size: 1.75em;
		// font-style: oblique;
		opacity: 70%;
		font-weight: bold;
	}

	h2 {
		// font-family: 'Cormorant Garamond', Times, Serif;
		font-weight: bold;
		// font-size: 20pt;
		padding-bottom: 0.5em;
	}

	header {
		text-align: center;
	}

	footer {
		text-align: center;
		background: #000;
		width: 100%;
	}

	a {
		text-decoration: underline 2px $primary-o80;
	}

	a:hover {
		text-decoration-color: $primary-o50;
		background-color: $primary-o90;
	}

	ul {
		ul {
			// padding-left: 2em;
			list-style-type: circle;
			padding-bottom: 1.5em;

			li {
				// font-size: 18pt;
				font-weight: normal;
				padding-bottom: 0em;
				opacity: 80%;
			}
		}
	}

	p {
		padding-top: 0.3em;
		padding-bottom: 0.3em;
	}

	.logo {
		width: 30ch;
		height: 30ch;
	}
</style>

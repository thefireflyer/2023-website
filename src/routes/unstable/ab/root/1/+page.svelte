<script>
	let links = [
		{
			name: 'App',
			icon: '/icon.png',
			slug: '/app'
		},
		{
			name: 'HomePortal',
			icon: '/homeportal.png',
			slug: '/homeportal'
		}
	];

	let posts = [
		// {
		// 	name: 'Lorem ipsum dolor sit amet',
		// 	image: '',
		// 	slug: '/posts/test',
		// 	desc: `
		// 	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Risus viverra adipiscing at in tellus. Tellus elementum sagittis vitae et leo. Sagittis id consectetur purus ut faucibus pulvinar. Pulvinar neque laoreet suspendisse interdum consectetur libero. In massa tempor nec feugiat nisl pretium. Tortor id aliquet lectus proin nibh. Vel eros donec ac odio tempor orci dapibus. Eget est lorem ipsum dolor sit amet. Aliquam vestibulum morbi blandit cursus risus at. Cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Lacus laoreet non curabitur gravida arcu. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Tellus in hac habitasse platea. Arcu dui vivamus arcu felis bibendum ut tristique et.
		// 	`
		// },
		{
			name: 'Articles',
			image: '',
			slug: '/posts/test',
			desc: `
			`
		},
		{
			name: 'Resources',
			image: '',
			slug: '/posts/test',
			desc: `
			`
		},
		// {
		// 	name: 'Published Papers',
		// 	image: '',
		// 	slug: '/posts/test',
		// 	desc: `
		// 	`
		// },
		// {
		// 	name: 'PhD Thesis',
		// 	image: '',
		// 	slug: '/posts/test',
		// 	desc: `
		// 	`
		// },
		// {
		// 	name: 'Master\'s Project',
		// 	image: '',
		// 	slug: '/posts/test',
		// 	desc: `
		// 	`
		// },
		{
			name: 'Senior Project',
			image: '',
			slug: '/posts/test',
			desc: `
			`
		},
		// {
		// 	name: 'Spell Cards for D&D',
		// 	image: '',
		// 	slug: '/posts/cards',
		// 	desc: `
		// 	`
		// },
		{
			name: 'Archives',
			image: '',
			slug: '/archives',
			desc: `
			`
		}
	];
</script>

<svelte:head>
	<title>thefireflyer</title>
</svelte:head>

<div
	class="dark:bg-ctp-crust
grow flex flex-col md:flex-row
overflow-y-scroll md:overflow-y-hidden overflow-x-hidden"
>
	<div
		class="
grow flex flex-col md:flex-row
overflow-y-scroll md:overflow-y-hidden overflow-x-hidden"
	>
		<div
			class="
grow
flex flex-col
overflow-y-visible
md:overflow-x-hidden"
		>
			<div
				class="
	grow p-5
	md:pb-0
	flex flex-col
	overflow-y-visible
	md:overflow-x-hidden"
			>
				<div
					class="
		p-3 bg-neutral-200
		content-containers
		rounded-lg
		"
				>
					<div
						class="
			md:w-fit
			grid md:flex
			gap-5 grid-cols-3
			flex-row flex-wrap"
					>
						{#each links as link}
							<a href={link.slug} class="flex justify-center shrink">
								<div class="overflow-hidden rounded-lg relative">
									<div class="p-1">
										<img src={link.icon} alt={link.name} class="relative icon" />
									</div>
									<div class="app-connection" />
								</div>
							</a>
						{/each}
					</div>
				</div>

				<div class="p-3" />

				<div
					class="grow flex flex-col md:overflow-y-scroll gap-y-5
		bg-neutral-200
		content-containers
		rounded-lg p-1 md:p-3
		md:rounded-b-none"
				>
					{#each posts as post}
						<a href={post.slug} class="flex">
							<div
								class="
					grow
					rounded-md
					overflow-hidden"
							>
								<div
									class="
					post-link
					p-1 px-3"
								>
									<p class="text-xl">{post.name}</p>
									<p class="overflow-hidden text-ellipsis whitespace-nowrap">{post.desc}</p>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div
			class="
	p-5
	md:pl-2
	pt-2
	md:pt-5
	md:pb-0
	flex"
		>
			<div
				class="
		grow
		flex
		rounded-xl
		md:rounded-b-none
		page-container
		overflow-hidden"
			>
				<div
					class="
			grow
			about
			p-5 rounded-lg
			bg-neutral-200 dark:bg-neutral-800

			md:backdrop-blur-2xl
			md:bg-transparent
			

			flex flex-col items-center
			"
				>
					<img src="/logo2.png" alt="logo" class="lg-icon" />
					<p class="text-2xl">thefireflyer</p>
					<div class="p-1" />

					<div class="flex gap-2 md:flex-col items-center">
						<span
							class="
						pronouns
						hidden md:inline-flex
						rounded-full
						p-1 px-2"
						>
							<!-- <div class="flag">
								<img src="/transfem.png" class="mini-icon" alt="trans fem" />
							</div> -->

							<div
								class="
							px-2
							text-center text-lg
							grow
							text-neutral-700 dark:text-neutral-300"
							>
								they / she
							</div>

							<!-- <div class="flag">
								<img src="/enby girl alt.png" class="mini-icon" alt="enby girl" />
							</div> -->
						</span>

						<p class="hidden md:block text-lg">Other accounts</p>
						<a href="https://github.com/thefireflyer">
							<p class="flow-link underline">Github</p>
						</a>
						<a href="https://codepen.io/theflyingfire">
							<p class="flow-link underline">CodePen</p>
						</a>
						<a href="https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ">
							<p class="flow-link underline">YouTube</p>
						</a>

						<p class="hidden md:block text-lg">Contact/info</p>
						<a href="/">
							<p class="flow-link underline">Email</p>
						</a>
						<a href="/">
							<p class="flow-link underline">Resume</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	a {
		color: var(--md-sys-color-primary);
	}

	// .mini-icon {
	// 	width: 25px;
	// 	// min-width: 25px;
	//     height: 25px;
	// 	/* pointer-events: none; */
	// 	margin-top: 2px;
	// }

	.lg-icon {
		max-width: 192px;
	}

	.app-connection {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		// background: linear-gradient(90deg, rgba(96, 96, 96, 0.5), rgba(96, 96, 96, 0.5)) no-repeat right
		// 	bottom / 0 100%;
		background: linear-gradient(90deg, rgba(203, 166, 247, 0.1), rgba(203, 166, 247, 0.1)) no-repeat
			right bottom / 0 100%;
		transition: background-size 200ms ease-in-out;
		transform: rotateZ(45deg);
		z-index: 1;
	}

	.app-connection:where(:hover, :focus-visible) {
		background-size: 100% 100%;
		background-position: left;
	}

	.icon {
		width: 64px;
		z-index: 2;
		pointer-events: none;
	}

	.post-link:hover {
		// background-color: rgba(96, 96, 96, 0.5);
		background-color: rgba(203, 166, 247, 0.1);
	}

	.flow-link {
		// background: linear-gradient(90deg, rgb(96, 96, 96), rgb(96, 96, 96)) no-repeat right bottom / 0
		// 	var(--bg-h);

		background: linear-gradient(90deg, rgba(203, 166, 247, 0.4), rgba(203, 166, 247, 0.4)) no-repeat
			right bottom / 0 var(--bg-h);
		--bg-h: 100%;
		transition: background-size 100ms ease-in-out;
	}

	.flow-link:where(:hover, :focus-visible) {
		background-size: 100% var(--bg-h);
		background-position: left bottom;
	}

	.underline {
		text-decoration: none;
		padding-bottom: 2px;
		--bg-h: 2px;
	}

	// .pronouns img {
	// 	mask-image: linear-gradient(to right,
	// 	transparent, transparent 50%,
	// 	black 50%, black);
	// 	mask-size: 200% 200%;
	// 	mask-position: left;
	// 	transition: all 200ms;
	// }

	// .pronouns:hover img {
	// 	mask-position: 100%;
	// }

	// .pronouns {

	// 	* {
	// 		pointer-events: none;
	// 		user-select: none;
	// 	}

	// 	.flag {
	// 		width: 0px;
	// 		height: 30px;
	// 		overflow: hidden;
	// 		transition: all 200ms;
	// 	}
	// }

	// .pronouns:hover .flag {
	// 	width: 25px;
	// }

	@media screen and (min-width: 768px) {
		.page-container {
			background-image: url('/img7.avif');
			background-size: cover;
		}

		.about {
			/* box-shadow: inset 0em 0em 1em black; */
			background-color: rgba(0, 0, 0, 0.6);
		}

		@media (prefers-color-scheme: light) {
			.about {
				background-color: rgba(255, 255, 255, 0.6);
			}
		}
	}

	@media screen and (max-width: 768px) {
		@media (prefers-color-scheme: dark) {
			.about {
				background-color: hsl(269, 30%, 14%);
			}
		}
	}

	@media (prefers-color-scheme: dark) {
		.content-containers {
			background-color: hsl(269, 30%, 14%);
		}
	}
</style>

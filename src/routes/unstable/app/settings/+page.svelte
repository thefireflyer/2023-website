<script>
	import { onMount } from 'svelte';
	import { GetAll, KeyValuePair } from '$lib/old/storagesys.js';

	/**
	 * @type {string}
	 */
	let username = '';

	onMount(() => {
		KeyValuePair('userdata', 'username').then((res) => {
			if (res) username = res.data;
		});
	});


</script>

<div class="grow p-5 overflow-y-scroll flex flex-col gap-5">
	<h1 class="text-2xl">Settings</h1>

	<form
		class="
    flex flex-col
    gap-5
    rounded-lg
    "
    on:submit={() => {
        console.log(username)
        KeyValuePair('userdata', 'username', username).then((res) => {
			if (res) username = res.data;
		});
    }}
	>
		<input
			type="text"
			id="username"
			placeholder="username"
			required
			autocomplete="username"
			bind:value={username}
			class="
        p-2 px-4 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        "
		/>

		<!-- <input type="text" id="email" placeholder="email" required autocomplete="email"
        class="
        p-2 px-4 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        ">

        <input type="password" id="password" placeholder="password" required autocomplete="current-password"
        class="
        p-2 px-4 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        "> -->

		<input
			type="submit"
			value="Save changes"
			class="
        p-2 px-4
        bg-rose-400 dark:bg-rose-900
        rounded-full"
		/>
	</form>

	<!-- <a href='/logout'>
        <div class="
        p-2
        justify-center items-stretch
        bg-rose-400 dark:bg-rose-900
        rounded-full
        flex">
            <span class="material-icons-outlined text-center text-md">
            logout
            </span>
            <p class="text-md text-center">
                Logout
            </p>
        </div>
    </a> -->

		<button
        on:click={() => {
            GetAll("userdata").then(data => {
                data.forEach((/** @type {{info:string,data:any}} */ item) => {
                    KeyValuePair("userdata", item.info, null)
                });
                username = ''
            })
        }}
			class="
        p-2
        justify-center items-stretch
        bg-red-400 dark:bg-red-900
        rounded-full
        flex"
		>
			<span class="material-icons-outlined text-center text-md"> delete </span>
			<p class="text-md text-center">Delete account</p>
		</button>
</div>

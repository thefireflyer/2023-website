<script lang="ts">
	import { supabase, user } from "$lib/supabase";

    user.subscribe((status) => {
		console.log(status);
	});

    let email = ""
    let password = ""

</script>

<div
    class="
    p-3 gap-3
    grow flex flex-col bg-neutral-100 dark:bg-neutral-900 overflow-hidden
    "
>
    {#if $user == "loading"}
        <div>loading</div>
    {:else if $user != null}
        <h1 class="text-3xl">Cloud Account</h1>
        <h1>{$user.email}</h1>

        <a
            href="/"
            class="
        flex justify-center items-center
        p-1 px-3 gap-3
        border border-neutral-700
        hover:bg-neutral-200 hover:dark:bg-neutral-800
        rounded-lg"
        >
            <span class="material-icons-round text-lg"> home </span>
            <span class="text-lg"> Return to apps </span>
        </a>
        
        <button
            on:click={() => {
                supabase.auth.signOut()
                email = ""
                password = ""
                user.set(null)
            }}
            class="
        flex justify-center items-center
        p-1 px-3 gap-3
        border border-neutral-700
        hover:bg-neutral-200 hover:dark:bg-neutral-800
        rounded-lg"
        >
            <span class="material-icons-round text-lg"> logout </span>
            <span class="text-lg"> Log out </span>
        </button>

    {:else}
        <div class="grow flex flex-col gap-5">
            <h1 class="text-xl">Log in</h1>
            <form
                on:submit={async () => {
                    user.set("loading")
                    supabase.auth.signInWithPassword({
                        email,
                        password
                    }).then(response => user.set(response.data.user))
                }}
                class="
    flex flex-col
    gap-3
    rounded-lg
    "
            >
                <input
                    type="text"
                    placeholder="email"
                    required
                    bind:value={email}
                    autocomplete="email"
                    class="
        p-2 px-4 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        "
                />

                <input
                    type="password"
                    placeholder="password"
                    required
                    bind:value={password}
                    autocomplete="current-password"
                    class="
        p-2 px-4 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        "
                />

                <input
                    type="submit"
                    value="Continue"
                    class="
        p-2 px-4
        bg-rose-400 dark:bg-rose-900
        rounded-full"
                />
            </form>
        </div>
    {/if}
</div>
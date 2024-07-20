<script lang="ts">
	import { writable } from 'svelte/store';
    import type { PageData } from './$types';
	import { onMount } from 'svelte';
    
    export let data: PageData;

    let content = writable(["<p>loading</p>"])

    onMount(() => 
        content.set([window.localStorage.getItem(data.params.path) ?? "<p>test</p>"])
    )

</script>

<div class="flex flex-col grow justify-center items-center p-6">
    <div class="w-3/4 flex flex-col grow">
        <ol class="flex flex-col grow gap-1" style="font-size: 1em;">
            {#each $content as block}
                <li class="rounded-md hover:bg-ctp-mantle flex p-1 px-2 items-center" 
                style="height: 2.5em;" on:input={event => {
                    // console.log(event)
                    let text = event.target.innerText
                    // let text = "test"
                    console.log(text)
                    if (text.endsWith("\n")) {
                        console.log("create new block")
                    }
                    if (text.startsWith("#")) {
                        text = "<i class='text-xl'"+text+"</i>"
                    }

                    block = text
                }}>
                <p class="grow" contenteditable="true" bind:innerHTML={block} ></p>
                </li>
            {/each}
        </ol>
        <!-- <button class="rounded hover:bg-ctp-base flex p-1 px-2">
            <span class="text-xl material-symbols-outlined">add</span>
        </button> -->
    </div>
</div>
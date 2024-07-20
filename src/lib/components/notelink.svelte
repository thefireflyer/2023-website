<script>
	import { backInOut, quadInOut, sineInOut } from "svelte/easing";
	import { fade, slide } from "svelte/transition";


     /**
	 * @type {any}
	 */
      export let note

      export let expanded = false

      export let animated = true

      function handleClick() {
        expanded = !expanded
      }

</script>

<div
    class="flex items-stretch justify-start flex-row">
    <button on:click={handleClick}><span class="
    material-icons
    ">
    {#if note.children.length > 0}
        {#if expanded}
        unfold_less
        {:else}
        unfold_more
        {/if}    
    {:else}
    last_page
    {/if}
    
    </span></button>
    <span class="w-full">
    <a href="/app/mip/{note.slug}" class="w-full">
        {note.name}
    </a>
    </span>

</div>
<div class="pl-3">
{#if expanded}
    <div
    transition:slide={{
        duration: animated ? 200 : 0,
        easing:sineInOut
    }}>
        {#each note.children as children}
        <svelte:self note={children} animated={animated}>
        </svelte:self>
        {/each}
    </div>
{/if}
</div>
<style>
    

</style>
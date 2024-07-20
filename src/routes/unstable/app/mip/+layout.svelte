<script>
    import { navigating } from '$app/stores';

    import Dragable from '$lib/components/dragable.svelte';
	import Notelink from '$lib/components/notelink.svelte';
	
    import { draw } from 'svelte/transition';
    import { fade, fly } from 'svelte/transition';
    import { quintInOut, elasticInOut } from 'svelte/easing';
	import Transition from '$lib/components/transition.svelte';

    let pageUrl = ""
    let animated = true

    navigating.subscribe((nav) => {
        if (nav) {
            console.log(nav)
            console.log(nav.to?.url.pathname)
            if (nav.to)
            {
                pageUrl = nav.to.url.pathname.split('/')[3]
                if (nav.from?.url.pathname.split('/')[2] != nav.to.url.pathname.split('/')[2])
                {
                    animated = false
                }
                else {
                    animated = true
                }
            }
        }
    })

    /** @type {import('./$types').LayoutData} */
    export let data;


    let drawerWidth = 200;
	let moving = false;

	function onMouseDown() {
		moving = true;
	}

	/**
	 * @param {{ movementX: number; }} e
	 */
	function onMouseMove(e) {
		if (moving) {
			drawerWidth += e.movementX;
            drawerWidth = Math.min(drawerWidth, window.innerWidth-100);
		}
	}
	
	function onMouseUp() {
		moving = false;
	}

</script>

<div class="flex grow
overflow-y-scroll overflow-x-hidden md:overflow-hidden
flex-col md:flex-row p-3 pt-0 md:p-3">
    <div class="flex">
    {#if drawerWidth > 100}
        <div class="files p-4 overflow-y-scroll" style="width: {drawerWidth}px;">
            {#each data.files as note}
            <Notelink note={note} expanded={true}>
            </Notelink>
            {/each}
        </div>
    {/if}
    
    <div class="p-2 flex" on:mousedown={onMouseDown}>
        <div
        class="bg-gray-300 dark:bg-gray-700 w-1 rounded-full dragable"></div>
    </div>
    </div>
    <div class="
    grow relative overflow-hidden
    
    bg-neutral-200 dark:bg-neutral-800 
    rounded-lg">
        <Transition url={pageUrl} classes="
        p-4
        absolute top-0 left-0 w-full h-full
        overflow-y-scroll" animated={animated}>
            <slot />
        </Transition>
    </div>

</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    .files {
        min-height: fit-content;
    }
    .dragable {
		user-select: none;
		cursor:w-resize;
	}

    

    @media screen and (max-width: 768px) {
        .files {
            min-width: 100%;
        }
    }
</style>
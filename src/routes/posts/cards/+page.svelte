<script lang="ts">
	import Gallerycard from "$lib/gallerycard.svelte";


    const images = Array.from(Array(14).keys())

</script>

<svelte:head>
    <title>D&D spell cards project</title>
</svelte:head>

<!-- <div class="p-6 md:px-1 w-full flex justify-center">
    <img src="https://pbs.twimg.com/media/FW-G6tuWYAIVYz5?format=jpg&name=medium"
    class=" 
    rounded-xl 
    w-full
    md:h-2/6 md:w-auto" alt="thumbnail">
</div> -->
<br/>
<p class="text-xl">
D&D spell cards project
</p>
<p class="text-lg text-neutral-500 dark:text-neutral-400">
27 March 2022
</p><br/>

<div class="py-2">
    <div class="w-full h-px bg-black dark:bg-neutral-600"></div>
</div>

<br/>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Risus viverra adipiscing at in tellus. Tellus elementum sagittis vitae et leo. Sagittis id consectetur purus ut faucibus pulvinar. Pulvinar neque laoreet suspendisse interdum consectetur libero. In massa tempor nec feugiat nisl pretium. Tortor id aliquet lectus proin nibh. Vel eros donec ac odio tempor orci dapibus. Eget est lorem ipsum dolor sit amet. Aliquam vestibulum morbi blandit cursus risus at. Cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Lacus laoreet non curabitur gravida arcu. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Tellus in hac habitasse platea. Arcu dui vivamus arcu felis bibendum ut tristique et.
</p><br/>

<div class="flex flex-wrap
justify-center items-center
gap-5 gallery">
    {#each images as image}
    <Gallerycard image={image}></Gallerycard>
    {/each}
</div>

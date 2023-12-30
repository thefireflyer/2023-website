<script>

    let images = [...Array(86).keys()]

</script>

<svelte:head>
    <title>test post - thefireflyer</title>
</svelte:head>


<br/>
<p class="text-xl">
Archives
</p>
<p class="text-lg text-neutral-500 dark:text-neutral-400">
2020-2023
</p><br/>

<div class="py-2">
    <div class="w-full h-px bg-black dark:bg-neutral-600"></div>
</div>

<div class="p-6 md:px-1 w-full flex justify-center">
    <img src="/img6.avif"
    class=" 
    rounded-xl 
    w-full
    md:h-2/6 md:w-auto" alt="6">
</div>

<div class="
justify-center
md:w-fit
grid md:flex
gap-10 grid-cols-1
flex-row flex-wrap">
    {#each images as image}
    <div class="flex p-6 md:p-0 w-full md:w-64 lg:w-80 h-max">
        <img src="/processed_photos/{image}.jpg"
        class=" 
        rounded-xl w-full h-full">
    </div>
    {/each}
</div>

<br/>

<script>    
</script>

<div class="overflow-hidden
grow flex flex-col relative">
    <a href="/" class="
    absolute top-3 right-3
    md:right-6
    rounded-full
    px-1
    flex justify-center
    bg-neutral-200 dark:bg-neutral-800">
        <span class="text-2xl material-icons text-center">
            clear
        </span>
    </a>
    <!-- <header class="
    p-2
    px-4
    flex flex-row
    items-center
    w-full
    bg-neutral-200 dark:bg-neutral-800">
        <span class="text-2xl material-icons text-center">
            menu
        </span>
        <div class="grow"></div>
        <p class="pl-2 text-xl text-center">text</p>
        <div class="grow"></div>
        <a href="/">
            <span class="text-2xl material-icons text-center">
                clear
            </span>
        </a>
    </header> -->
    <div class="
        grow flex flex-col
        md:px-20 lg:px-32 xl:px-64
        overflow-y-scroll">
        <div class="
        grow
        p-3 px-5
        bg-neutral-100 dark:bg-neutral-900">
            <slot />
        </div>
    </div>
</div>

<style>
    /* header {
        min-height: 64px;
        height: 64px;
    } */
</style>
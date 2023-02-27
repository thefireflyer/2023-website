<script>
</script>

<header class="
bg-white dark:bg-neutral-800
p-2 columns-2 items-center md:columns-1 md:flex md:flex-col">
    
    <div class="hidden md:flex grow flex-col columns-1">
        <a href='/app/'><div class="w-full h-max grid items-center justify-center grid-rows-2">
            <span class="material-icons-round w-full text-center">
                dashboard
            </span>
            </div>
        </a>

        <div class="grow"></div>

        <a href='/app/settings'><div class="w-full grid items-center justify-center grid-rows-1">
            <span class="material-icons-outlined w-full text-center">
                settings
            </span>
            </div>
        </a>
    </div>

</header>
<div class="bg-neutral-100 dark:bg-neutral-900 flex grow overflow-hidden">
    <slot />
</div>

<style>
	@import '../../lib/material-theme/css/theme.css';

    header {
        min-height: 64px;
    }
    
    @media screen and (min-width: 768px) {
        header {
            height: 100%;
            min-width: 40px;
            transition: width 0.2s ease-in-out;
        }
    }
</style>

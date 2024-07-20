<script>
    import { styles } from '$lib/styling/styles.js'
    
    export let elevation = 1;

    let cardColor = (elevation===0)?
        `var(--md-sys-color-background)`
        :(elevation===1)?
        `var(--md-sys-color-surface)`
        :`var(--md-sys-color-on-secondary)`

</script>

<div class="card" use:styles={{ cardColor:cardColor }}>
    <slot></slot>
</div>

<style>
    
	.card {
        background: var(--cardColor);
		color: var(--md-sys-color-secondary);
        padding: 1rem;
        overflow: hidden;
		border-radius: 12px;
        box-shadow: 0rem 2px 5px rgba(0, 0, 0, 0.2);
	}

</style>
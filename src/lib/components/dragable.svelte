<script>
	export let left = 100;
	export let top = 100;
	
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}
	
	/**
	 * @param {{ movementX: number; movementY: number; }} e
	 */
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
	
// 	$: console.log(moving);
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		border: solid 1px gray;
		position: absolute;
	}
</style>

<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
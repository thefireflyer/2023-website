<script>
    /**
	 * @type {number}
	 */
     export let image
    
    let rotatex = 0
    let rotatey = 0
    let rotatez = 0
    let height = 0

</script>

<div style="transform: perspective(20cm)
     rotate3d({rotatex}, {rotatey}, {rotatez}, 10deg)
     translateZ({height}cm)"
    class="w-80 rounded-lg relative shadow-2xl game-holder">
    <img src="/{image}.png" class="
    w-80 rounded-lg" alt="#{image}">
    <div class="absolute 
    h-full w-full 
    top-0 left-0
    grid grid-cols-3 grid-flow-row
    ">
        <div class="" on:mouseenter={() => {
            rotatex = -1
            rotatey = 1
            height = 1
        }}  on:mouseleave={() => {
            rotatex = 0
            rotatey = 0
            height = 0
        }}/>
        <div class="" on:mouseenter={() => {
            rotatex = -1
            rotatey = 0
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>
        <div class="" on:mouseenter={() => {
            rotatex = -1
            rotatey = -1
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>

        <div class="" on:mouseenter={() => {
            rotatex = 0
            rotatey = 1
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>
        <div class="" on:mouseenter={() => {
            rotatex = 0
            rotatey = 0
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>
        <div class="" on:mouseenter={() => {
            rotatex = 0
            rotatey = -1
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>

        <div class="" on:mouseenter={() => {
            rotatex = 1
            rotatey = 1
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>
        <div class="" on:mouseenter={() => {
            rotatex = 1
            rotatey = 0
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>
        <div class="" on:mouseenter={() => {
            rotatex = 1
            rotatey = -1
            height = 1
        }} on:mouseleave={() => {
        rotatex = 0
        rotatey = 0
            height = 0
        }}/>
        
    </div>
</div>

<style lang="scss">

    .game-holder {
        
        position: relative;
        transform: none;
        transition: transform 200ms;
    }
    .game-holder :hover {
            translate: 0px 0px 200px;
    }

</style>
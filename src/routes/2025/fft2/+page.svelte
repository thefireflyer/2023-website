<script lang="ts">
    import LoremIpsum from '$lib/components/lorem-ipsum.svelte';
  import { fly } from 'svelte/transition';
    import type { PageData } from './$types';
  import { quintInOut } from 'svelte/easing';

    let { data }: { data: PageData } = $props();

    let menu_open = $state(false);
    let search_open = $state(false);
</script>


<svelte:head>
	<title>The Darién Gap | Food for Thought 2 | GLBL 201</title>
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inclusive+Sans:ital@0;1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>

<div class="root dark:bg-ctp-crust">
    <header>
        <button onclick={() => (menu_open = !menu_open)}><span class="material-icons">menu</span></button>
        <span>Food for Thought 2</span>
        <button onclick={() => (search_open = !search_open)}><span class="material-icons">search</span></button>
    </header>
    <div class="content">
        <div class="cover" id="(Top)">
            <h1>The Darién Gap</h1>
            <h2>By <a href="/">Aidan Beil</a></h2>
        </div>

        <!--BEGIN INSERT BODY--><div class="block">
    <p>
        More than half a million people risked their lives crossing the Darién Gap in 2023 (Taylor 2024, p 1; Zamorano). They confronted flash-floods, capsize events, aggressive rivers, untreated bacterial and fungal infections, disease, sexual assault, malnutrition, and more (Yates, p 9; Taylor 2024, p 1; Talyor 2022, p 1).
    </p>
    <p>
        And now, many are heading back (Delacroix and Zamorano).
    </p>
    <p>
        This article seeks to explore:
    </p>
    <ul>
        <li>
            <p>
                Why the Darién Gap is so dangerous?
            </p>
        </li>
        <li>
            <p>
                Why the Darién Gap is still around?
            </p>
        </li>
        <li>
            <p>
                Who crossed the Darién Gap, and why?
            </p>
        </li>
        <li>
            <p>
                Who is heading back now, and why?
            </p>
        </li>
        <li>
            <p>
                And the historical and political context of the land.
            </p>
        </li>
    </ul>
    <p>
        To partially answer in short: the Darién Gap is an environmentally important rainforest with very little solid soil, that irregular migrants have to cross through because the governments of Panama and Colombia do not allow irregular migrants to use ferry or air transit.
    </p>
    <!-- Contrary to my assumptions going into this project, this problem is more about politics than it is about infrastructure. -->

</div>
<div id="Introduction &amp; Orientation" class="block-div">
    <div class="block">
        <h1>
            Introduction &amp; Orientation
        </h1>
    </div>
</div>
<div class="block">
    <p>
        The Darién Gap effectively forms a border between Panama and Colombia.
    </p>
    <p>
        The Serrania de San Blas and Serrania del Darién mountain range forms a north-eastern edge, and the Serrania de Maje range forms a broken western edge (Burton, p 45).
    </p>
    <p>
        The region is also extremely wet, and riddled with rivers (Miller, p 201).
        The westward Tuira and northward Chucunaque rivers convene near El Real in the West before emptying out into the Gulf of San Miguel (Burton, p 45-46). And the Atrato river roughly forms the lengthy south-eastern border with the accompanying wetlands extending, both inwards into the Darién Gap, and outwards into the rest of Colombia.
    </p>
    <!-- 
, consisting mostly of dense tropical rainforest (Burton, p 1-3). The Serrania de San Blas and Serrania del Darién mountain range forms a north-eastern border, and the Serrania de Maje range forms a broken western border (Burton, p 3). The inner area is largely densely forested lowland, with the Atrato swamp forming a southern border. -->

    <p>
        <img src="/the-darien-gap.png">
    </p>
    <p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Map_of_Dari%C3%A9n_Gap-en.svg/1920px-Map_of_Dari%C3%A9n_Gap-en.svg.png">
    </p>
    <p>
        The region also notably constitutes a 150 km break in the Pan-American highway; the only break remaining today.
    </p>
    <p>
        <img src="/gap.png">
    </p>
    <!-- ![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/PanAmericanHwy.png/1280px-PanAmericanHwy.png) -->

    <p>
        There is also very little solid soil, especially so in the Atrato wetlands. Miller said: &quot;in early tests, engineers dropped concrete-filled barrels into the basin&#39;s muddy sediment that sank fifteen stories under their own weight without finding bottom.&quot; (p 201-202) Drillers could not find bedrock 320 feet below sea level in one region (p 202).
    </p>
    <p>
        Tropical rain forest covers most of the lowlands, but also reaches up into the mountains where rainfall is often higher (Burton, p 46). The mountains are also home to endemic species like Goldman&#39;s Humming-bird, Pirre-Humming-bird, Goldman&#39;s Quail Dove, Pirre Warbler, Green-naped Tanager and Pirre Chlorospingus (Burton, p 47).
    </p>
    <p>
        The Speckle-breasted Antshrike, Nelson&#39;s Flycatcher, and the Olivaceous Bentbill are all endemic to the broader Darién and western Colombian region (Burton, p 47).
    </p>
    <p>
        The Atrato wetlands are also home to a wide variety of birds, as well as Howler monkeys, alligators, and jaguars (Burton, p 47-48).
    </p>
    <p>
        The Embera-Wounaan and Guna peoples live in the region, and the La Palma settlement is the capital of the relevant Darién province (&quot;Darién Gap&quot;). But otherwise, there is relatively little development (&quot;Darién Gap&quot;).
    </p>
</div>
<div id="Historical Context: The Pan-American Highway" class="block-div">
    <div class="block">
        <h1>
            Historical Context: The Pan-American Highway
        </h1>
    </div>
</div>
<div class="block">
    <!-- In short, US automotive interests largely invented the Darién Gap, as a construct, in the 1920s and 1930s, trying to sell cars in Latin America (p ..., p 199). After which, Latin American automotive interests claimed the movement (p 199). Environmental and cultural concerns, as well as the sheer complexity of the land, could no longer be ignored in the 1970s, after which movement towards closing the gap slowed to a halt (...). -->

    <p>
        US car companies popularized the idea of a Pan-American highway in the 1920s and 1930s, largely in a play to sell cars to Latin America (Miller, p 198-199). And it worked. Governments paved thousands of miles of roads in Latin America (p 199).
    </p>
    <!-- In 1941, with the introduction of substantial US government funding (p 199-200).  -->

    <p>
        The US began seriously funding the Pan-American highway after 1941, in an effort to secure the Panama Canal during the war (Miller, p 200). The project had strong support from the Nixon campaign but progress grew increasingly slow (p 200), in large part due to soil and rain conditions (p 200-203).
    </p>
    <p>
        Unfortunately, I don&#39;t have much more time to go over the history but Miller&#39;s work is fairly comprehensive. Though, his language is dated in places, and I was disappointed to see little mention of the class or cultural contexts of tourism, or more generally a substantial analysis of the equity of the project. I would recommend searching for additional sources.
    </p>
</div>
<div id="Contemporary Issues: Migration and Politics" class="block-div">
    <div class="block">
        <h1>
            Contemporary Issues: Migration and Politics
        </h1>
    </div>
</div>
<div class="block">
    <!-- Yates describes, in depth, the difficulties of accurately counting dead or missing persons in the Darién Gap.   -->

    <p>
        As previously mentioned, more than half a million people, around 520,000 people, crossed the Darién Gap in 2023 (Taylor 2024).
    </p>
    <p>
        Yates argues that past counts of dead or missing people in the Darién Gap underestimate the true total, and that the process of counting is inherently political (p 1-8). In particular, Yates describes the IOM&#39;s methodology, and how it privileges state actors&#39; knowledge (p 8).
    </p>
    <p>
        In response, Yates included testimonials from family members and friends of missing migrants, as well as from other migrants (p 7). With this broader definition, Yates found that 253 people had died or had gone missing trying to cross the Darién Gap from 2014 to 2021 (p 7). She found that drowning was the most common cause of death, and untreated illness the second (p 9). Others included homicide and suicide (p 9).
    </p>
    <p>
        Yates also highlighted the lack of medical support in the Darién Gap and its contribution to the death count (p 9). This matched well with Taylor&#39;s 2022 and 2024 reporting.
    </p>
    <p>
        Taylor also highlighted that MSF had recorded 214 cases of sexual violence just in December 2023 (2024, p 1). Taylor stressed the need for urgent care in effectively responding to these cases, and the severe lack of medical supplies and personnel (2024, p 1).
    </p>
    <!-- 1. Drowning
1. Untreated illness
    - Bacterial infection
    - Fungal infection
    - Respiratory illness
    - Heart attack -->

    <!-- 1.  -->

</div>
<div id="Conclusions" class="block-div">
    <div class="block">
        <h1>
            Conclusions
        </h1>
    </div>
</div>
<div class="block">
    <p>
        This project ended up being quite time limited. I didn&#39;t really fully answer all of the original questions, and I haven&#39;t had time to properly edit this. However, I found this project interesting because I had previously assumed building infrastructure would be beneficial. But, it seems that an effective solution will be more about politics than engineering.
    </p>
</div>
<div id="References" class="block-div">
    <div class="block">
        <h1>
            References
        </h1>
    </div>
</div>
<div class="block">
    <p class="citation">    
  Yates, Caitlyn. “Inclusive Counting: An Essential but Insufficient Approach to Account for Missing Migrants in Panama and Colombia’s Shared Darien Gap.” <i>Journal of Ethnic and Migration Studies</i>, vol. 50, no. 8, 2024, pp. 1941–58, <a href="https://doi.org/10.1080/1369183X.2023.2212323">doi.org/10.1080/1369183X.2023.2212323</a>.
</p>

    <p class="citation">
  Miller, Shawn W. “Minding the Gap: Pan-Americanism’s Highway, American Environmentalism, and Remembering the Failure to Close the Darién Gap.” <i>Environmental History</i>, vol. 19, no. 2, 2014, pp. 189–216, <a href="https://doi.org/10.1093/envhis/emu002">doi.org/10.1093/envhis/emu002</a>.
</p>

    <p class="citation">
  Taylor, Luke. “Malnutrition and Sexual Violence Rates Surge as Half a Million Cross the Darién Gap.” <i>BMJ (Online)</i>, vol. 384, 2024, pp. q318–q318, <a href="https://doi.org/10.1136/bmj.q318">doi.org/10.1136/bmj.q318</a>.
</p>

    <p class="citation">
  Taylor, Luke. “Health Crisis for Migrants Crossing the Darién Gap Is Intensifying, MSF Warns.” <i>BMJ (Online)</i>, vol. 377, 2022, pp. o1323–o1323, <a href="https://doi.org/10.1136/bmj.o1323">doi.org/10.1136/bmj.o1323</a>.
</p>

    <p class="citation">
  Hanbury-Tenison, A. R., and P. J. K. Burton. “Should the Darien Gap Be Closed?” <i>The Geographical Journal</i>, vol. 139, 1973, pp. 43-52.
</p>

    <p class="citation">
    “Darién Gap.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="https://en.wikipedia.org/wiki/Dari%C3%A9n_Gap">en.wikipedia.org/wiki/Dari%C3%A9n_Gap</a>. Accessed 19 Mar. 2025.
</p>

    <p class="citation">
    Delacroix, Matias, and Juan Zamorano. “They Crossed the Darien Gap to Reach the US. Migrants Are Now Returning.” AP News, 23 Feb. 2025, <a href="https://apnews.com/article/panama-united-states-migration-trump-beb125ce0ecbebb2895ea9dd18c4c53b">apnews.com/article/panama-united-states-migration-trump-beb125ce0ecbebb2895ea9dd18c4c53b</a>.
</p>

    <p class="citation">
    Zamorano, Juan. “Migration through Darien Gap Increased in September, Government Records Show.” <i>AP News</i>, 11 Oct. 2024, <a href="https://apnews.com/article/darien-gap-panama-venezuelan-migrants-4a385db728c922525d9addbc2577bc42">apnews.com/article/darien-gap-panama-venezuelan-migrants-4a385db728c922525d9addbc2577bc42</a>.
</p>

</div>
<!--END INSERT BODY-->
    </div>

    {#if menu_open}
    <div
        class="menu"
        in:fly={{
            easing: quintInOut,
            x: -100,
            duration: 200,
            opacity: 0
        }}
        out:fly={{
            easing: quintInOut,
            x: -100,
            duration: 200,
            opacity: 0
        }}
    >
        <b>Contents</b>
        
            <!--BEGIN INSERT MENU--><ol>
    <li>
        <a href="#(Top)">
            (Top)
        </a>
    </li>
    <li>
        <a href="#Introduction &amp; Orientation">
            Introduction &amp; Orientation
        </a>
    </li>
    <li>
        <a href="#Historical Context: The Pan-American Highway">
            Historical Context: The Pan-American Highway
        </a>
    </li>
    <li>
        <a href="#Contemporary Issues: Migration and Politics">
            Contemporary Issues: Migration and Politics
        </a>
    </li>
    <li>
        <a href="#Conclusions">
            Conclusions
        </a>
    </li>
    <li>
        <a href="#References">
            References
        </a>
    </li>
</ol>
<!--END INSERT MENU-->
        
    </div>
    {/if}
</div>

<style lang="scss">
	$primary: hsl(175, 100%, 10%);
	$primary-o50: transparentize($primary, 0.5);
	$primary-o60: transparentize($primary, 0.6);
	$primary-o70: transparentize($primary, 0.7);
	$primary-o80: transparentize($primary, 0.8);
	$primary-o90: transparentize($primary, 0.9);

    ///////////////////////////////////////////////////////////////////////////

    :root {
        --primary: $primary;

        --background: white;
        --text: black;
        --shadow: rgba(0,0,0,0.2);

        --cover: hsl(175, 27%, 94%);
        --divider: var(--primary);
    }

    // @media (prefers-color-scheme: dark) {
    //     :root {
    //         --background: hsl(341, 10%, 5%);
    //         --text: white;
    //         --shadow: none;

    //         --cover: rgb(35, 2, 24);
    //         --divider: hsla(341, 100%, 50%, 0.578);
    //     }
    // }

    ///////////////////////////////////////////////////////////////////////////

	.root {
        overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: stretch;

		flex-grow: 1;

		font-family: 'Linux Libertine', Times, serif;

        background: var(--background);
        color: var(--text);

    }

    .menu {
        position: absolute;
        top: 3em;
        left: 1ch;

        max-width: calc(100vw - 2ch);

        background: var(--background);
        border: solid 1px var(--cover);
        box-shadow: 0.1ch 0.1ch 0.3ch var(--shadow);

        padding: 0.5ch 1.5ch;

        word-break: break-all;

        ol {
            list-style: decimal inside;
            padding-bottom: 0.3em;

            li {
                display: block;
                // font-weight: bold;

                text-indent: -2ch;
                padding-left: 2ch !important;

                ol {
                    padding-left: 2ch;
                    li {
                        font-weight: normal;
                    }
                }
            }

            counter-reset: item;
           
            li:before {
                content: counters(item, ".") ". ";
                counter-increment: item;
            }

        }
    }

    .search {
        position: absolute;
        top: 3em;
        left: 1ch;

        max-width: calc(100vw - 2ch);

        background: var(--background);
        border: solid 1px var(--cover);
        box-shadow: 0.1ch 0.1ch 0.3ch var(--shadow);

        padding: 0.5ch 1.5ch;
    }

    ///////////////////////////////////////////////////////////////////////////

    header {
        padding: 0.2ch;
        
        background: var(--background);
        box-shadow: 0.1ch 0.1ch 0.3ch var(--shadow);

        display: flex;
        place-content: space-between;
        align-items: center;

        font-size: 1.2em;

        button {
            display: flex;
            align-items: center;
            padding: 0.8ch;

            :hover {
                background-color: $primary-o90;
            }
        }
    }

    .content {
        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        flex-grow: 1;
    }

    footer {
        text-align: center;
        background: #000;
        width: 100%;
    }

    ///////////////////////////////////////////////////////////////////////////

    .cover {
        background-color: var(--cover);

        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1em;
        
        padding: 2em;

        h1 {
            // font-family: 'Cormorant Garamond', Times, Serif;
            font-size: 1.75em;
            font-style: italic;
            font-weight: bold;
            
            text-align: center;
        }

        h2 {
            font-weight: bold;
            font-size: 1.15em;

            padding-bottom: 0.5em;

            text-align: center;
        }

        a {
            color: $primary;
        }

    }

    ///////////////////////////////////////////////////////////////////////////

    .block {
        padding: 1em 2em;

        flex-grow: 1;
        width: 90ch;
        max-width: 100vw;

        place-self: center;

        line-height: 1.3em;

        h1 {
            font-size: 1.5em;
        }

        h2 {
            padding-top: 1.5em;
            font-size: 1.05em;
            font-weight: bold;
        }

        h3 {
            padding-top: 1.5em;
            font-size: 1.05em;
            // font-weight: bold;
            font-style: italic;
        }

        mark {
            background: inherit;
        }

        ol {
            list-style: decimal outside;
            padding-top: 0.3em;
            padding-bottom: 0.3em;
            padding-left: 2em;

            p { display: contents; }
        }

        ul {
            list-style: disc outside;
            padding-top: 0.3em;
            padding-bottom: 0.3em;
            padding-left: 2em;
            
            p { display: contents; }
        }

        p {
            padding-top: 0.3em;
            padding-bottom: 0.3em;
        }

        figure {
            padding: 0.3em 0em;

            figcaption {
                text-align: center;
            }
        }
    }

    .block-div {
        border-bottom: solid 1ch;
        border-color: var(--divider);

		display: flex;
		flex-direction: column;
		align-items: stretch;
    
    }

    .citation {
        text-indent: -25px;
        padding-left: 25px !important;
        // line-height: 1.3em;
        
        a { padding: 0em; }
        i { padding: 0em; }
    }

    ///////////////////////////////////////////////////////////////////////////


    .footnote {
        text-align: center;
        opacity: 70%;
        font-style: italic;

        a {
            text-decoration-color: $primary-o70;
            text-decoration-style: dotted;
        }
    }

    ///////////////////////////////////////////////////////////////////////////

    a {
        text-decoration: underline 2px $primary-o80;
    }

    a:hover {
        text-decoration-color: $primary-o50;
        background-color: $primary-o90;
    }
    
    ///////////////////////////////////////////////////////////////////////////

    @media screen and (min-width: 50em) {
    }

    @media screen and (min-width: 75em) {
    }

</style>

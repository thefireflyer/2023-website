<script lang="ts">
    import LoremIpsum from '$lib/components/lorem-ipsum.svelte';
  import { fly } from 'svelte/transition';
    import type { PageData } from './$types';
  import { quintInOut } from 'svelte/easing';

    let { data }: { data: PageData } = $props();

    let menu_open = $state(false);
    let search_open = $state(false);

    let refs = [{
        title: "Good Practices in Building Innovative Rural Institutions to Increase Food Security",
        authors: ["Denis Herbel", "Eve Crowley", "Nora Ourabah Haddad", "Maria Lee"],
        date_published: 2012,
        url: "https://openknowledge.fao.org/server/api/core/bitstreams/32a421f9-0627-4108-9d76-5ef813223d39/content",
        isbn: "978-92-5-106898-4",
        publisher: "FAO"
    }]
</script>


<svelte:head>
	<title>Food Security & Cooperatives | Food for Thought 1 | GLBL 201</title>
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inclusive+Sans:ital@0;1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>

<div class="root dark:bg-ctp-crust">
    <header>
        <button onclick={() => (menu_open = !menu_open)}><span class="material-icons">menu</span></button>
        <span>Food for Thought 1</span>
        <button onclick={() => (search_open = !search_open)}><span class="material-icons">search</span></button>
    </header>
    <div class="content">
        <div class="cover">
            <h1>Food Security & Cooperatives</h1>
            <h2>By <a href="https://thefireflyer.vercel.app/">Aidan Beil</a></h2>
        </div>
        <div class="block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum exposuit vacuitatem doloris; <i>Si enim ad populum me vocas, eum.</i> Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Sed in rebus apertissimis nimium longi sumus. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. <i>Duo Reges: constructio interrete.</i> Et quidem, inquit, vehementer errat; </p>

            <ol>
                <li>Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia;</li>
                <li>Quae in controversiam veniunt, de iis, si placet, disseramus.</li>
                <li>Hic ego: Pomponius quidem, inquam, noster iocari videtur, et fortasse suo iure.</li>
                <li>Item de contrariis, a quibus ad genera formasque generum venerunt.</li>
            </ol>
            
            
            <p>Scio enim esse quosdam, qui quavis lingua philosophari possint; Quae si potest singula consolando levare, universa quo modo sustinebit? Nam quid possumus facere melius? <i>Laboro autem non sine causa;</i> Beatus sibi videtur esse moriens. Hoc non est positum in nostra actione. Quae cum dixisset, finem ille. Si autem id non concedatur, non continuo vita beata tollitur. </p>
            
            <p><a href='http://loripsum.net/' target='_blank'>An hoc usque quaque, aliter in vita?</a> Hunc vos beatum; Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile. Beatus autem esse in maximarum rerum timore nemo potest. </p>
            
            <p>Ad quorum et cognitionem et usum iam corroborati natura ipsa praeeunte deducimur. Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. <i>Itaque his sapiens semper vacabit.</i> <a href='http://loripsum.net/' target='_blank'>Conferam tecum, quam cuique verso rem subicias;</a> <a href='http://loripsum.net/' target='_blank'>Bonum incolumis acies: misera caecitas.</a> <a href='http://loripsum.net/' target='_blank'>Immo videri fortasse.</a> Iam contemni non poteris. Mihi enim satis est, ipsis non satis. <b>Non autem hoc: igitur ne illud quidem.</b> <i>Paria sunt igitur.</i> </p>
            
            <p>Magna laus. Eiuro, inquit adridens, iniquum, hac quidem de re; <a href='http://loripsum.net/' target='_blank'>Maximus dolor, inquit, brevis est.</a> Et quae per vim oblatum stuprum volontaria morte lueret inventa est et qui interficeret filiam, ne stupraretur. Quae cum essent dicta, discessimus. Qua igitur re ab deo vincitur, si aeternitate non vincitur? Non enim in selectione virtus ponenda erat, ut id ipsum, quod erat bonorum ultimum, aliud aliquid adquireret. Quid autem habent admirationis, cum prope accesseris? </p>
            
            <ul>
                <li>Quid, si non sensus modo ei sit datus, verum etiam animus hominis?</li>
                <li>Is ita vivebat, ut nulla tam exquisita posset inveniri voluptas, qua non abundaret.</li>
                <li>Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas?</li>
                <li>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</li>
                <li>Ut proverbia non nulla veriora sint quam vestra dogmata.</li>
            </ul>
            
            
            <p>Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quis non odit sordidos, vanos, leves, futtiles? Omnis enim est natura diligens sui. <a href='http://loripsum.net/' target='_blank'>Illa tamen simplicia, vestra versuta.</a> <a href='http://loripsum.net/' target='_blank'>Is es profecto tu.</a> Frater et T. </p>
            
            <p>Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. <mark>Sic consequentibus vestris sublatis prima tolluntur.</mark> Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Sed quid sentiat, non videtis. Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur. Animadverti, ínquam, te isto modo paulo ante ponere, et scio ab Antiocho nostro dici sic solere; Bonum integritas corporis: misera debilitas. </p>
            
            <figure>
                <img src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg" />
                <figcaption>Wheat Field (Pexels)</figcaption>
            </figure>

            <p>Quamquam te quidem video minime esse deterritum. <a href='http://loripsum.net/' target='_blank'>Quos quidem tibi studiose et diligenter tractandos magnopere censeo.</a> Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Quasi ego id curem, quid ille aiat aut neget. Quod non faceret, si in voluptate summum bonum poneret. Vitiosum est enim in dividendo partem in genere numerare. </p>
            
            <p>Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Si enim ita est, vide ne facinus facias, cum mori suadeas. Explanetur igitur. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Summus dolor plures dies manere non potest? Illa argumenta propria videamus, cur omnia sint paria peccata. Ego vero volo in virtute vim esse quam maximam; Traditur, inquit, ab Epicuro ratio neglegendi doloris. </p>
            
            <!-- <iframe src="https://ourworldindata.org/grapher/cereal-production?tab=map" loading="lazy" style="width: 100%; height: 600px; border: 0px none;" allow="web-share; clipboard-write"></iframe> -->

            <p>Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Quis Pullum Numitorium Fregellanum, proditorem, quamquam rei publicae nostrae profuit, non odit? <b>Pugnant Stoici cum Peripateticis.</b> Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; <a href='http://loripsum.net/' target='_blank'>Ita fit cum gravior, tum etiam splendidior oratio.</a> <i>In schola desinis.</i> Inde sermone vario sex illa a Dipylo stadia confecimus. Ergo in gubernando nihil, in officio plurimum interest, quo in genere peccetur. </p>
            
            <p>Qua igitur re ab deo vincitur, si aeternitate non vincitur? <b>Stoici scilicet.</b> Non modo carum sibi quemque, verum etiam vehementer carum esse? <b>Quod autem satis est, eo quicquid accessit, nimium est;</b> Quod non faceret, si in voluptate summum bonum poneret. <b>Ut aliquid scire se gaudeant?</b> Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? </p>
            
            <ul>
                <li>Eaedem enim utilitates poterunt eas labefactare atque pervertere.</li>
                <li>Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur.</li>
                <li>Vitiosum est enim in dividendo partem in genere numerare.</li>
                <li>Itaque his sapiens semper vacabit.</li>
            </ul>
            
            
            <ol>
                <li>Quis Aristidem non mortuum diligit?</li>
                <li>Cur deinde Metrodori liberos commendas?</li>
                <li>Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego;</li>
                <li>Cur, nisi quod turpis oratio est?</li>
            </ol>
            
            
            <p>Ita graviter et severe voluptatem secrevit a bono. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Quae quo sunt excelsiores, eo dant clariora indicia naturae. <b>De hominibus dici non necesse est.</b> Haec para/doca illi, nos admirabilia dicamus. Quamquam te quidem video minime esse deterritum. </p>
            
            <ol>
                <li>Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum.</li>
                <li>Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit?</li>
                <li>Quid ait Aristoteles reliquique Platonis alumni?</li>
                <li>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</li>
            </ol>
            
            
            <ul>
                <li>Quod autem satis est, eo quicquid accessit, nimium est;</li>
                <li>Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.</li>
                <li>Quid, cum fictas fabulas, e quibus utilitas nulla elici potest, cum voluptate legimus?</li>
                <li>Isto modo ne improbos quidem, si essent boni viri.</li>
            </ul>
            
            
            <p><b>Huius ego nunc auctoritatem sequens idem faciam.</b> Quo modo? Philosophi autem in suis lectulis plerumque moriuntur. Sed mehercule pergrata mihi oratio tua. </p>
            
            <p><a href='http://loripsum.net/' target='_blank'>Non est igitur voluptas bonum.</a> Quia dolori non voluptas contraria est, sed doloris privatio. <mark>Erat enim Polemonis.</mark> Sed erat aequius Triarium aliquid de dissensione nostra iudicare. </p>
            
            <p>Qui non moveatur et offensione turpitudinis et comprobatione honestatis? <b>Itaque hic ipse iam pridem est reiectus;</b> Ergo illi intellegunt quid Epicurus dicat, ego non intellego? Multoque hoc melius nos veriusque quam Stoici. <a href='http://loripsum.net/' target='_blank'>Venit ad extremum;</a> Sin laboramus, quis est, qui alienae modum statuat industriae? Maximas vero virtutes iacere omnis necesse est voluptate dominante. <mark>De illis, cum volemus.</mark> </p>
            
            
        </div>

        <div class="block-div"><div class="block">
            <h1>Background</h1>
        </div></div>
        <div class="block">
            <p>...</p>
        </div>
        
        <div class="block-div"><div class="block">
            <h1>Case Study: CoopWorks</h1>
        </div></div>
        <div class="block">
            <p>...</p>
        </div>

        <div class="block-div"><div class="block">
            <h1>References</h1>
        </div></div>
        <div class="block">
            {#each refs as ref}
                <p class="citation">
                    {ref.authors}. 
                    "{ref.title}"
                    {#if ref.container != null}
                        <span>{ref.container}</span>,
                    {/if}
                    {#if ref.volume != null}
                        vol. {ref.volume},
                    {/if}
                    {#if ref.number != null}
                        no. {ref.number},
                    {/if}
                    {#if ref.url != null}
                        <a href={ref.url}>{ref.url}</a>
                    {/if}
                </p>
            {/each}
        </div>
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
        <ol>
            <a href="#1">
                <li>(Top)</li>
            </a>
            <a href="#1">
                <li>Background</li>
            </a>
            <a href="#1">
                <li>Case Study: Kenya</li>
            </a>
            <a href="#1">
                <li>References</li>
            </a>
            <a href="#2">
                <li>Analysisssssssssssssssssssssssssssssssssssssssssssssssssssss</li>
            </a>
            <a href="#3">
                <li>Items and testing; comparative analytics</li>
            </a>
        </ol>
    </div>
    {/if}
    <!-- {#if search_open}
    <div
        class="search"
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
        <p><input type="text" /></p>
        <b>Results</b>
        <ul>
            <a href="#..."><li>...</li></a>
        </ul>
    </div>
    {/if} -->
</div>

<style lang="scss">
	$primary: hsl(341, 100%, 50%);
	$primary-o50: transparentize($primary, 0.5);
	$primary-o60: transparentize($primary, 0.6);
	$primary-o70: transparentize($primary, 0.7);
	$primary-o80: transparentize($primary, 0.8);
	$primary-o90: transparentize($primary, 0.9);

    ///////////////////////////////////////////////////////////////////////////

    :root {
        --primary: rgb(255,0,81);

        --background: white;
        --text: black;
        --shadow: rgba(0,0,0,0.2);

        --cover: rgb(243, 234, 240);
        --divider: var(--primary);
    }

    // @media (prefers-color-scheme: dark) {
    //     :root {
    //         --background: hsl(341, 80%, 5%);
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
            font-family: 'Cormorant Garamond', Times, Serif;
            font-size: 1.75em;
            font-style: oblique;
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

        h1 {
            font-size: 1.5em;
        }

        h2 {
            font-size: 1.25em;
        }

        h3 {
            font-size: 1.15em;
        }

        mark {
            background: inherit;
        }

        ol {
            list-style: decimal inside;
            padding-top: 0.3em;
            padding-bottom: 0.3em;
        }

        ul {
            list-style: disc inside;
            padding-top: 0.3em;
            padding-bottom: 0.3em;
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

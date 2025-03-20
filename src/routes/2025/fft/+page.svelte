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
        <div class="cover" id="(Top)">
            <h1>Food Security & Cooperatives</h1>
            <h2>By <a href="/">Aidan Beil</a></h2>
        </div>

        <!--BEGIN INSERT BODY--><div class="block">
    <p>
        Malnutrition killed more than 196,000 people in 2021 (Ortiz-Ospina and Roser), and around 1-in-10, or 800 million people, were malnourished worldwide in 2022 (Roser et al., “Hunger and Undernourishment”; Khalid Bashir et al., p 1).
    </p>
    <p>
        This is in spite of the fact that we actually produce enough food to feed everyone (Khalid Bashir et al., p 1; Bashan, p 112).
    </p>
    <p>
        Instead, unattainable prices, instability, and underdevelopment, among other factors, drive this global health failure (Khalid Bashir et al., p 1; Bashan, p 112; Denis et al., p 18; Hansen, p 3). For example, nearly 3 billion people could not afford a healthy diet in 2022 (Roser et al., “Food Prices”).
    </p>
    <p>
        Many countries maintain food stocks in order to mitigate price instability (Khalid Bashir et al., p 16). However, Khalid Bashir et al. noted that these policies typically entail high government spending and opportunity cost, as well as major transnational implications (p 15-20).
    </p>
    <p>
        Hansen discussed a variety of high- and low- price systems. High-price systems raise consumer prices in order to support farmers (p 222). Low price systems support farmers through taxes (p 222).
    </p>
    <p>
        Given high-price systems reduce affordability, and we are already producing enough food, we will leave them be.
    </p>
    <p>
        Low-price systems may support affordability in two key ways: (1) supporting farmers may increase food supply, potentially reducing consumer prices, and (2) supporting farmers may increase their income, increasing food affordability for farmers.
    </p>
    <p>
        I would suspect policies like Universal Basic Income and government funding for infrastructure may also help, but they were outside of the scope of this project.
    </p>
    <p>
        However, many countries have been reducing direct market interventions, leading to the &quot;liberalization&quot; of food markets (Hansen, p 219).
    </p>
    <p>
        Moving from the national level to the organizational level, we see unions, non-profits, and cooperatives, emerge as potential solutions.
    </p>
    <p>
        Unions may support worker&#39;s wages, and in turn, support their ability to afford food. However, establishing unions may be difficult, especially without legal support.
    </p>
    <p>
        Non-profits may be able to supply food for much lower prices since they are not as constrained by profit-motives. However, non-profits may struggle to raise enough funds in a reliable manner to effectively address food security.
    </p>
    <p>
        So, we turn our attention to cooperatives.
    </p>
    <p>
        We will look at 3 main types of cooperatives:
    </p>
    <ol>
        <li>
            <p>
                Worker cooperatives, wherein those who work at the company, typically subject to a fee or prerequisite time, own and run the company democratically.
            </p>
        </li>
        <li>
            <p>
                Consumer cooperatives, wherein those who purchase services from the company, subject to some conditions, own and run the company democratically.
            </p>
        </li>
        <li>
            <p>
                Producer cooperatives, wherein a set of companies pool resources in a democratic manner.
            </p>
        </li>
    </ol>
    <p>
        We are interested in cooperatives for the following key reasons:
    </p>
    <ol>
        <li>
            <p>
                They are resilient in times of economic struggle (Hansen, p 282; Faridzah, et al., p 1; &quot;Cooperative&quot;; &quot;Worker Democracy&quot;; Qorri, p 1; Kasmir, p 33).
            </p>
        </li>
        <li>
            <p>
                They are associated with more equitable resource distribution and social responsibility (&quot;Cooperative&quot;; &quot;Worker Democracy&quot;; Hansen, p 282; Qorri, p 1-5).
            </p>
        </li>
        <li>
            <p>
                They are associated with lower turnover rates (&quot;Cooperative&quot;; &quot;Worker Democracy&quot;).
            </p>
        </li>
        <li>
            <p>
                They are associated with low transaction costs (Hansen, p 282).
            </p>
        </li>
        <li>
            <p>
                They are associated with strong vertical integration (Hansen, p 282).
            </p>
        </li>
    </ol>
    <p>
        I would say that cooperatives may have higher, or at least similar, productivity but the results are overall extremely mixed (Kasmir, p 17; &quot;Cooperative&quot;; Brandano et al., p 18-19; &quot;Worker Democracy&quot;; Qorri, p 5). I do not currently know how to make sense of such disparities in conclusion. We&#39;ll come back to this later.
    </p>
    <p>
        Also, as we will see, we must be careful about the generalizability of these findings (&quot;Worker Democracy&quot;), as well as the specific details of governance, organization, and membership (Kasmir; Jamaluddin et al., p 18; &quot;Worker Democracy&quot;).
    </p>
    <p>
        Before we examine cooperatives in depth, we will first examine food security, and related notions, more closely.
    </p>
</div>
<div id="Food Security Models" class="block-div">
    <div class="block">
        <h1>
            Food Security Models
        </h1>
    </div>
</div>
<div class="block">
    <p>
        Food security requires that all people always have access to food that is safe, nutritionally sufficient, and culturally acceptable (Khalid Bashir et al., p 2, p 191).
    </p>
    <p>
        The term &quot;cultural acceptable&quot; typically refers to one of three static definitions of the broader concept of cultural appropriateness (House et al., p 5-8, p 11). However, these perspectives do not capture the following aspects:
    </p>
    <ul>
        <li>
            <p>
                The connection between a person&#39;s identity and their experience of the food (p 9).
            </p>
        </li>
        <li>
            <p>
                The historical context of the food (p 9).
            </p>
        </li>
        <li>
            <p>
                The knowledge and associations present regarding the food (p 9).
            </p>
        </li>
        <li>
            <p>
                The moral, or normative, beliefs about the food (p 9).
            </p>
        </li>
        <li>
            <p>
                The cultural and social context of the preparation of the food (p 10-11).
            </p>
        </li>
        <li>
            <p>
                The cultural and social context of the consumption of the food, especially in relation to the group of people eating (p 9-11).
            </p>
        </li>
        <li>
            <p>
                The cultural and social context of the acquisition of the food. As well as, importantly, how much agency the person(s) feel in acquiring the food (p 10-11).
            </p>
        </li>
    </ul>
    <p>
        Moreover, the static lens ignores the social-construction of taste, culture, social norms, beliefs, and so on (p 11-13). House et al. further argues that the definition we select has important political ramifications.
    </p>
    <p>
        Regardless, we will select the recommended dynamic definition.
    </p>
    <p>
        Moving on, we can now talk about sustainable diets. Sustainable diets, beyond mere food security, also require the following (House et al., p 2):
    </p>
    <ol>
        <li>
            <p>
                The food has low environmental impact.
            </p>
        </li>
        <li>
            <p>
                The food is protective and respectful of ecosystems and biodiversity.
            </p>
        </li>
        <li>
            <p>
                The food minimizes natural and human resources.
            </p>
        </li>
        <li>
            <p>
                The food is healthy.
            </p>
        </li>
    </ol>
    <p>
        Okay, so we are now in a position to discuss the main factors needed to ensure food security:
    </p>
    <ol>
        <li>
            <p>
                We must have adequate raw production of culturally appropriate food.
            </p>
        </li>
        <li>
            <p>
                We must have adequate infrastructure to transport that food in a safe and timely manner, to all places, in proportion to the needs of that community.
            </p>
        </li>
        <li>
            <p>
                We must have adequately low prices in comparison to each community&#39;s respective funds.
            </p>
        </li>
        <li>
            <p>
                We must have adequate storage facilities to mitigate wastage and spoilage.
            </p>
        </li>
        <li>
            <p>
                We must have adequate market infrastructure to allow all people to access the food.
            </p>
        </li>
    </ol>
    <p>
        With this, we can move on to looking at food security in practice, today.
    </p>
    <!-- 
### ((Define food security))

### ((Define sustainable diets))

### ((Note discussion around cultural appropriateness))

### ((Detailed consequences))

### ((Detailed factors)) -->

</div>
<div id="Food Security in Practice" class="block-div">
    <div class="block">
        <h1>
            Food Security in Practice
        </h1>
    </div>
</div>
<div class="block">
    <p>
        Our World in Data created a series of interactive visuals showcasing current food security statistics.
    </p>
    <p>
        For example, we can examine how many kilocalories, per person, are available in each country.
    </p>
    <iframe src="https://ourworldindata.org/explorers/global-food?Food=Total&tab=map&hideControls=true" loading="lazy" style="width: 100%; height: 600px; border: 0px none;" allow="web-share; clipboard-write"></iframe>

    <p>
        If we want to talk about more than absolute minimum needed to keep a human alive, we will also want to look at protein and fat supply.
    </p>
    <iframe src="https://ourworldindata.org/grapher/daily-per-capita-protein-supply?tab=map" loading="lazy" style="width: 100%; height: 600px; border: 0px none;" allow="web-share; clipboard-write"></iframe>

    <iframe src="https://ourworldindata.org/grapher/daily-per-capita-fat-supply?tab=map" loading="lazy" style="width: 100%; height: 600px; border: 0px none;" allow="web-share; clipboard-write"></iframe>

    <p>
        As seen in the visuals above, there is dramatic variability in the caloric, protein, and fat supply across different countries.
    </p>
    <p>
        To understand these disparities, let&#39;s look at the (in)affordability of food in each country.
    </p>
    <iframe src="https://ourworldindata.org/explorers/food-prices?tab=map&hideControls=true" loading="lazy" style="width: 100%; height: 600px; border: 0px none;" allow="web-share; clipboard-write"></iframe>

    <p>
        As we can see, there appears to be a reasonably strong correlation between the percentage of the population able to afford a healthy diet, and the supply of calories, protein, and fat, per person, available in each country.
    </p>
    <p>
        Lastly, we can examine how this corresponds to deaths from malnutrition.
    </p>
    <iframe src="https://ourworldindata.org/grapher/malnutrition-death-rates?tab=map" loading="lazy" style="width: 100%; height: 600px; border: 0px none;" allow="web-share; clipboard-write"></iframe>

    <p>
        Due to time constraints, we&#39;ll move on to cooperative models now.
    </p>
</div>
<div id="Cooperative Models" class="block-div">
    <div class="block">
        <h1>
            Cooperative Models
        </h1>
    </div>
</div>
<div class="block">
    <p>
        As mentioned before, there are multiple types of cooperatives. However, they are all mostly off the Rochdale principles (&quot;Rochdale Principles&quot;; Hansen, p 273):
    </p>
    <ol>
        <li>
            <p>
                Voluntary and open membership
            </p>
        </li>
        <li>
            <p>
                Democratic member control
            </p>
        </li>
        <li>
            <p>
                Member economic participation
            </p>
        </li>
        <li>
            <p>
                Autonomy and independence
            </p>
        </li>
        <li>
            <p>
                Education, training, and information
            </p>
        </li>
        <li>
            <p>
                Cooperation among cooperatives
            </p>
        </li>
        <li>
            <p>
                Concern for community
            </p>
        </li>
    </ol>
    <p>
        In theory, we could expect the following benefits:
    </p>
    <ol>
        <li>
            <p>
                Greater organizational resilience due to distributed power.
            </p>
        </li>
        <li>
            <p>
                Greater employee satisfactions due to increased ability to accommodate needs and desire.
            </p>
        </li>
        <li>
            <p>
                Greater organizational cohesion due to inclusive democratic processes.
            </p>
        </li>
        <li>
            <p>
                Greater productivity due to greater employee satisfaction, greater education access, and greater organizational cohesion.
            </p>
        </li>
        <li>
            <p>
                Greater transparency due to distributed power and increased responsibility.
            </p>
        </li>
        <li>
            <p>
                Greater responsiveness to social issues due to distributed power.
            </p>
        </li>
    </ol>
    <p>
        On the other hand, we might worry about the following:
    </p>
    <ol>
        <li>
            <p>
                Greater difficulty getting funding due to lack of incentives for external investors.
            </p>
        </li>
        <li>
            <p>
                Greater difficulty competing against more exploitative companies.
            </p>
        </li>
        <li>
            <p>
                Greater resistance to workers&#39; organizations due to greater organizational cohesion and greater employee satisfaction.
            </p>
        </li>
        <li>
            <p>
                Greater infrastructure needs due to democratic processes.
            </p>
        </li>
        <li>
            <p>
                Greater communication needs due to democratic processes.
            </p>
        </li>
        <li>
            <p>
                Greater organizational costs due to greater infrastructure needs and greater communication needs.
            </p>
        </li>
        <li>
            <p>
                Lower wages due to greater difficulty getting funding, greater difficulty competing against more exploitative companies, greater resistance to workers&#39; organizations, and greater organizational costs.
            </p>
        </li>
    </ol>
    <p>
        We also need to be careful about the following:
    </p>
    <ol>
        <li>
            <p>
                Membership conditions
            </p>
            <ul>
                <li>
                    <p>
                        Who is, and isn&#39;t, included?
                    </p>
                </li>
                <li>
                    <p>
                        Who gets to decide the conditions?
                    </p>
                </li>
            </ul>
        </li>
        <li>
            <p>
                Member ownership
            </p>
            <ul>
                <li>
                    <p>
                        How much does each member own?
                    </p>
                </li>
                <li>
                    <p>
                        If its a mixed cooperative, how are shares divved up between the groups?
                    </p>
                </li>
                <li>
                    <p>
                        What are the things the member can, and can&#39;t, do with their shares?
                    </p>
                </li>
                <li>
                    <p>
                        Who gets to decide the answers to these questions?
                    </p>
                </li>
            </ul>
        </li>
        <li>
            <p>
                Member voting
            </p>
            <ul>
                <li>
                    <p>
                        When, and how often, are elections done?
                    </p>
                </li>
                <li>
                    <p>
                        Where are elections done?
                    </p>
                </li>
                <li>
                    <p>
                        What voting method(s) are used in elections?
                    </p>
                </li>
                <li>
                    <p>
                        Who is, and isn&#39;t, able to participate?
                    </p>
                </li>
                <li>
                    <p>
                        Who is, and isn&#39;t, represented?
                    </p>
                </li>
                <li>
                    <p>
                        Who gets to decide the answers to these questions?
                    </p>
                </li>
            </ul>
        </li>
        <li>
            <p>
                Informal rules and structure
            </p>
            <ul>
                <li>
                    <p>
                        What are the unspoken rules, norms, ideals, and beliefs in the organization?
                    </p>
                </li>
                <li>
                    <p>
                        Who has unspoken power, and over whom?
                    </p>
                </li>
                <li>
                    <p>
                        What are the mechanisms influencing informal power?
                    </p>
                </li>
                <li>
                    <p>
                        How is informal power reflected in formal relations?
                    </p>
                </li>
            </ul>
        </li>
    </ol>
    <p>
        While this is a minimal framework, owing to time limitations, we can now move on to examining cooperatives in practice.
    </p>
</div>
<div id="Cooperatives in Practice" class="block-div">
    <div class="block">
        <h1>
            Cooperatives in Practice
        </h1>
    </div>
</div>
<div class="block">
    <p>
        Worker cooperatives first emerged in 1760 (&quot;Worker Cooperative&quot;), and consumer cooperatives first emerged in 1808 (Kasmir, p 23). Both consumer cooperatives and producer cooperatives largely emerged in connection with workers&#39; organizations (Kasmir, p 23). However, those connection broke down in the 1850s and stratification emerged within the organizations (Kasmir, p 23). Stratification is present today (see Kasmir), but tends to lower than in conventional firms (&quot;Worker Democracy&quot;).
    </p>
    <p>
        As mentioned before, cooperatives are resilient. For example, Mondragon cooperatives laid fewer people off, and maintained higher levels of job creation than surrounding firms during the economic turmoil of the 1980s (Kasmir, p 33). They did this in part by transferring workers between cooperatives (Kasmir, p 33).
    </p>
    <p>
        Another example: members of active cooperatives in Senegal and Ivory Coast reported higher food security during Covid-19 in comparision to members of poorly/not active cooperatives (Kpadé et al., p 16).
    </p>
    <p>
        Cooperatives have also played a crucial role in supporting small-producers in low-income and middle-income countries. For example, cooperative input shops helped supply small-producers in Niger with fertilizer and seeds (Herbel et al., p 33).
        Or, cooperatives helped small farmers in Côte d’Ivoire access certified seeds by collaborating with government programs and creating a &quot;Cyber-seed&quot; online market system (Herbel et al., p 34).
    </p>
    <p>
        The cooperative &quot;CoopWorks&quot; in Kenya created an open source Business Information System specifically designed for producer organization (Herbel et al., p 57). The Tulaga dairy cooperative used CoopWorks to grow to 3,500 members and improve efficiency, returns and competitiveness (Herbel et al., p 57). This last project sounded so cool that I actually originally wanted to write a whole section about it, but all I was able to find was 
        <a href="https://coopworks.online/">
            their website
        </a>
         and 
        <a href="https://sourceforge.net/projects/coopworks/">
            source code
        </a>
        .
    </p>
    <p>
        Cooperatives were also crucial in &quot;Operation Flood&quot;---an initiative to dramatically increase national milk production in India, running from 1970 to 1980 (Bashir et al., p 106). Though, I was slightly confused by the number of grammatical errors in this section. It seems like the authors were from Pakistan, so perhaps the document was translated poorly. This is also the only section I read with no citations, so I honestly would&#39;ve liked to find a second source on the topic, but I ran out of time.
    </p>
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
        I do not think I did this topic justice. However, I did learn a lot about agricultural cooperatives, food supply chains, cultural appropriateness, intellectual capital, and more.
    </p>
    <p>
        In reality, cooperatives are messy, diverse, and complicated. There is limited quantitative research on a number of topics, and much of the research that does exist is inconsistent. For example, with regards to technical efficiency (Brandano et al., p 18-19) or cooperative governance&#39;s impact on performance (Jamaluddin et al., p 18).
    </p>
    <p>
        There is 
        <i>
            so
        </i>
         much more one could research here, but here are some key topics I think would be worth exploring:
    </p>
    <ul>
        <li>
            <p>
                Organizational governance.
            </p>
        </li>
        <li>
            <p>
                Informal governance and norms.
            </p>
        </li>
        <li>
            <p>
                (Another) systemic literature review on performance.
            </p>
        </li>
        <li>
            <p>
                ICT and BIS systems for cooperatives, specifically focusing on relevance to voting systems and information distribution.
            </p>
        </li>
    </ul>
    <p>
        Someday, I hope to examine the political context of cooperatives as well, but that is a long ways away for now.
    </p>
    <p>
        I would also like to properly fact check the &quot;Worker Democracy&quot; video by Unlearning Economics, since the channel is explicitly meant to challenge conventional narratives in economics. I did not have time for to do that for this project. In hopes of mitigating potential issues, the only claim I didn&#39;t have a second source backing up was that cooperatives exhibit less payroll stratification than conventional firms. In the mean time, perhaps it is best to take that claim with a grain of salt.
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
Ortiz-Ospina, Esteban, and Max Roser. “Deaths from Malnutrition.” <i>Our World in Data</i>, 2016, <a href="https://ourworldindata.org/grapher/deaths-from-malnutrition-ghe">ourworldindata.org/grapher/deaths-from-malnutrition-ghe</a>. Accessed 28 Feb. 2025.
</p>

    <p class="citation">
  Kasmir, Sharryn. <i>The Myth of Mondragón : Cooperatives, Politics, and Working-Class Life in a Basque Town</i>. State University of New York Press, 1996.
</p>

    <p class="citation">
Herbel, Denis, et al. <i>Good Practices in Building Innovative Rural Institutions to Increase Food Security</i>. JLIFAD, 2012. <a href="https://openknowledge.fao.org/server/api/core/bitstreams/32a421f9-0627-4108-9d76-5ef813223d39/content">https://openknowledge.fao.org/server/api/core/bitstreams/32a421f9-0627-4108-9d76-5ef813223d39/content</a>.
</p>

    <p class="citation">
  Bashir, Muhammad Khalid, et al., editors. <i>Food Security in the Developing World</i>. John Wiley & Sons, Inc., 2024.
</p>

    <p class="citation">
Hansen, Henning. <i>Food Economics : Industry and Markets</i>, Taylor & Francis Group, 2013. <i>ProQuest Ebook Central</i>, <a href="https://ebookcentral-proquest-com.ezproxy.library.wwu.edu/lib/wwu/detail.action?docID=1186406">https://ebookcentral-proquest-com.ezproxy.library.wwu.edu/lib/wwu/detail.action?docID=1186406</a>.
</p>

    <p class="citation">
  House, Jonas, et al. “What Is Culturally Appropriate Food Consumption? A Systematic Literature Review Exploring Six Conceptual Themes and Their Implications for Sustainable Food System Transformation.” <i>Agriculture and Human Values</i>, vol. 41, no. 2, 2024, pp. 863–82, <a href=" https://doi.org/10.1007/s10460-023-10515-6">https://doi.org/10.1007/s10460-023-10515-6.</a>
</p>

    <p class="citation">
  Qorri, Dejsi, and János Felföldi. “Research Trends in Agricultural Marketing Cooperatives: A Bibliometric Review.” <i>Agriculture (Basel)</i>, vol. 14, no. 2, 2024, pp. 199-, <a href="https://doi.org/10.3390/agriculture14020199">https://doi.org/10.3390/agriculture14020199</a>.
</p>

    <p class="citation">
  Sánchez-Hernández, M. Isabel, and Francisca Castilla-Polo. “Intellectual Capital as a Predictor of Cooperative Prominence through Human Capital in the Spanish Agrifood Industry.” <i>Journal of Intellectual Capital</i>, vol. 22, no. 6, 2021, pp. 1126–46, <a href="https://doi.org/10.1108/JIC-06-2020-0201">https://doi.org/10.1108/JIC-06-2020-0201</a>.
</p>

    <p class="citation">
  Brandano, Maria Giovanna, et al. “Comparative Efficiency of Agricultural Cooperatives and Conventional Firms In a Sample of Quasi-Twin Companies.” Annals of Public and Cooperative Economics, vol. 90, no. 1, 2019, pp. 53–76, https://doi.org/10.1111/apce.12220.
</p>

    <p class="citation">
  Kpadé, Cokou Patrice, et al. “Food Insecurity, Coping Strategies, and Resilience of Agricultural Cooperative Members during COVID-19 in West Africa.” <i>Agriculture & Food Security</i>, vol. 12, no. 1, 2023, pp. 38–38, <a href="https://doi.org/10.1186/s40066-023-00440-6">https://doi.org/10.1186/s40066-023-00440-6</a>.
</p>

    <p class="citation">
  Feyaerts, Hendrik, et al. “Global and Local Food Value Chains in Africa: A Review.” <i>Agricultural Economics</i>, vol. 51, no. 1, 2020, pp. 143–57, <a href="https://doi.org/10.1111/agec.12546">https://doi.org/10.1111/agec.12546</a>.
</p>

    <!-- https://agrifoodecon.springeropen.com/articles/10.1186/s40100-024-00331-9 -->

    <p class="citation">
  Jamaluddin, Faridzah, et al. “Cooperative Governance and Cooperative Performance: A Systematic Literature Review.” <i>SAGE Open</i>, vol. 13, no. 3, 2023, <a href="https://doi.org/10.1177/21582440231192944">https://doi.org/10.1177/21582440231192944</a>.
</p>

    <p class="citation">
Ritchie, Hannah, et al. “Agricultural Production.” <i>Our World in Data</i>, 2020, <a href="https://ourworldindata.org/agricultural-production">ourworldindata.org/agricultural-production</a>.
</p>

    <p class="citation">
Roser, Max, et al. “Food Prices.” <i>Our World in Data</i>, 2013, <a href="https://ourworldindata.org/food-prices">ourworldindata.org/food-prices</a>.
</p>

    <p class="citation">
Roser, Max, et al. “Hunger and Undernourishment.” <i>Our World in Data</i>, 2023, <a href="https://ourworldindata.org/hunger-and-undernourishment">ourworldindata.org/hunger-and-undernourishment</a>.
</p>

    <p class="citation">
“Cooperative.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="">en.wikipedia.org/wiki/Cooperative</a>. Accessed 28 Feb. 2025.
</p>

    <p class="citation">
“Worker Cooperative.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="">en.wikipedia.org/wiki/Worker_cooperative</a>. Accessed 28 Feb. 2025.
</p>

    <p class="citation">
“Consumers’ Co-Operative.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="">en.wikipedia.org/wiki/Consumers%27_co-operative</a>. Accessed 28 Feb. 2025.
</p>

    <p class="citation">
“Agricultural Cooperative.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="">en.wikipedia.org/wiki/Agricultural_cooperative</a>. Accessed 28 Feb. 2025.
</p>

    <p class="citation">
“Platform Cooperative.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="">en.wikipedia.org/wiki/Platform_cooperative</a>. Accessed 28 Feb. 2025.
</p>

    <p class="citation">
“Purchasing Cooperative.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="">en.wikipedia.org/wiki/Purchasing_cooperative</a>. Accessed 28 Feb. 2025.
</p>

    <p class="citation">
“List of Causes of Death by Rate.” <i>Wikipedia</i>, Wikimedia Foundation, <a href="">en.wikipedia.org/wiki/List_of_causes_of_death_by_rate</a>. Accessed 28 Feb. 2025.
</p>

    <!-- # Appendix A: Fact Checking "Worker Democracy" by Unlearning Economics -->

    <p class="citation">
Unlearning Economics. “Worker Democracy.” <i>YouTube</i>, 4 Dec. 2021, <a href="https://www.youtube.com/watch?v=yZHYiz60R5Q">www.youtube.com/watch?v=yZHYiz60R5Q</a>.
</p>
<!-- 

    <p>
        <b>
            Claim 1:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Less inequality within firms&quot;
            </i>
        </a>
    </p>
    <ul>
        <li>
            <p>
                <b>
                    Cites:
                </b>
            </p>
            <ul>
                <li>
                    <p>
                        Burdin, 2015
                    </p>
                </li>
            </ul>
        </li>
        <li>
            <p>
                <b>
                    Corresponding full citations:
                </b>
            </p>
            <ul>
                <li>
                    <p>
                        Equality Under Threat by The Talented: Evidence From Worker-Managed Firms, Burdin?
                    </p>
                </li>
            </ul>
        </li>
        <li>
            <p>
                <b>
                    Conclusion:
                </b>
            </p>
            <ul>
                <li>
                    <p>
                        ...
                    </p>
                </li>
            </ul>
        </li>
    </ul>
    <p>
        <b>
            Claim 2:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Workers are less likely to leave voluntarily&quot;
            </i>
        </a>
    </p>
    <p>
        Blasi et al, 2016
        Do Broad-based Employee Ownership, Profit Sharing and Stock Options Help the Best Firms Do Even Better?, Blasi et al
    </p>
    <p>
        <b>
            Claim 3:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Workers are less likely to leave involuntarily&quot;
            </i>
        </a>
    </p>
    <p>
        Pencavel and Craig, 1994
        The empirical performance of orthodox models of the firm: Conventional firms and worker cooperatives, Pencavel &amp; Craig
    </p>
    <p>
        Pencavel et al, 2006
        Wages, Employment, And Capital in Capitalist and Worker-Owned Firms, Pencavel et al
    </p>
    <p>
        Burdin and Dean, 2009
        New evidence on wages and employment in worker cooperatives compared with capitalist firms, Burdín &amp; Dean
    </p>
    <p>
        <b>
            Claim 4:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Workers put in more effort&quot;
            </i>
        </a>
    </p>
    <p>
        Frohlich et al, 1998
        Employee Vs. Conventionally Owned and Controlled Firms: An Experimental Analysis, Frohlich et al
    </p>
    <p>
        Mellizo et al, 2014
        Workplace Democracy in the Lab, Mellizo et al
    </p>
    <p>
        <b>
            Claim 5:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Workers report increased trust levels&quot;
            </i>
        </a>
    </p>
    <p>
        Sabatini et al, 2014
        Do cooperative enterprises create social trust?, Sabatini et al
    </p>
    <p>
        <b>
            Claim 6:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Lower rates of business failure/higher rates of survival&quot;
            </i>
        </a>
    </p>
    <p>
        OCA, 2008
        Survival Rate of Co-operatives in Québec, OCA
    </p>
    <p>
        Murray, 2011
        Co-op Survival Rates in British Columbia, Murray
    </p>
    <p>
        Stringham and Lee 2011
        Co-op Survival Rates in Alberta, Stringham &amp; Lee
    </p>
    <p>
        Oslen, 2013
        The Relative Survival of Worker Cooperatives and Barriers to Their Creation, Olsen
    </p>
    <p>
        Burdin, 2014
        ???
    </p>
    <p>
        Monteiro and Stewart, 2015
        Scale, Scope and Survival: A Comparison of Cooperative and Capitalist Modes of Production, Monteiro &amp; Stewart
    </p>
    <p>
        <b>
            Claim 7:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Similar levels of productivity to capitalist firms&quot;
            </i>
        </a>
    </p>
    <p>
        Fakhfakh et al, 2011
        Productivity, Capital and Labor in Labor-Managed and Conventional Firms, FakhFakh et al
    </p>
    <p>
        Monteiro Straume, 2018
        Are Cooperatives More Productive Than Investor-Owned Firms? Cross-Industry Evidence From Portugal, Monteiro &amp; Straume
    </p>
    <p>
        <b>
            Claim 8:
        </b>
         
        <a href="https://youtu.be/yZHYiz60R5Q?t=334">
            <i>
                &quot;Similar levels of investment to capitalist firms&quot;
            </i>
        </a>
    </p>
    <p>
        Maietta and Sena, 2008
        Shadow price of capital and the Furubotn–Pejovich effect: Some empirical evidence for Italian wine cooperatives, Maietta &amp; Sena
    </p>
    <p>
        Fakhfakh et al, 2011
        Productivity, Capital and Labor in Labor-Managed and Conventional Firms, FakhFakh et al --&gt;
    </p>
    <!-- Intellectual capital and financial performance: a meta-
analysis and research agenda Albertini, E. and Berger-Remy, F. (2019) ?

(Gasco et al. 2019), ???? -->

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
        <a href="#Food Security Models">
            Food Security Models
        </a>
    </li>
    <li>
        <a href="#Food Security in Practice">
            Food Security in Practice
        </a>
    </li>
    <li>
        <a href="#Cooperative Models">
            Cooperative Models
        </a>
    </li>
    <li>
        <a href="#Cooperatives in Practice">
            Cooperatives in Practice
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

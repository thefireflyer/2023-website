<script lang="ts">
  let links = [
    {
      section: "Software",
      contents: [
        {
          title: "Homeportal",
          url: "/homeportal",
        },
        {
          title: "An Interpreter",
          url: "/2025/interpreter",
        },
        {
          title: "Computer Algebra System",
          url: "",
        },
        {
          title: "Graph Editor",
          url: "",
        },
      ],
    },
    // {
    // 	section: 'Writing',
    // 	contents: [
    // 		{
    // 			title: 'A Simple SAT Solver',
    // 			url: '',
    // 			desc:
    // 			["What are SAT problems?"
    // 			,"What is DPLL?"
    // 			,"What is CDCL?"
    // 			,"Where can I learn more?"
    // 			]
    // 		},
    // 		{
    // 			title: 'Rendering Graphs',
    // 			url: '',
    // 			desc:
    // 			["How do we formalize graph rendering?"
    // 			,"What is Stress Majorization?"
    // 			,"What is Stochastic Gradient Descent?"
    // 			,"What are some other options?"
    // 			]
    // 		},
    // 	]
    // },
    {
      section: "Misc",
      contents: [
        {
          title: "Photography",
          url: "/2024/photography",
        },
        {
          title: "Bookmarks",
          url: "2024/bookmarks",
        },
      ],
    },
  ];

  ///////////////////////////////////////////////////////////////////////////
</script>

<svelte:head>
  <title>thefireflyer</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inclusive+Sans:ital@0;1&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="root dark:bg-ctp-crust">
  <header>
    <h1>TheFireFlyer</h1>
  </header>

  <div class="content">
    <ul>
      {#each links as section}
        <li><h2>{section.section}</h2></li>
        <ul>
          {#each section.contents as link}
            <li>
              {#if link.url == ""}
                <div class="placeholder">{link.title}</div>
              {:else}
                <a href={link.url}>
                  {link.title}
                </a>
              {/if}
              <!-- {#if link.desc != null}
							 <ul>
								{#each link.desc as q}
								<li>{q}</li>
								{/each}
							 </ul>
							{/if} -->
            </li>
          {/each}
        </ul>
      {/each}
    </ul>
    <div>
      <h2>About Me</h2>
      <p>
        I'm an undergrad studying computer science and sociology. Though, I
        adore just about everything computers, math, and social science.
      </p>
      <p>
        I mostly write software, but I do occasionally post other forms of
        writing.
      </p>
      <p>I also do photography from time to time.</p>
      <br />
      <!-- <br />
			<br /> -->
      <div class="footnote">thefireflyer.dev[at]protonmail.com</div>
      <!-- <br />
			<div class="footnote">⟣ glitchy catgirl ⟢</div> -->
      <!-- <br /> -->
      <div class="footnote">
        <a href="https://github.com/thefireflyer">GitHub</a>
        •
        <a href="https://www.linkedin.com/in/aidan-beil-75b024263/">LinkedIn</a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  $primary: rgb(250, 230, 243);
  $primary-o50: transparentize($primary, 0.5);
  $primary-o60: transparentize($primary, 0.6);
  $primary-o70: transparentize($primary, 0.7);
  $primary-o80: transparentize($primary, 0.8);
  $primary-o90: transparentize($primary, 0.9);

  .root {
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    flex-grow: 1;

    padding: 2em 2em;

    font-family: "Linux Libertine", Times, serif;

    font-size: 16pt;

    .placeholder {
      opacity: initial;
    }

    .footnote {
      text-align: center;
      opacity: 70%;
      font-style: italic;
      padding-bottom: 1em;

      a {
        text-decoration-color: $primary-o70;
        text-decoration-style: dotted;
      }
    }

    h1 {
      font-family: "Cormorant Garamond", Times, Serif;
      font-size: 1.75em;
      font-style: oblique;
      opacity: 70%;
      font-weight: bold;
    }

    h2 {
      font-weight: bold;
      padding-bottom: 0.5em;
    }

    header {
      text-align: center;
    }

    footer {
      text-align: center;
      background: #000;
      width: 100%;
    }

    .content {
      flex-grow: 1;
      max-width: 50ch;
    }

    .icon {
    }

    a {
      text-decoration: underline 2px $primary-o80;
    }

    a:hover {
      text-decoration-color: $primary-o50;
      background-color: $primary-o90;
    }

    ul {
      ul {
        list-style-type: circle;
        padding-bottom: 1.5em;

        li {
          font-weight: normal;
          padding-bottom: 0em;
          opacity: 80%;

          ul {
            padding-left: 2em;
            list-style-type: circle;
            padding-bottom: 0em;

            li {
              padding-bottom: 0em;
            }
          }
        }
      }
    }

    p {
      padding-top: 0.3em;
      padding-bottom: 0.3em;
    }

    .logo {
      width: 30ch;
      height: 30ch;
    }

    @media screen and (min-width: 50em) {
      .content {
        font-size: 16pt;
        max-width: 65ch;
      }
    }

    @media screen and (min-width: 75em) {
    }
  }
</style>

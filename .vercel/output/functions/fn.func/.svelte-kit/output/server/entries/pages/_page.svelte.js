import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../chunks/index.js";
const card_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'a.svelte-793mcx.svelte-793mcx{color:var(--md-sys-color-primary)}.lg-icon.svelte-793mcx.svelte-793mcx{max-width:192px}.app-connection.svelte-793mcx.svelte-793mcx{position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(90deg, rgba(96, 96, 96, 0.5), rgba(96, 96, 96, 0.5)) no-repeat right bottom/0 100%;transition:background-size 200ms ease-in-out;transform:rotateZ(45deg);z-index:1}.app-connection.svelte-793mcx.svelte-793mcx:where(:hover, :focus-visible){background-size:100% 100%;background-position:left}.icon.svelte-793mcx.svelte-793mcx{width:64px;z-index:2;pointer-events:none}.post-link.svelte-793mcx.svelte-793mcx:hover{background-color:rgba(96, 96, 96, 0.5)}.flow-link.svelte-793mcx.svelte-793mcx{background:linear-gradient(90deg, rgb(96, 96, 96), rgb(96, 96, 96)) no-repeat right bottom/0 var(--bg-h);--bg-h:100%;transition:background-size 100ms ease-in-out}.flow-link.svelte-793mcx.svelte-793mcx:where(:hover, :focus-visible){background-size:100% var(--bg-h);background-position:left bottom}.underline.svelte-793mcx.svelte-793mcx{text-decoration:none;padding-bottom:2px;--bg-h:2px}.pronouns.svelte-793mcx .svelte-793mcx{pointer-events:none;user-select:none}@media screen and (min-width: 768px){.page-container.svelte-793mcx.svelte-793mcx{background-image:url("http://thefireflyer.me/website/static/8913dc387c4ecdbb689c4e673be2646b/d3b28/img6.avif");background-size:cover}.about.svelte-793mcx.svelte-793mcx{background-color:rgba(0, 0, 0, 0.6)}}@media screen and (min-width: 768px) and (prefers-color-scheme: light){.about.svelte-793mcx.svelte-793mcx{background-color:rgba(255, 255, 255, 0.6)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = [
    {
      name: "App",
      icon: "icon.png",
      slug: "/app"
    },
    {
      name: "HomePortal",
      icon: "homeportal.png",
      slug: "/homeportal"
    }
  ];
  let posts = [
    {
      name: "Lorem ipsum dolor sit amet",
      image: "",
      slug: "/posts/test",
      desc: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Risus viverra adipiscing at in tellus. Tellus elementum sagittis vitae et leo. Sagittis id consectetur purus ut faucibus pulvinar. Pulvinar neque laoreet suspendisse interdum consectetur libero. In massa tempor nec feugiat nisl pretium. Tortor id aliquet lectus proin nibh. Vel eros donec ac odio tempor orci dapibus. Eget est lorem ipsum dolor sit amet. Aliquam vestibulum morbi blandit cursus risus at. Cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Lacus laoreet non curabitur gravida arcu. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Tellus in hac habitasse platea. Arcu dui vivamus arcu felis bibendum ut tristique et.
			`
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1u2di8n_START -->${$$result.title = `<title>testing07</title>`, ""}<!-- HEAD_svelte-1u2di8n_END -->`, ""}

<div class="${"grow flex flex-col md:flex-row overflow-y-scroll md:overflow-y-hidden overflow-x-hidden"}"><div class="${"grow flex flex-col md:flex-row overflow-y-scroll md:overflow-y-hidden overflow-x-hidden"}"><div class="${"grow flex flex-col overflow-y-visible md:overflow-x-hidden"}"><div class="${"grow p-5 md:pb-0 flex flex-col overflow-y-visible md:overflow-x-hidden"}"><div class="${"p-3 bg-neutral-200 dark:bg-neutral-800 rounded-lg "}"><div class="${"md:w-fit grid md:flex gap-5 grid-cols-3 flex-row flex-wrap"}">${each(links, (link) => {
    return `<a${add_attribute("href", link.slug, 0)} class="${"flex justify-center shrink svelte-793mcx"}"><div class="${"overflow-hidden rounded-lg relative"}"><div class="${"p-1"}"><img${add_attribute("src", link.icon, 0)}${add_attribute("alt", link.name, 0)} class="${"relative icon svelte-793mcx"}"></div>
									<div class="${"app-connection svelte-793mcx"}"></div></div>
							</a>`;
  })}</div></div>

				<div class="${"p-3"}"></div>

				<div class="${"grow flex flex-col md:overflow-y-scroll gap-y-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg p-1 md:p-3 md:rounded-b-none"}">${each(posts, (post) => {
    return `<a${add_attribute("href", post.slug, 0)} class="${"flex svelte-793mcx"}"><div class="${"grow rounded-md overflow-hidden"}"><div class="${"post-link p-1 px-3 svelte-793mcx"}"><p class="${"text-xl"}">${escape(post.name)}</p>
									<p class="${"overflow-hidden text-ellipsis whitespace-nowrap"}">${escape(post.desc)}</p>
								</div></div>
						</a>`;
  })}</div></div></div>

		<div class="${"p-5 md:pb-0 flex"}"><div class="${"grow flex rounded-xl md:rounded-b-none page-container overflow-hidden svelte-793mcx"}"><div class="${"grow about p-5 rounded-lg bg-neutral-200 dark:bg-neutral-800 md:backdrop-blur-2xl md:bg-transparent flex flex-col items-center  svelte-793mcx"}"><img src="${"logo2.png"}" alt="${"logo"}" class="${"lg-icon svelte-793mcx"}">
					<p class="${"text-2xl"}">thefireflyer</p>
					<div class="${"p-1"}"></div>

					<div class="${"flex gap-2 md:flex-col items-center "}"><span class="${"pronouns hidden md:inline-flex rounded-full p-1 px-2 svelte-793mcx"}">

							<div class="${"px-2 text-center text-lg grow text-neutral-700 dark:text-neutral-300 svelte-793mcx"}">they / them</div>
							
							</span>

						<p class="${"hidden md:block text-lg"}">Other accounts</p>
						<a href="${"https://github.com/theflyingfire"}" class="${"svelte-793mcx"}"><p class="${"flow-link underline svelte-793mcx"}">Github</p></a>
						<a href="${"https://codepen.io/theflyingfire"}" class="${"svelte-793mcx"}"><p class="${"flow-link underline svelte-793mcx"}">CodePen</p></a>
						<a href="${"https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ"}" class="${"svelte-793mcx"}"><p class="${"flow-link underline svelte-793mcx"}">YouTube</p></a>

						</div></div></div></div></div>
</div>`;
});
export {
  Page as default
};

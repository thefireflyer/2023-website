import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-d2hha7{color:var(--md-sys-color-primary)}.mini-icon.svelte-d2hha7{width:25px;height:25px;margin-left:8px;margin-right:8px;pointer-events:none}.simple-link.svelte-d2hha7:hover{background-color:rgba(96, 96, 96, 0.5)}.flow-link.svelte-d2hha7{background:linear-gradient(90deg, rgb(96, 96, 96), rgb(96, 96, 96)) no-repeat right bottom / 0\r\n			var(--bg-h);--bg-h:100%;transition:background-size 100ms ease-in-out}.flow-link.svelte-d2hha7:where(:hover, :focus-visible){background-size:100% var(--bg-h);background-position:left bottom}.underline.svelte-d2hha7{text-decoration:none;padding-bottom:2px;--bg-h:2px}@media screen and (min-width: 768px){.about.svelte-d2hha7{width:256px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = [
    {
      name: "Gallery",
      icon: "icon.png",
      slug: "/dragon/gallery"
    },
    {
      name: "Posts",
      icon: "icon.png",
      slug: "/dragon"
    },
    {
      name: "Replies",
      icon: "icon.png",
      slug: "/dragon"
    }
  ];
  $$result.css.add(css);
  return `<div class="${"grow flex flex-col md:flex-row overflow-y-scroll md:overflow-y-hidden overflow-x-hidden"}"><div class="${"grow flex flex-col md:flex-row overflow-y-scroll md:overflow-y-hidden overflow-x-hidden"}"><div class="${"grow flex flex-col overflow-y-visible md:overflow-x-hidden"}"><div class="${"grow p-5 md:pb-0 flex flex-col overflow-y-visible md:overflow-x-hidden"}"><div class="${"p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg md:w-fit "}"><div class="${"grid md:flex gap-3 grid-cols-3 flex-row flex-wrap"}">${each(links, (page) => {
    return `<a${add_attribute("href", page.slug, 0)} class="${"text-center rounded-md p-1 text-lg simple-link svelte-d2hha7"}">${escape(page.name)}
                        </a>`;
  })}</div></div>

				<div class="${"p-3"}"></div>

				<div class="${"grow flex flex-col md:overflow-y-scroll gap-y-5 bg-neutral-100 dark:bg-neutral-800 rounded-lg md:p-3 md:rounded-b-none"}">${slots.default ? slots.default({}) : ``}</div></div></div>

		<div class="${"md:pb-0 flex"}"><div class="${"grow flex page-container"}"><div class="${"grow about p-5 bg-neutral-200 dark:bg-neutral-800 flex flex-col items-center  svelte-d2hha7"}"><p class="${"text-2xl"}">Dragon</p>
					<div class="${"p-2"}"></div>

					<div class="${"flex gap-2 md:flex-col items-center "}"><span class="${"hidden md:flex"}"><img src="${"/transfem.png"}" class="${"mini-icon svelte-d2hha7"}">
                                <p class="${"text-md"}">she/they
                                </p>
                                <img src="${"/bi.png"}" class="${"mini-icon svelte-d2hha7"}"></span>
						<a href="${"/"}" class="${"svelte-d2hha7"}"><p class="${"flow-link underline svelte-d2hha7"}">art account</p></a>
						<a href="${"/"}" class="${"svelte-d2hha7"}"><p class="${"flow-link underline svelte-d2hha7"}">twitter</p></a></div></div></div></div></div>
</div>`;
});
export {
  Layout as default
};

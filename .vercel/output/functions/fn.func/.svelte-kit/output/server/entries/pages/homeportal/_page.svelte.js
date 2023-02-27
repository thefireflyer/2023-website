import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/index.js";
const backdropcard_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".backdrop-option.svelte-3yenum{width:150px;height:100px}.icon.svelte-3yenum{width:64px;width:64px;min-height:64px;min-height:64px}",
  map: null
};
let sizing = "cover";
let position = "center";
let textColor = "white";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formatted;
  let time = new Date();
  let backgroundUrl = "https://pbs.twimg.com/media/FNgM9LJXMAYiE_4?format=jpg&name=large";
  $$result.css.add(css);
  formatted = time.toLocaleTimeString();
  return `
<div class="${"backcover flex grow flex-col bg-no-repeat p-4 md:p-7 relative"}" style="${"background-image: url(" + escape(backgroundUrl, true) + "); background-size: " + escape(sizing, true) + "; background-position: " + escape(position, true) + ";"}"><h1 class="${"hidden md:block py-6 text-6xl font-semibold text-right"}" style="${"color: " + escape(textColor, true)}">${escape(formatted)}</h1>

	${``}

	<div class="${"grow"}"></div>

	<div class="${"flex"}"><a href="${"/"}" class="${"flex items-center"}" style="${"color:" + escape(textColor, true)}"><span class="${"text-3xl material-icons-round"}">arrow_back </span></a>

		<div class="${"grow"}"></div>

		<h1 class="${"z-10 rounded-full text-3xl text-right material-icons-outlined"}"${add_attribute("style", `color: ` + textColor, 0)}>${`settings`}</h1></div>

	${``}
</div>`;
});
export {
  Page as default
};

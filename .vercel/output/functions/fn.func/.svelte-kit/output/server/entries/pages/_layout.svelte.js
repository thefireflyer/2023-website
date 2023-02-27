import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../lib/material-theme/css/theme.css';html, body{padding:0;margin:0;height:100%;overflow:hidden;background:var(--md-sys-color-background);color:var(--md-sys-color-on-background);font-family:'Open Sans', sans-serif}.svelte-u8wiwj::-webkit-scrollbar{display:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"bg-neutral-100 dark:bg-neutral-900 h-full w-full flex flex-col md:flex-row svelte-u8wiwj"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};

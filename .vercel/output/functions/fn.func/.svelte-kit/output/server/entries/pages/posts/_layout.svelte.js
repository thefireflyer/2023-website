import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"overflow-hidden grow flex flex-col relative"}"><a href="${"/"}" class="${"absolute top-3 right-3 md:right-6 rounded-full px-1 flex justify-center bg-neutral-200 dark:bg-neutral-800"}"><span class="${"text-2xl material-icons text-center"}">clear
        </span></a>
    
    <div class="${"grow flex flex-col md:px-20 lg:px-32 xl:px-64 overflow-y-scroll"}"><div class="${"grow p-3 px-5 bg-neutral-100 dark:bg-neutral-900"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
export {
  Layout as default
};

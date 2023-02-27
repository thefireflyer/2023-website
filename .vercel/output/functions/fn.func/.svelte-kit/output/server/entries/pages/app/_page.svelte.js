import { c as create_ssr_component, e as escape, f as each } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".icon.svelte-1ojkyax{width:64px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formatted;
  let time = new Date();
  let recentNotes = [{ url: "test", name: "testing" }];
  $$result.css.add(css);
  formatted = time.toLocaleTimeString();
  time.getHours();
  time.getMinutes();
  time.getSeconds();
  return `<div class="${"p-3 flex grow gap-3 flex-col"}"><div class="${"flex gap-3"}"><a href="${"https://forecast.weather.gov/MapClick.php?lat=48.121200000000044&lon=-122.77262999999999"}" class="${"grow flex flex-row gap-3 items-center p-3 rounded-lg border-2 border-neutral-800 hover:bg-neutral-200 hover:dark:bg-neutral-800"}"><img src="${"icon.png"}" class="${"icon svelte-1ojkyax"}" alt="${"rainy"}">
			<span class="${"text-xl"}">Rainy, 50° </span></a>
		<div class="${"hidden md:flex flex-row gap-3 items-center p-3 rounded-lg border-2 border-neutral-800 text-4xl"}"><span class="${"text-2xl"}">${escape(formatted)}</span></div></div>

	

	<a href="${"app/schedule"}" class="${"flex flex-col p-3 gap-3 rounded-lg border-2 border-neutral-800 hover:bg-neutral-200 hover:dark:bg-neutral-800"}"><div class="${"flex items-center gap-3 rounded-lg"}"><span class="${"material-icons-outlined text-2xl text-neutral-600 dark:text-neutral-300"}">schedule</span>
			<span class="${"text-xl text-neutral-600 dark:text-neutral-300"}">11:50</span>
			<span class="${"text-xl text-center grow"}">Breakfast</span>
			<span class="${"text-xl text-neutral-600 dark:text-neutral-300"}">12:50</span></div>
		<div class="${"grow flex flex-row h-1 bg-gray-300 dark:bg-gray-700 rounded-full"}"><div class="${"basis-5/12 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"}"></div></div>
		<div class="${"flex justify-center items-center gap-3 rounded-lg"}"><span class="${"material-icons-outlined text-2xl text-neutral-600 dark:text-neutral-300"}">check_circle</span>
			<div class="${"grow flex flex-row h-1 bg-gray-300 dark:bg-gray-700 rounded-full"}"><div class="${"basis-1/12 h-1 bg-pink-700 rounded-full"}"></div></div></div></a>

	<div class="${"flex flex-col grow gap-3 p-3 rounded-lg border-2 border-neutral-800 overflow-y-scroll"}">${each(recentNotes, (note) => {
    return `<a href="${"app/mip/" + escape(note.url, true)}" class="${"flex flex-row gap-3 items-center hover:bg-neutral-200 hover:dark:bg-neutral-800 rounded-lg px-1"}"><span class="${"material-icons-outlined text-2xl"}">article</span>
				<span class="${"text-lg"}">${escape(note.name)}</span>
			</a>`;
  })}</div>
</div>`;
});
export {
  Page as default
};

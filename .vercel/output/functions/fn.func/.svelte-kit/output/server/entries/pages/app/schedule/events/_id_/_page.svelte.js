import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../../../../chunks/index.js";
function eventDates(event) {
  return new Date(event.year, event.month, event.date, event.hours, event.minutes);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let start = eventDates(data.event.start);
  eventDates(data.event.end);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"overflow-hidden grow flex flex-col p-3"}"><div class="${"flex flex-col p-3 pb-5 gap-3 rounded-lg p-1 px-2 border-2 border-neutral-800"}"><div class="${"flex gap-2 items-center"}"><a href="${"../"}" class="${"flex items-center"}"><span class="${"text-lg material-icons"}">arrow_back_ios_new </span></a>
			<h1 class="${"text-2xl"}">${escape(data.event.name)}</h1>
			<div class="${"grow"}"></div></div>
		<form action="${"../"}" class="${"flex flex-col gap-5 rounded-lg "}"><input type="${"text"}" id="${"name"}" placeholder="${"name"}"${add_attribute("value", data.event.name, 0)} required class="${"p-2 px-4 rounded-full bg-neutral-200 dark:bg-neutral-800 "}">
			<input type="${"text"}" id="${"desc"}" placeholder="${"desc"}"${add_attribute("value", data.event.desc, 0)} class="${"p-2 px-4 rounded-full bg-neutral-200 dark:bg-neutral-800 "}">

			<div class="${"flex gap-3"}"><input type="${"datetime-local"}" id="${"start"}" required${add_attribute("value", start.toDateString(), 0)} class="${"p-2 px-4 rounded-full bg-neutral-200 dark:bg-neutral-800 "}">
				<input type="${"datetime-local"}" id="${"end"}" required${add_attribute("value", start.toLocaleTimeString(), 0)} class="${"p-2 px-4 rounded-full bg-neutral-200 dark:bg-neutral-800 "}"></div>

			<input type="${"submit"}" value="${"Save changes"}" class="${"p-2 px-4 bg-rose-400 dark:bg-rose-900 rounded-full"}"></form></div>
	<div class="${"grow"}"></div></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../../chunks/index.js";
import { n as navigating } from "../../../../chunks/stores.js";
import { T as Transition } from "../../../../chunks/transition.js";
const dragable_svelte_svelte_type_style_lang = "";
const Notelink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { note } = $$props;
  let { expanded = false } = $$props;
  let { animated = true } = $$props;
  if ($$props.note === void 0 && $$bindings.note && note !== void 0)
    $$bindings.note(note);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  return `<div class="${"flex items-stretch justify-start flex-row"}"><button><span class="${"material-icons "}">${note.children.length > 0 ? `${expanded ? `unfold_less` : `unfold_more`}` : `last_page`}</span></button>
    <span class="${"w-full"}"><a href="${"/app/mip/" + escape(note.slug, true)}" class="${"w-full"}">${escape(note.name)}</a></span></div>
<div class="${"pl-3"}">${expanded ? `<div>${each(note.children, (children) => {
    return `${validate_component(Notelink, "svelte:self").$$render($$result, { note: children, animated }, {}, {})}`;
  })}</div>` : ``}
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".files.svelte-gm7nyi{min-height:fit-content}.dragable.svelte-gm7nyi{user-select:none;cursor:w-resize}@media screen and (max-width: 768px){.files.svelte-gm7nyi{min-width:100%}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageUrl = "";
  let animated = true;
  navigating.subscribe((nav) => {
    if (nav) {
      console.log(nav);
      console.log(nav.to?.url.pathname);
      if (nav.to) {
        pageUrl = nav.to.url.pathname.split("/")[3];
        if (nav.from?.url.pathname.split("/")[2] != nav.to.url.pathname.split("/")[2]) {
          animated = false;
        } else {
          animated = true;
        }
      }
    }
  });
  let { data } = $$props;
  let drawerWidth = 200;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"flex grow overflow-y-scroll overflow-x-hidden md:overflow-hidden flex-col md:flex-row p-3 pt-0 md:p-3"}"><div class="${"flex"}">${`<div class="${"files p-4 overflow-y-scroll svelte-gm7nyi"}" style="${"width: " + escape(drawerWidth, true) + "px;"}">${each(data.files, (note) => {
    return `${validate_component(Notelink, "Notelink").$$render($$result, { note, expanded: true }, {}, {})}`;
  })}</div>`}
    
    <div class="${"p-2 flex"}"><div class="${"bg-gray-300 dark:bg-gray-700 w-1 rounded-full dragable svelte-gm7nyi"}"></div></div></div>
    <div class="${"grow relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 rounded-lg"}">${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      url: pageUrl,
      classes: "\r\n        p-4\r\n        absolute top-0 left-0 w-full h-full\r\n        overflow-y-scroll",
      animated
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div></div>

`;
});
export {
  Layout as default
};

import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { T as Transition } from "../../../../chunks/transition.js";
import { n as navigating } from "../../../../chunks/stores.js";
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
  return `<div class="${"grow flex"}">${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      url: pageUrl,
      classes: "\r\n                absolute top-0 left-0\r\n                w-full h-full\r\n                flex\r\n                overflow-hidden flex-col md:flex-row",
      animated
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>`;
});
export {
  Layout as default
};

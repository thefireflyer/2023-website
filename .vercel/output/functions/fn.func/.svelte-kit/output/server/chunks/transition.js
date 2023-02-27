import { c as create_ssr_component, d as add_attribute } from "./index.js";
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { classes } = $$props;
  let { animated = true } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  return `<div${add_attribute("class", classes, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Transition as T
};

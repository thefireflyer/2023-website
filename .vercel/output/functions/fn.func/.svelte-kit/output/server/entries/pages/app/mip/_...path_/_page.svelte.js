import { c as create_ssr_component } from "../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div contenteditable="${"true"}"><h1>test</h1>
    <p>test2</p></div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-zd67cp{color:var(--md-sys-color-primary)}.post-link.svelte-zd67cp:hover{background-color:rgba(96, 96, 96, 0.5)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let posts = [
    {
      name: "Lorem ipsum dolor sit amet",
      image: "",
      slug: "/dragon/posts",
      desc: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Risus viverra adipiscing at in tellus. Tellus elementum sagittis vitae et leo. Sagittis id consectetur purus ut faucibus pulvinar. Pulvinar neque laoreet suspendisse interdum consectetur libero. In massa tempor nec feugiat nisl pretium. Tortor id aliquet lectus proin nibh. Vel eros donec ac odio tempor orci dapibus. Eget est lorem ipsum dolor sit amet. Aliquam vestibulum morbi blandit cursus risus at. Cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Lacus laoreet non curabitur gravida arcu. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Tellus in hac habitasse platea. Arcu dui vivamus arcu felis bibendum ut tristique et.
			`
    }
  ];
  $$result.css.add(css);
  return `${each(posts, (post) => {
    return `<a${add_attribute("href", post.slug, 0)} class="${"flex svelte-zd67cp"}"><div class="${"grow rounded-md overflow-hidden"}"><div class="${"post-link p-1 px-3 svelte-zd67cp"}"><p class="${"text-xl"}">${escape(post.name)}</p>
                    <p class="${"overflow-hidden text-ellipsis whitespace-nowrap"}">${escape(post.desc)}</p>
                </div></div>
        </a>`;
  })}`;
});
export {
  Page as default
};

import { c as create_ssr_component, f as each, d as add_attribute } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post.svelte-1bi8da8.svelte-1bi8da8{overflow:hidden}.post.svelte-1bi8da8.svelte-1bi8da8:hover{background-color:rgba(96, 96, 96, 0.5)}.post.svelte-1bi8da8 img.svelte-1bi8da8{width:350px;height:250px;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let posts = [
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    },
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    },
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    },
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    },
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    },
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    },
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    },
    {
      src: "/icon.png",
      slug: "/gallery/test",
      name: "test"
    }
  ];
  $$result.css.add(css);
  return `<div class="${"grid md:flex gap-5 md:grid-cols-3 flex-row flex-wrap justify-center posts p-3 "}">${each(posts, (post) => {
    return `<a${add_attribute("href", post.slug, 0)} class="${"bg-neutral-100 dark:bg-neutral-900 post p-1 rounded-lg svelte-1bi8da8"}"><img${add_attribute("src", post.src, 0)}${add_attribute("alt", post.name, 0)} class="${"svelte-1bi8da8"}">
		</a>`;
  })}
</div>`;
});
export {
  Page as default
};

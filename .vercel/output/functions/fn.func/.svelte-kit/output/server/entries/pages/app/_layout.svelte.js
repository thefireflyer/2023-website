import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index.js";
import { p as page, n as navigating } from "../../../chunks/stores.js";
import { T as Transition } from "../../../chunks/transition.js";
const Navlink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { pathname } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  $$unsubscribe_page();
  return `<a${add_attribute("href", pathname, 0)} class="${"p-2 md:p-0"}"><div class="${"w-full h-max grid items-center justify-center grid-rows-1"}"><span class="${"w-full text-center " + escape(
    $page.url.pathname == pathname ? `
        material-icons
        ` : `material-icons-outlined`,
    true
  )}">${slots.default ? slots.default({}) : ``}</span></div>
</a>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../../lib/material-theme/css/theme.css';footer.svelte-19sgnue{min-height:64px;height:64px}@media screen and (min-width: 768px){.slot-container.svelte-19sgnue{border-radius:12px 0 0 0}header.svelte-19sgnue{min-height:40px;height:40px}.sidebar.svelte-19sgnue{height:100%;min-width:40px;width:40px;transition:width 0.2s ease-in-out}@media(prefers-color-scheme: dark){.slot-container.svelte-19sgnue{box-shadow:inset 0.5em 0.5em 0.5em -0.5em black}}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let pageUrl = "";
  let animated = true;
  navigating.subscribe((nav) => {
    if (nav) {
      console.log(nav);
      console.log(nav.to?.url.pathname);
      if (nav.to) {
        pageUrl = nav.to.url.pathname.split("/")[2];
        if (nav.from?.url.pathname.split("/")[1] != nav.to.url.pathname.split("/")[1]) {
          animated = false;
        } else {
          animated = true;
        }
      }
    }
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `

<div class="${"grow flex flex-col bg-white dark:bg-neutral-800 overflow-hidden"}"><header class="${"p-2 hidden md:flex svelte-19sgnue"}"><div class="${"grow grid items-stretch justify-start grid-rows-1 grid-flow-col"}"><a href="${"/"}"><div class="${""}"><span class="${"md:dark:bg-violet-900 rounded-full text-md material-icons-round text-center"}">apps
					</span></div></a>
			${each($page.url.pathname.split("/"), (page2) => {
    return `${page2 != "" && page2 != "app" ? `<div class="${""}"><span class="${"text-md material-icons text-center"}">chevron_right </span></div>
					<div class="${""}"><span class="${"text-md text-center"}">${escape(page2)}</span>
					</div>` : ``}`;
  })}</div>
		<div>${``}</div></header>
	<div class="${"grow flex flex-row overflow-hidden "}"><div class="${"sidebar hidden md:flex p-2 columns-2 items-center md:columns-1 md:flex-col svelte-19sgnue"}"><div class="${"hidden md:flex grow flex-col columns-1"}">${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app" }, {}, {
    default: () => {
      return `space_dashboard`;
    }
  })}
				<div class="${"p-3"}"></div>
				${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app/schedule" }, {}, {
    default: () => {
      return `calendar_today`;
    }
  })}
				<div class="${"p-3"}"></div>
				${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app/mip" }, {}, {
    default: () => {
      return `article`;
    }
  })}

				<div class="${"grow"}"></div>
				${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app/settings" }, {}, {
    default: () => {
      return `settings`;
    }
  })}</div></div>

		<div class="${"grow rounded-b-xl slot-container relative bg-neutral-100 dark:bg-neutral-900 overflow-hidden svelte-19sgnue"}">
			${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      url: pageUrl,
      classes: "\r\n            absolute top-0 left-0\r\n            w-full h-full\r\n            flex\r\n            overflow-hidden flex-col md:flex-row",
      animated
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div></div>
	<footer class="${"flex md:hidden svelte-19sgnue"}"><div class="${"grow flex md:hidden p-2 items-center"}"><a href="${"/"}" class="${"p-2 h-max grid items-center justify-center grid-rows-1"}"><span class="${"rounded-full material-icons-round text-center"}">apps
					</span></a>
			<div class="${"grow"}"></div>

			${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app" }, {}, {
    default: () => {
      return `space_dashboard`;
    }
  })}
			<div class="${"p-4"}"></div>
			${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app/schedule" }, {}, {
    default: () => {
      return `calendar_today`;
    }
  })}
			<div class="${"p-4"}"></div>
			${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app/mip" }, {}, {
    default: () => {
      return `article`;
    }
  })}

			<div class="${"grow"}"></div>
			${validate_component(Navlink, "Navlink").$$render($$result, { pathname: "/app/settings" }, {}, {
    default: () => {
      return `settings`;
    }
  })}</div></footer>
</div>`;
});
export {
  Layout as default
};

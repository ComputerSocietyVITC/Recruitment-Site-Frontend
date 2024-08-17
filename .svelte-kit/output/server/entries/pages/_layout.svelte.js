import { c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { u as user } from "../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_user();
  return `<section class="bg-background text-foreground min-h-screen min-w-screen font-main mx-auto md:w-[80%] p-4 overflow-hidden"><div class="flex-grow">${slots.default ? slots.default({}) : ``}</div></section>`;
});
export {
  Layout as default
};

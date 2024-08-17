import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { s as settings } from "../../../chunks/settings.js";
import "../../../chunks/client.js";
import { b as base } from "../../../chunks/paths.js";
import { c as changeDetails, u as user } from "../../../chunks/stores.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_changeDetails;
  let $$unsubscribe_user;
  $$unsubscribe_changeDetails = subscribe(changeDetails, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_changeDetails();
  $$unsubscribe_user();
  return `<nav class="flex md:justify-between justify-center md:mt-0 mt-4 py-4"><div class="md:flex hidden items-center md:text-2xl text-lg font-bold gap-4"><img src="${escape(base, true) + "/assets/" + escape(settings.club.logo, true)}" alt="club Logo" class="md:w-14 w-10"> <span>${escape(settings.club.name)}</span></div> <div class="flex md:gap-12 gap-4 items-center md:text-xl text-sm font-semibold"><a href="${escape(base, true) + "/"}" data-svelte-h="svelte-v6s6cu"><div>Home</div></a> <button data-svelte-h="svelte-1y9sfot">Details</button> <button data-svelte-h="svelte-alvphk">Logout</button></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col w-[90%] min-h-screen mx-auto">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <section class="flex-grow">${slots.default ? slots.default({}) : ``}</section></main>`;
});
export {
  Layout as default
};

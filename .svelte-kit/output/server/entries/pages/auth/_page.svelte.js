import { c as create_ssr_component, a as subscribe, e as escape, h as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { u as user } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let action = "login";
  let email = "";
  let password = "";
  $$unsubscribe_user();
  return `<section class="flex items-center justify-center w-full min-h-screen p-6 md:p-0"><div class="w-[30rem] border-[1px] rounded-lg bg-background-darker p-4"><span class="text-center w-full flex justify-center text-2xl font-semibold">${escape(action.charAt(0).toUpperCase() + action.slice(1))}</span> <form class="flex flex-col gap-4">${``} <div class="flex flex-col space-y-2"><label for="email" class="text-base" data-svelte-h="svelte-norb96">Email</label> <input type="email" name="email" placeholder="Enter your email" class="p-1 px-2 rounded-lg bg-background border-2 border-background-lighter focus:border-background-lighter"${add_attribute("value", email, 0)}></div> <div class="flex flex-col space-y-2"><label for="password" class="text-base" data-svelte-h="svelte-7rn942">Password</label> <input type="password" name="password" placeholder="Enter your password" class="p-1 px-2 rounded-lg bg-background border-2 border-background-lighter focus:border-background-lighter"${add_attribute("value", password, 0)}></div></form> <div class="flex justify-between mt-2 opacity-50"><button data-svelte-h="svelte-umkjlf">login</button> <button data-svelte-h="svelte-1dkbp0p">signup</button></div> <div class="mt-4"><button class="w-full text-center p-2 rounded-lg bg-primary bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 border-background-lighter text-lg font-semibold">${escape(action)}</button></div></div></section>`;
});
export {
  Page as default
};

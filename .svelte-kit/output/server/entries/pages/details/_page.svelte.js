import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { c as changeDetails, u as user } from "../../../chunks/stores.js";
import { s as settings } from "../../../chunks/settings.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_changeDetails;
  let $$unsubscribe_user;
  $$unsubscribe_changeDetails = subscribe(changeDetails, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  settings.club.departments.map((department) => department.name);
  $$unsubscribe_changeDetails();
  $$unsubscribe_user();
  return `${`<section class="h-screen w-screen absolute top-0 left-0 z-10 bg-background"></section>`}`;
});
export {
  Page as default
};

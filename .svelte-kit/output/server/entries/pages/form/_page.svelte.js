import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { c as changeDetails, u as user, s as submitted } from "../../../chunks/stores.js";
var Departments = /* @__PURE__ */ ((Departments2) => {
  Departments2["TECHNICAL"] = "TECHNICAL";
  Departments2["DESIGN"] = "DESIGN";
  Departments2["MANAGEMENT"] = "MANAGEMENT";
  Departments2["SMC"] = "SMC";
  return Departments2;
})(Departments || {});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_changeDetails;
  let $$unsubscribe_user;
  let $$unsubscribe_submitted;
  $$unsubscribe_changeDetails = subscribe(changeDetails, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_submitted = subscribe(submitted, (value) => value);
  ({
    Technical: Departments.TECHNICAL,
    "HR and Management": Departments.MANAGEMENT,
    "UI/UX and Design": Departments.DESIGN,
    "Social Media and Content": Departments.SMC
  });
  $$unsubscribe_changeDetails();
  $$unsubscribe_user();
  $$unsubscribe_submitted();
  return `${`<section class="h-screen w-screen fixed top-0 left-0 z-10 bg-background"></section>`}`;
});
export {
  Page as default
};

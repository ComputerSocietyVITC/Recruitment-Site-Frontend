import { c as create_ssr_component, e as escape, b as add_styles, d as merge_ssr_styles, v as validate_component, f as each } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { b as base } from "../../chunks/paths.js";
import { s as settings } from "../../chunks/settings.js";
const css$2 = {
  code: "#splash-text.svelte-1e2h0kq{background-image:url('/giphy.gif');background-size:cover;background-clip:text;-webkit-background-clip:text;color:transparent}",
  map: null
};
const Splash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="flex md:flex-row flex-col md:gap-20 gap-8 items-center"><section class="md:w-[50%]"><div class="flex flex-col gap-4 md:text-left text-center"><span class="font-header md:text-8xl text-6xl font-extrabold tracking-wider svelte-1e2h0kq" id="splash-text" data-svelte-h="svelte-1ib95se">IEEE <br> COMPUTER <br> SOCIETY</span> <span class="text-lg" data-svelte-h="svelte-10ygdx4">An active club that plays a key role in shaping the college&#39;s infrastructure by supporting
				major events like TechnoVIT, Vibrance, and Voyage. Get hands-on experience in building
				products from scratch, with regular workshops, seminars, and project showcases to help you
				grow.</span> <div class="flex md:flex-row flex-col gap-4 items-center md:gap-6 md:text-3xl text-2xl"><span data-svelte-h="svelte-vsscxs">so what are you waiting for?</span> <button class="md:bg-foreground text-background bg-primary py-2 px-8 rounded-xl font-semibold text-xl hover:bg-primary transition-all duration-300" data-svelte-h="svelte-107ritu">Join Us</button></div></div></section> <section class="flex flex-col gap-6 md:w-[50%]" data-svelte-h="svelte-hqm2or"><div class="flex justify-around md:-translate-x-24 -translate-x-4 md:gap-0 gap-4"><div><img src="${escape(base, true) + "/splash/gif1.gif"}" alt="gif1" class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-purple-400"></div> <div><img src="${escape(base, true) + "/splash/gif2.gif"}" alt="gif2" class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-green-400"></div></div> <div class="flex justify-around md:translate-x-12 translate-x-4 md:gap-0 gap-4"><div><img src="${escape(base, true) + "/splash/gif3.gif"}" alt="gif3" class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-orange-400"></div> <div><img src="${escape(base, true) + "/splash/gif4.gif"}" alt="gif4" class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-blue-400"></div></div> <div class="flex justify-around md:-translate-x-12 -translate-x-4 md:gap-0 gap-4"><div><img src="${escape(base, true) + "/splash/gif5.gif"}" alt="gif5" class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-cyan-300"></div> <div><img src="${escape(base, true) + "/splash/gif6.gif"}" alt="gif6" class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-yellow-400"></div></div></section> </section>`;
});
const css$1 = {
  code: '.marquee-container.svelte-11dmb27.svelte-11dmb27{display:flex;width:100%;overflow-x:hidden;flex-direction:row;position:relative}.marquee-container.svelte-11dmb27:hover .marquee.svelte-11dmb27{animation-play-state:var(--pause-on-hover)}.marquee-container.svelte-11dmb27:active .marquee.svelte-11dmb27{animation-play-state:var(--pause-on-click)}.marquee.svelte-11dmb27.svelte-11dmb27{flex:0 0 auto;min-width:100%;z-index:1;display:flex;flex-direction:row;align-items:center;gap:var(--gap, 0);animation:svelte-11dmb27-scroll var(--duration) linear infinite;animation-play-state:var(--play);animation-direction:var(--direction);padding-right:var(--gap, 0)}@keyframes svelte-11dmb27-scroll{0%{transform:translateX(0%)}100%{transform:translateX(-100%)}}.initial-child-container.svelte-11dmb27.svelte-11dmb27{flex:0 0 auto;display:flex;min-width:auto;flex-direction:row}.gradient.svelte-11dmb27.svelte-11dmb27::after,.gradient.svelte-11dmb27.svelte-11dmb27::before{background:linear-gradient(\n			to right,\n			var(--gradientColor, white),\n			transparent\n		);content:"";height:100%;position:absolute;width:var(--gradientWidth, 10%);z-index:2}.gradient.svelte-11dmb27.svelte-11dmb27::before{left:0;top:0}.gradient.svelte-11dmb27.svelte-11dmb27::after{right:0;top:0;transform:rotateZ(180deg)}',
  map: null
};
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let duration;
  let { style = "" } = $$props;
  let { pauseOnHover = false } = $$props;
  let { pauseOnClick = false } = $$props;
  let { direction = "left" } = $$props;
  let { speed = 100 } = $$props;
  let { play = true } = $$props;
  let { gradient = false } = $$props;
  let { class: className = "" } = $$props;
  let { gap = "0px" } = $$props;
  let marqueeWidth;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.pauseOnHover === void 0 && $$bindings.pauseOnHover && pauseOnHover !== void 0)
    $$bindings.pauseOnHover(pauseOnHover);
  if ($$props.pauseOnClick === void 0 && $$bindings.pauseOnClick && pauseOnClick !== void 0)
    $$bindings.pauseOnClick(pauseOnClick);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0)
    $$bindings.play(play);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  $$result.css.add(css$1);
  duration = marqueeWidth / speed;
  return `<div${add_styles(merge_ssr_styles(escape(style, true), {
    "--gap": gap,
    "--play": play,
    "--direction": direction === "left" ? "normal" : "reverse",
    "--duration": duration + "s",
    "--pause-on-hover": pauseOnHover ? "paused" : "running",
    "--pause-on-click": pauseOnClick ? "paused" : "running"
  }))} class="${"marquee-container " + escape(className, true) + " svelte-11dmb27"}">${gradient ? `<div class="gradient svelte-11dmb27" data-testid="marquee-gradient"></div>` : ``} <div class="marquee svelte-11dmb27" data-testid="marquee-slot">${slots.default ? slots.default({}) : ``}</div> <div class="marquee svelte-11dmb27" data-testid="marquee-slot">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const Marquee_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { direction = "left" } = $$props;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  return `${validate_component(Marquee, "Marquee").$$render(
    $$result,
    {
      class: "bg-foreground text-background font-semibold text-lg",
      gap: "1rem",
      gradient: true,
      direction,
      speed: 40
    },
    {},
    {
      default: () => {
        return `${each({ length: 6 }, (_) => {
          return `<span data-svelte-h="svelte-7o1r4m">we</span> <span data-svelte-h="svelte-y3zt5y">build</span> <span data-svelte-h="svelte-kc8t3s">what</span> <span data-svelte-h="svelte-14flwdr">you</span> <span data-svelte-h="svelte-8s0kh3">use</span> <span data-svelte-h="svelte-1e2i4m">|</span>`;
        })}`;
      }
    }
  )}`;
});
const css = {
  code: "@keyframes svelte-1h0ht4b-moveTop{0%{transform:translateY(0px)}25%{transform:translateX(20px)}75%{transform:translateX(-20px)}100%{transform:translateY(0px)}}@keyframes svelte-1h0ht4b-moveBottom{0%{transform:translateY(0px)}25%{transform:translateX(-20px)}75%{transform:translateX(20px)}100%{transform:translateY(0px)}}.item-top.svelte-1h0ht4b{animation:svelte-1h0ht4b-moveTop 3s infinite}.item-bottom.svelte-1h0ht4b{animation:svelte-1h0ht4b-moveBottom 3s infinite}",
  map: null
};
let displayText = "departments";
let cols = 20;
const Department = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows = 10;
  $$result.css.add(css);
  return `<section class="relative flex flex-col items-center justify-center"><section class="flex flex-col items-center justify-center opacity-10">${each({ length: rows }, (_) => {
    return `<div class="item-top flex gap-3 text-lg h-fit transition-all duration-300 svelte-1h0ht4b">${each({ length: cols }, (_2) => {
      return `<span>${escape(displayText)}</span>`;
    })}</div> <div class="item-bottom flex gap-3 text-lg h-fit svelte-1h0ht4b">${each({ length: cols }, (_2) => {
      return `<span>${escape(displayText)}</span>`;
    })} </div>`;
  })}</section> <section class="absolute top-2 flex flex-col w-full items-center gap-12"><span class="font-header text-5xl font-bold p-4" data-svelte-h="svelte-hq3dj6">Departments</span> <section class="flex md:flex-row flex-col gap-12 text-foreground">${each(settings.club.departments, (department) => {
    return `<div class="gap-4 bg-background w-80 h-96 rounded-xl flex flex-col items-center p-4"><div class="flex items-center gap-4 w-full"><img src="${escape(base, true) + "/assets/departments/" + escape(department.icon, true)}" alt="icon" class="w-14 h-14"> <span class="text-xl font-header font-semibold">${escape(department.name)}</span></div> <span class="text-lg flex-grow">${escape(department.description)}</span> <div class="flex gap-4 items-center justify-end w-full text-2xl"><span>${escape(department.head)}</span></div> </div>`;
  })}</section></section> </section>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="bg-background flex md:justify-between justify-center items-center md:mt-0 md:py-8 py-8"><div class="flex gap-4 items-center md:text-4xl text-2xl font-semibold"><img src="${escape(base, true) + "/assets/" + escape(settings.club.logo, true)}" alt="club Logo" class="md:w-14 w-10"> <span class="-translate-y-0.5">${escape(settings.club.name)}</span></div> <button class="md:flex items-center justify-center hidden bg-foreground text-background w-[10%] rounded-xl text-xl font-semibold py-4 hover:bg-primary transition-colors ease-in-out duration-300" data-svelte-h="svelte-1hnrbdb">Join Us</button></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="my-5 flex justify-between items-center gap-4" data-svelte-h="svelte-1lzyxn"><span>Made with blood, sweat and tears by <strong><a href="https://adityajyoti.com" target="_blank">Aditya Jyoti</a></strong></span> <span>Powered by © IEEE Computer Society, 2024-25</span></footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col"> ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <section class="flex flex-col justify-around md:gap-24 gap-12">${validate_component(Splash, "Splash").$$render($$result, {}, {}, {})} <section class="relative"><section class="md:skew-y-2 skew-y-[8deg] border-4 border-background absolute w-full">${validate_component(Marquee_1, "Marquee").$$render($$result, { direction: "left" }, {}, {})}</section> <section class="md:-skew-y-2 -skew-y-[8deg] border-4 border-background absolute w-full">${validate_component(Marquee_1, "Marquee").$$render($$result, { direction: "right" }, {}, {})}</section></section></section>  <section class="md:mt-36 mt-20 flex md:flex-row flex-col md:gap-24 gap-8"><section class="md:flex hidden bg-background p-2 border-foreground border-4 rounded-3xl w-full" data-svelte-h="svelte-8crybe"><img src="${escape(base, true) + "/joinus5s.gif"}" alt="joinus" class="rounded-xl"></section> <section class="flex flex-col gap-4 md:w-[75%]"><span class="font-header md:text-5xl text-4xl font-bold" data-svelte-h="svelte-1t7qcmh">But Why Join Us?</span> <div class="text-xl w-fit flex flex-col gap-2" data-svelte-h="svelte-6e7pmz"><span>IEEE Computer Society is one of VIT Chennai&#39;s active and recognized technical clubs. We
					work on building and contributing to our college&#39;s infrastructure, powering our mega
					events like <strong>TechnoVIT</strong>, <strong>Vibrance</strong> and now most recently
					<strong>Voyage</strong>.</span> <span>Join Computer Society if you want to learn while contributing to a community that actually
					validates your contributions be it in the technical or non technical domain.</span> <span>We will teach you the skills that are needed to build and deliver products from scratch
					via our subsidiary organization <strong>Builder&#39;s Hut</strong> where we encourage project based
					learning by holding monthly workshops, seminars and project showcase sessions.</span></div> <button class="md:bg-foreground text-background bg-primary rounded-xl font-bold hover:bg-primary transition-colors duration-300 text-lg" data-svelte-h="svelte-19nr9bp">Join Us</button></section> <section class="md:hidden bg-background p-2 border-foreground border-4 rounded-3xl w-full" data-svelte-h="svelte-6q7hkj"><img src="${escape(base, true) + "/joinus5s.gif"}" alt="joinus" class="rounded-xl"></section></section>  <section class="mt-12">${validate_component(Department, "Department").$$render($$result, {}, {}, {})}</section> <section>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section></main>`;
});
export {
  Page as default
};

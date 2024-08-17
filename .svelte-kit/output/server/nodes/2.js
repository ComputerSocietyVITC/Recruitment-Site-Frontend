

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/details/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C9_UNmU3.js","_app/immutable/chunks/scheduler.DXBmyN-9.js","_app/immutable/chunks/index.BhLLkuSo.js"];
export const stylesheets = [];
export const fonts = [];

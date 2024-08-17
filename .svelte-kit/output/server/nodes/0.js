import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.wUvEhPjU.js","_app/immutable/chunks/scheduler.DXBmyN-9.js","_app/immutable/chunks/index.BhLLkuSo.js","_app/immutable/chunks/stores.iNRU4pdV.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.CwYRPOBw.js"];
export const stylesheets = ["_app/immutable/assets/0.DNq-jibU.css"];
export const fonts = [];

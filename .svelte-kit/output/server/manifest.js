export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/departments/design.svg","assets/departments/management.svg","assets/departments/social-media.svg","assets/departments/technical.svg","assets/departments/ui-ux.svg","assets/logo.webp","default-user.jpg","giphy.gif","joinus.gif","joinus5s.gif","splash/gif1.gif","splash/gif2.gif","splash/gif3.gif","splash/gif4.gif","splash/gif5.gif","splash/gif6.gif"]),
	mimeTypes: {".svg":"image/svg+xml",".webp":"image/webp",".jpg":"image/jpeg",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.C56xawle.js","app":"_app/immutable/entry/app.1EzUp_NF.js","imports":["_app/immutable/entry/start.C56xawle.js","_app/immutable/chunks/entry.D69i41It.js","_app/immutable/chunks/scheduler.DXBmyN-9.js","_app/immutable/chunks/index.CwYRPOBw.js","_app/immutable/entry/app.1EzUp_NF.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DXBmyN-9.js","_app/immutable/chunks/index.BhLLkuSo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

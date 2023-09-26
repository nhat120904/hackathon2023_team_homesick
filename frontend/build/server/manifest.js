const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","reset.css","sys.svg","user.svg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.c88932c7.js","app":"_app/immutable/entry/app.f38451ef.js","imports":["_app/immutable/entry/start.c88932c7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.045242e0.js","_app/immutable/entry/app.f38451ef.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f835b50b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-35037f7c.js')),
			__memo(() => import('./chunks/1-64f8318a.js')),
			__memo(() => import('./chunks/2-3049e8a5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["autodashalt.png","bi.png","demigirl.png","enby girl alt.png","enby girl.png","enby.png","favicon.png","homeportal.png","icon.png","logo2.png","logo3.png","queerplatonic.png","test3.png","trans.png","transfem.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f2d6a28a.js","imports":["_app/immutable/entry/start.f2d6a28a.js","_app/immutable/chunks/index.b926dca2.js","_app/immutable/chunks/singletons.1be8669c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1a28acec.js","imports":["_app/immutable/entry/app.1a28acec.js","_app/immutable/chunks/index.b926dca2.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js'),
			() => import('../output/server/nodes/21.js'),
			() => import('../output/server/nodes/22.js'),
			() => import('../output/server/nodes/23.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/app/mip",
				pattern: /^\/app\/mip\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/app/mip/[...path]",
				pattern: /^\/app\/mip(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/app/schedule",
				pattern: /^\/app\/schedule\/?$/,
				params: [],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/app/schedule/create",
				pattern: /^\/app\/schedule\/create\/?$/,
				params: [],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/app/schedule/events/[id]",
				pattern: /^\/app\/schedule\/events\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/app/settings",
				pattern: /^\/app\/settings\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/dragon",
				pattern: /^\/dragon\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/dragon/gallery",
				pattern: /^\/dragon\/gallery\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/dragon/posts",
				pattern: /^\/dragon\/posts\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/entry",
				pattern: /^\/entry\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/homeportal",
				pattern: /^\/homeportal\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/moaka",
				pattern: /^\/moaka\/?$/,
				params: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/posts/test",
				pattern: /^\/posts\/test\/?$/,
				params: [],
				page: { layouts: [0,7], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/testroute",
				pattern: /^\/testroute\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 23 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

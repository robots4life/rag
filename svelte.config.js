// import adapter from '@sveltejs/adapter-auto';

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter()
		//
		// adapter
		// https://github.com/sveltejs/kit/tree/master/packages/adapter-static
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build'
			// fallback: null,
			// precompress: false
		}),
		//
		// prerender
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			//
			default: true
			// contact index.js post request : Cannot prerender pages that have endpoints with mutative methods
			// so turning off for now
		},
		//
		// See https://kit.svelte.dev/docs/configuration#methodoverride
		//
		methodOverride: {
			allowed: ['PUT', 'DELETE']
		}
	}
};

export default config;

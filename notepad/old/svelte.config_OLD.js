// import adapter from '@sveltejs/adapter-auto';

// import adapter from '@sveltejs/adapter-node';

import adapter from '@sveltejs/adapter-static';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Adapter Auto
		// @sveltejs/adapter-auto
		// adapter: adapter(),

		// Adapter Node start
		// https://github.com/sveltejs/kit/tree/master/packages/adapter-node
		// adapter: adapter({ out: 'build' }),
		// Adapter Node end

		// Adapter Static start
		// https://github.com/sveltejs/kit/tree/master/packages/adapter-static
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build'
			// fallback: null,
			// precompress: false
		}),
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
		},

		// Adapter Static end
		vite: {
			server: {
				host: '0.0.0.0',
				port: 3000,
				strictPort: true,
				hmr: {
					clientPort: 443
				}
			},
			define: {
				// env-cmd https://blog.hdks.org/Environment-Variables-in-SvelteKit-and-Vercel/
				'process.env': process.env
			},
			resolve: {
				alias: {
					$root: path.resolve('./src')
				}
			}
		}
	}
};

export default config;
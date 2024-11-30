// import adapterStatic from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapterStatic({
//       pages: 'buildss',
//       assets: 'buildss',
//       fallback: undefined,
//       precompress: false,
//       strict: true
//     })
//   }
// };

// export default config;

import adapter from 'amplify-adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

              
/** @type {import('@sveltejs/kit').Config} */
const config = {
        // Consult https://kit.svelte.dev/docs/integrations#preprocessors
        // for more information about preprocessors
        preprocess: vitePreprocess(),

        kit: {
                // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
                // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
                // See https://kit.svelte.dev/docs/adapters for more information about adapters.
                adapter: adapter()
        }
};

export default config;

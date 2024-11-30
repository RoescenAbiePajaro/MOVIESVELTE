import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic({
      pages: 'buildss',
      assets: 'buildss',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};

export default config;

import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic({
      pages: 'public',
      assets: 'public',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};

export default config;

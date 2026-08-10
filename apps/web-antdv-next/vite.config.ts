import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        allowedHosts: true,
        proxy: {
          '/admin-api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/admin-api/, ''),
            // mock代理目标地址
            target:
              'https://tracked-customize-litigation-sheets.trycloudflare.com/admin-api',
            ws: true,
          },
        },
      },
    },
  };
});

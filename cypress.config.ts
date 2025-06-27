import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      baseUrl: 'https://staging--katsu-web.netlify.app',
      viewportHeight: 768,
      viewportWidth: 1366,
      pageLoadTimeout: 17000,
      requestTimeout: 15000
  
  },
});

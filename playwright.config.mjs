import { defineConfig } from 'playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    browserName: 'chromium',
    headless: true,
  },
  webServer: {
    command: 'npx serve . -p 8080 --no-request-logging',
    port: 8080,
    timeout: 10000,
    reuseExistingServer: true,
  },
});

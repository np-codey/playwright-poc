import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [ ['html'], ['list'] ],

  use: {
    headless: true,
    baseURL: process.env.BASE_URL,
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true
    }
  },

  projects: [
    {
      name: 'main',
      grepInvert: /@example/
    },
    {
      name: 'api',
      grep: /@api/,
    },
  ],

  webServer: {
    command: `cd ${ process.env.APP_LOCATION } && yarn dev`,
    url: process.env.BASE_URL,
    reuseExistingServer: true,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});

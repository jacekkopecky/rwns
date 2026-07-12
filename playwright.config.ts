import { defineConfig, devices } from '@playwright/test';

const isCI = Boolean(process.env.CI);
const isMultiCPU = Boolean(process.env.TEST_WITH_MULTIPLE_WORKERS);

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts/,
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isMultiCPU ? undefined! : 1,
  reporter: 'list',
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  use: {
    baseURL: 'http://localhost:5173/rwns/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: isCI ? undefined : 'chrome',
        viewport: { width: 432, height: 960 },
        deviceScaleFactor: 2.5,
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: 'npm start',
    url: 'http://localhost:5173/rwns/',
    reuseExistingServer: !process.env.CI,
  },
});

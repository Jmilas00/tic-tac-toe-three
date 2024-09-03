import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    reporters: ['default', 'junit'],
    outputFile: 'test-results.xml',
    junitReporter: {
      suiteNameTemplate: '{file}',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
    },
  },
});

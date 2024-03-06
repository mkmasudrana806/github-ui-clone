// import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";

// export default defineConfig({
//   plugins: [reactRefresh()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "src/assets/styles/variables";`, // Import global variables if needed
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

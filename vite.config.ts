import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: "supabase", test: /node_modules[\\/]@supabase/ },
            { name: "vendor", test: /node_modules/ },
            { name: "curriculum-sprint1", test: /src\/data\/days\/day-0[1-5]\.ts/ },
            { name: "curriculum-sprint2", test: /src\/data\/days\/day-(?:0[6-9]|10)\.ts/ },
            { name: "curriculum-sprint3", test: /src\/data\/days\/day-1[1-5]\.ts/ },
            { name: "curriculum-core", test: /src\/data\/(?:foundations|vocabulary)\// },
          ],
        },
      },
    },
  },
});

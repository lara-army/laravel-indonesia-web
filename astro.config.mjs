// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
      }),
    ],
  },

  integrations: [react()],
});

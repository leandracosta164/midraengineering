import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({

  site: "https://www.midraengineering.com",

  trailingSlash: "never",

  compressHTML: true,

  integrations: [

    sitemap()

  ],

  image: {

    service: {

      entrypoint: "astro/assets/services/sharp"

    }

  },

  vite: {

    build: {

      cssMinify: true,

      assetsInlineLimit: 4096

    }

  }

});
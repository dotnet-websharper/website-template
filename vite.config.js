// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: '/website-template/',
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                download: resolve(__dirname, "download.html"),
                support: resolve(__dirname, "support.html"),
                signin: resolve(__dirname, "signin.html"),
                register: resolve(__dirname, "register.html"),
                checkout: resolve(__dirname, "checkout.html"),
                dslAi: resolve(__dirname, "dsl-ai.html")
            },
        },
    },
});

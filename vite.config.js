// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist",
        base: '/website-template/',
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                support: resolve(__dirname, "pages/support.html"),
                signin: resolve(__dirname, "pages/signin.html"),
                register: resolve(__dirname, "pages/register.html"),
                checkout: resolve(__dirname, "pages/checkout.html")
            },
        },
    },
});

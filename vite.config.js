// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                support: resolve(__dirname, "support.html"),
                signin: resolve(__dirname, "signin.html"),
                register: resolve(__dirname, "register.html"),
                checkout: resolve(__dirname, "checkout.html")
            },
        },
    },
});

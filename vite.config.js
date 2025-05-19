import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { lingui } from "@lingui/vite-plugin";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "build",
    },
    plugins: [
        react({
            plugins: [["@lingui/swc-plugin", {}]],
        }),
        lingui(),
        svgr({
            include: "**/*.svg",
        }),
        tailwindcss(),
    ],
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
});

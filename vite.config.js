import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr({
        include: "**/*.svg",
    })],
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
});

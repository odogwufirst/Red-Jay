import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import postcss, { plugin } from "postcss";

export default defineConfig({
    plugin: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        }
    }
})
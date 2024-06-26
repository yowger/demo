import { resolve } from "path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// @ts-ignore
const rootDir = resolve(__dirname, "./src")

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": rootDir,
        },
    },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // If using React

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // ✅ Force Vite to use port 3000
  },
});

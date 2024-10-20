import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import image from "@rollup/plugin-image"; // Import correct

export default defineConfig({
  plugins: [react(), image()], // Plugin ajouté à la liste
  // ... reste de votre configuration
});

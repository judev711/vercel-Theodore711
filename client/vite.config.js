import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "/src/assets/images/Shirt1.png",
        "/src/assets/images/Shirt1.png",
        "/src/assets/images/Shirt1.png",
        "/src/assets/images/Logo.png",
        '/src/assets/images/Women1.jpg',
        "/src/assets/images/Women2.jpg",
        "/src/assets/images/Women3.jpg",
        "/src/assets/images/Women4.jpg",
        "/src/assets/images/Women5.jpg",
      ], // Ajoutez cette ligne
    },
  },
});

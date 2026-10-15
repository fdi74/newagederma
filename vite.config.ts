import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { SEO_ROUTES, canonicalFor } from "./src/seoRoutes";

// Depois do build, cria um HTML próprio para cada página (ex.: lift-diamond.html),
// com título, descrição e canonical da própria página — é isso que o Google lê.
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const seoPages = () => ({
  name: "seo-pages",
  apply: "build" as const,
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    const base = fs.readFileSync(path.join(dist, "index.html"), "utf8");
    for (const [route, seo] of Object.entries(SEO_ROUTES)) {
      if (route === "/") continue;
      const url = canonicalFor(route);
      const t = esc(seo.title);
      const d = esc(seo.description);
      const html = base
        .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
      fs.writeFileSync(path.join(dist, `${route.slice(1)}.html`), html);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), seoPages()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

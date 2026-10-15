import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO_ROUTES, canonicalFor } from "@/seoRoutes";

const setAttr = (selector: string, attr: string, value: string) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

// Mantém título, descrição e canonical corretos a cada troca de página.
const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
    const seo = SEO_ROUTES[path];
    if (!seo) return;
    const url = canonicalFor(path);
    document.title = seo.title;
    setAttr('meta[name="description"]', "content", seo.description);
    setAttr('meta[property="og:title"]', "content", seo.title);
    setAttr('meta[property="og:description"]', "content", seo.description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('link[rel="canonical"]', "href", url);
  }, [pathname]);

  return null;
};

export default RouteMeta;

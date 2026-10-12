import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// A home carrega junto (é a página principal); as demais só quando o visitante navega até elas.
const Contato = lazy(() => import("./pages/Contato"));
const LiftDiamond = lazy(() => import("./pages/LiftDiamond"));
const Curitiba = lazy(() => import("./pages/Curitiba"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/lift-diamond" element={<LiftDiamond />} />
        <Route path="/curitiba" element={<Curitiba />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;

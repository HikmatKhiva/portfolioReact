import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Loading } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-lazy-load-image-component/src/effects/blur.css"; /* lazy load css */
import 'react-tooltip/dist/react-tooltip.css'
const LazyApp = React.lazy(() => import("./App"));
const queryClient = new QueryClient();
const app = document.getElementById("root");
const root = createRoot(app);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<Loading />}>
        <LazyApp />
      </React.Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);

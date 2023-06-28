import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Loading } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-lazy-load-image-component/src/effects/blur.css"; /* lazy load css */
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

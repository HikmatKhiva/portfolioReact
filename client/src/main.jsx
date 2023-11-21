import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "./loadings/Loading";
// CSS
import "react-lazy-load-image-component/src/effects/blur.css"; /* lazy load css */
import "./index.css";
import { Provider } from "react-redux";
import "react-tooltip/dist/react-tooltip.css";
import { store } from "./redux/store/app";
const LazyApp = React.lazy(() => import("./App"));
const queryClient = new QueryClient();
const app = document.getElementById("root");
const root = createRoot(app);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<Loading />}>
        <Provider store={store}>
          <LazyApp />
        </Provider>
      </React.Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
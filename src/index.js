import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Context } from "./features/context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <App />
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
);

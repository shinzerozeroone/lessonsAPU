import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import QlrWork from "./components/QLRwork/Qlrwork.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/KnowledgeBase">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work-with-qlr" element={<QlrWork />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs.jsx";
import QlrWork from "./components/QLRwork/Qlrwork.jsx";
import AllLections from "./components/AllLections/AllLections.jsx";
import Lections from "./components/Lections/Lections.jsx";
import QGISLectionPages from "./components/QGISLectionPages/QGISLectionPages.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/KnowledgeBase">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work-with-qlr" element={<QlrWork />} />
        <Route path="/all" element={<AllLections />}></Route>
        <Route path="/LectionsQGIS" element={<Lections />}></Route>
        <Route path="/LectionsQGIS/:id" element={<QGISLectionPages />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

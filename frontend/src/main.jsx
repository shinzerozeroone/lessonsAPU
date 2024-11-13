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
import GenPresentaion from "./components/GenPresentation/GenPresentation.jsx";
import MainInteface from "./components/GenPresentsLessons/MainInterface.jsx";
import MainTab from "./components/GenPresentsLessons/MainTab.jsx";

const numberPage = [
  { id: 0, name: "Вводная лекция" },
  { id: 1, name: "Лекция 1" },
  { id: 2, name: "Лекция 2" },
  { id: 3, name: "Лекция 4" },
  { id: 4, name: "Лекция 5" },
  { id: 5, name: "Лекция 6" },
  { id: 6, name: "Лекция 7" },
  { id: 7, name: "Лекция 8" },
  { id: 8, name: "Лекция 9" },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/KnowledgeBase">
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/work-with-qlr" element={<QlrWork />} />
        <Route path="/all" element={<AllLections />}></Route>
        <Route
          path="/LectionsQGIS"
          element={<Lections numberPage={numberPage} />}
        ></Route>
        {numberPage.map((page) => (
          <Route
            key={page.id}
            path={`/LectionsQGIS/${page.id}`}
            element={<QGISLectionPages id={page.id} numberPage={numberPage} />}
          ></Route>
        ))}

        <Route path="/GenPresentations" element={<GenPresentaion />}></Route>
        <Route
          path="/GenPresentations/MainInterface"
          element={<MainInteface />}
        ></Route>

        <Route
          path="/GenPresentations/MainInterface/MainTab"
          element={<MainTab />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

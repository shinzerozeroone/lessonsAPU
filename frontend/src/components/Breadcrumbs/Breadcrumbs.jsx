import "./Breadcrumbs.css";

import { Link, useLocation } from "react-router-dom";
import React from "react";
export default function Breadcrumb({ numberPage, Instrs }) {
  const location = useLocation();

  console.log(Instrs);

  return (
    <div className="breadcrumbs">
      <ul>
        <Link to={"/all"} className={`${location.pathname === "/all"}`}>
          Каталог лекций
        </Link>
        {location.pathname.includes("/work-with-qlr") && (
          <>
            <span>➤</span>
            <Link
              to={"/work-with-qlr"}
              className={`${
                location.pathname === "/work-with-qlr" ? "active" : ""
              }`}
            >
              Работа с QLR
            </Link>
          </>
        )}

        {location.pathname.includes(`/GenPresentations`) && (
          <>
            <span>➤</span>
            <Link
              to={"/GenPresentations"}
              className={`${
                location.pathname === "/GenPresentations" ? "active" : ""
              }`}
            >
              Генератор презентаций
            </Link>
          </>
        )}

        {location.pathname.includes(`/GenPresentations/MainInterface`) && (
          <>
            <span>➤</span>
            <Link
              to={"/GenPresentations"}
              className={`${
                location.pathname === "/GenPresentations/MainInterface"
                  ? "active"
                  : ""
              }`}
            >
              Основной Экран
            </Link>
          </>
        )}

        {location.pathname.includes("/LectionsQGIS") && (
          <>
            <span>➤</span>
            <Link
              to={"/LectionsQGIS"}
              className={`${
                location.pathname === "/LectionsQGIS" ? "active" : ""
              }`}
            >
              Лекции QGIS
            </Link>
          </>
        )}

        {numberPage?.map(
          (page) =>
            location.pathname.includes(`/LectionsQGIS/${page.id}`) && (
              <React.Fragment key={page.id}>
                <span>➤</span>
                <Link
                  to={`/LectionsQGIS/${page.id}`}
                  className={`${
                    location.pathname.includes("/LectionsQGIS/") ? "active" : ""
                  }`}
                >
                  {page.name}
                </Link>
              </React.Fragment>
            )
        )}
      </ul>
    </div>
  );
}

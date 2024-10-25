import "./Breadcrumbs.css";

import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  console.log(location);
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
        {location.pathname.startsWith("/LectionsQGIS/1") && (
          <>
            <span>➤</span>
            <Link
              to="/LectionsQGIS"
              className={`${
                location.pathname.includes("/LectionsQGIS/") ? "active" : ""
              }`}
            >
              Хуета
            </Link>
          </>
        )}

        {location.pathname.startsWith("/LectionsQGIS/0") && (
          <>
            <span>➤</span>
            <Link
              to="/LectionsQGIS"
              className={`${
                location.pathname.includes("/LectionsQGIS/") ? "active" : ""
              }`}
            >
              пиздец
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}

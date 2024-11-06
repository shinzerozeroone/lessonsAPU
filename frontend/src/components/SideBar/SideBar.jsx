import "./SideBar.css";
import toHome from "../../assets/toHome.svg";
import qlrWork from "../../assets/qlr-work.svg";
import qgisLect from "../../assets/qgisLections.svg";
import genPresentSide from "../../assets/genPresentSide.svg";
import photoFixSide from "../../assets/photoFixSide.svg";

import { Link } from "react-router-dom";

import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={toHome} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={qlrWork} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={qgisLect} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={genPresentSide} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={photoFixSide} alt="" />
          </button>

          {isOpen && (
            <>
              <div className="expanded-menu">
                <Link to="/">
                  <div>
                    <p>Домашняя страница</p>
                  </div>
                </Link>
                <Link to="/work-with-qlr">
                  {" "}
                  <div>
                    <p>Работа с QLR</p>
                  </div>
                </Link>
                <Link to="/LectionsQGIS">
                  {" "}
                  <div>
                    <p>Лекции QGIS</p>
                  </div>
                </Link>

                <Link>
                  {" "}
                  <div>
                    <p>Генератор презентаций</p>
                  </div>
                </Link>

                <Link>
                  <div>
                    <p>Фотофиксация инструкции</p>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

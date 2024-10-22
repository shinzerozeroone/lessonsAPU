import qlrImage from "../../assets/qlr.svg";
import qgisImage from "../../assets/qgis.svg";
import genPresent from "../../assets/genPresent.svg";
import photoFix from "../../assets/photoFix.svg";

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./AllLections.css";

import { Link } from "react-router-dom";

export default function AllLections() {
  return (
    <>
      <Header></Header>
      <SideBar />
      <Breadcrumbs></Breadcrumbs>
      <div className="catalog-all-container">
        <div className="catalog-all-wrapper">
          <h3>Каталог лекций</h3>

          <div className="all-cards">
            <Link to="/work-with-qlr">
              {" "}
              <div className="carousel-item item1 all">
                <div className="carousel-image">
                  <img className="qlr" src={qlrImage} alt="Работа с QLR" />
                </div>
                <p>Работа с QLR</p>
                <ul>
                  <li>добавление пользовательской СК</li>
                  <li>добавление файлов аутентификации</li>
                  <li>подгрузка тематических QLR в проект QGIS</li>
                </ul>
              </div>
            </Link>

            <Link to="/LectionsQGIS">
              {" "}
              <div className="carousel-item item2 all">
                <div className="carousel-image">
                  <img className="qgis" src={qgisImage} alt="Лекции QGIS" />
                </div>
                <p>Лекции QGIS</p>
                <ul>
                  <li>
                    видеолекции для начинающих и опытных пользователей QGIS с
                    практическими заданиями для самопроверки
                  </li>
                </ul>
              </div>
            </Link>

            <Link>
              {" "}
              <div className="carousel-item item3 all">
                <div className="carousel-image">
                  <img
                    className="genPresent"
                    src={genPresent}
                    alt="Генератор презентаций"
                  />
                </div>
                <p>Генератор презентаций</p>
                <ul>
                  <li>
                    подробная инструкция по работе с программой “Генератор
                    презентаций”
                  </li>
                </ul>
              </div>
            </Link>

            <Link>
              <div className="carousel-item item4 all">
                <div className="carousel-image">
                  <img
                    className="photoFix"
                    src={photoFix}
                    alt="Инструкции Фотофиксации"
                  />
                </div>
                <p>Инструкции Фотофиксации</p>
                <ul>
                  <li>
                    подробная инструкция по работе с программой “Фотофиксация”
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import qlrImage from "../../assets/qlr.svg";
import qgisImage from "../../assets/qgis.svg";
import genPresent from "../../assets/genPresent.svg";
import photoFix from "../../assets/photoFix.svg";

import "./Qlrwork.css";

export default function QlrWork() {
  return (
    <>
      <Header />
      <SideBar />
      <Breadcrumbs />
      <div className="qlr-container">
        <div className="qlr-header">
          <div className="qlr-header-image">
            <img className="qlr-image" src={qlrImage} alt="Работа с QLR" />
          </div>

          <div className="qlr-header-description">
            <h3>Видеоинструкция по работе с QLR:</h3>
            <ul>
              <li>добавление пользовательской СК</li>
              <li>добавление файлов аутентификации</li>
              <li>подгрузка тематических QLR в проект QGIS </li>
            </ul>
          </div>
        </div>

        <div className="qlr-content"></div>
      </div>

      <Footer></Footer>
    </>
  );
}

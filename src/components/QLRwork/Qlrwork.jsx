import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import qlrImage from "../../assets/qlr.svg";

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

        <div className="qlr-content">
          <video controls>
            <source src="http://geoportal02/videos/qlr.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

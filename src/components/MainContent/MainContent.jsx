import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import qlrImage from "../../assets/qlr.svg";
import qgisImage from "../../assets/qgis.svg";
import genPresent from "../../assets/genPresent.svg";
import photoFix from "../../assets/photoFix.svg";
import "./MainContent.css";

import Carousel from "../Carousel/Carousel";

export default function MainContent() {
  return (
    <>
      <main>
        <div className="main-window">
          <p className="main-title">
            Информационный <br /> портал ГлавАПУ
          </p>

          <p className="main-description">
            На этом портале вы найдете все необходимое для эффективной работы с
            нашими внутренними сервисами.
          </p>

          <button type="button">Подробнее</button>
        </div>

        <div className="catalog-container">
          <p className="catalog-title">Каталог лекций</p>
          <a href="">Смотреть все</a>
          <br />
          <Carousel></Carousel>
        </div>
      </main>
    </>
  );
}

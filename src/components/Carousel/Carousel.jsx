import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import qlrImage from "../../assets/qlr.svg";
import qgisImage from "../../assets/qgis.svg";
import genPresent from "../../assets/genPresent.svg";
import photoFix from "../../assets/photoFix.svg";

import "./Carousel.css";

export default function Carousel() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = [
    <>
      <div className="carousel-item item1">
        <div className="carousel-image">
          <img className="qlr" src={qlrImage} alt="Работа с QLR" />
        </div>
        <p>Работа с QLR</p>
        <ul>
          <li>добавление пользовательской СК</li>
          <li>добавление файлов аутентификации</li>
          <li>подгрузка тематических QLR в проект QGIS</li>
        </ul>
        <button type="button">Узнать больше</button>
      </div>
    </>,
    <>
      <div className="carousel-item item2">
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
        <button type="button">Узнать больше</button>
      </div>
    </>,
    <>
      <div className="carousel-item item3">
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
            подробная инструкция по работе с программой “Генератор презентаций”
          </li>
        </ul>
        <button type="button">Узнать больше</button>
      </div>
    </>,
    <>
      <div className="carousel-item item4">
        <div className="carousel-image">
          <img
            className="photoFix"
            src={photoFix}
            alt="Инструкции Фотофиксации"
          />
        </div>
        <p>Инструкции Фотофиксации</p>
        <ul>
          <li>подробная инструкция по работе с программой “Фотофиксация”</li>
        </ul>
        <button type="button">Узнать больше</button>
      </div>
    </>,
  ];

  return (
    <>
      <AliceCarousel
        responsive={responsive}
        autoPlay={true}
        items={items}
        infinite
        autoPlayInterval={4000}
        controlsStrategy="alternate"
        animationDuration={2000}
        autoHeight={true}
      />
    </>
  );
}

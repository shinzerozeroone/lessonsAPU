import "react-alice-carousel/lib/alice-carousel.css";
import "./MainContent.css";

import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

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
          <Link to="/all">Смотреть все</Link>
          <br />
          <Carousel></Carousel>
        </div>
      </main>
    </>
  );
}

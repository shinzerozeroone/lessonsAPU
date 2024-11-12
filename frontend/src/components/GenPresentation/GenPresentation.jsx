import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";

import genPresent from "../../assets/genPresent.svg";
import orangeWarning from "../../assets/orangeWarning.svg";
import PresentationTheStart from "../../assets/PresentTheStart.svg";
import blueWarning from "../../assets/blueWarning.svg";
import interfaces from "../../assets/interfaces.svg";
import startWorking from "../../assets/startWorking.svg";
import instEdit from "../../assets/instOnEdit.svg";

import { Link } from "react-router-dom";

import "./GenPresentation.css";

export default function GenPresentaion() {
  const Instrs = [
    { id: 1, name: "Основной экран" },
    { id: 2, name: 'Владка "Главная"' },
    { id: 3, name: 'Вкладка "Настройки"' },
    { id: 4, name: 'Вкладка "Цвет"' },
    { id: 5, name: "Добавление выносок" },
  ];

  return (
    <>
      <Header />
      <SideBar />
      <Breadcrumb Instrs={Instrs} />

      <div className="gen-container">
        <div className="gen-header">
          <div className="gen-header-image">
            <img src={genPresent} alt="" className="gen-image" />
          </div>

          <div className="gen-header-description">
            <h3>Генератор презентаций</h3>
            <img src={orangeWarning} alt="" />
            <p>
              Данный функционал работает в тестовом режиме. В случае
              возникновения проблем, просьба сообщить.
            </p>
          </div>
        </div>

        <div className="gen-description-container">
          <div className="gen-description-main">
            <img src={PresentationTheStart} alt="" />
            <p>
              <h3>Генератор презентаций (ПО) - </h3>
              <br />
              это инструмент, позволяющий создавать слайды с отображением
              геопространственных данных, ускоряя процесс формирования исходных
              данных для анализа территории.
            </p>
            <img src={blueWarning} alt="" className="img-description-main" />
            <br />
            <p className="gen-description-main-warn">
              Доступ к данному сервису можно получить, написав заявку на {""}
              <span>helpdesk@glavapu.mos.ru</span>
              <br />
              <br />
              <strong>Важно, в теме письма указать,</strong> что необходимо
              установить версию Генератора презентаций для ПО.
              <br />
              <br />
              Прежде чем устанавливать Генератор презентаций, убедитесь, что у
              вас установлена актуальная версия QGIS (3.28.11)
            </p>
          </div>

          <div className="gen-description-section">
            <h4>ИНСТРУКЦИЯ</h4>
            <button>Скачать PDF</button>

            <div className="gen-description-blocks-section">
              <div className="first-block block-item">
                <h1>1</h1>
                <img src={interfaces} alt="" />
                <p>
                  Интерфейс программы и элементы управления
                  <br />
                  <span>
                    <Link to="/GenPresentations/MainInterface">Подробнее</Link>
                  </span>
                </p>
              </div>

              <div className="second-block block-item">
                <h1>2</h1>
                <img src={startWorking} alt="" />
                <p>
                  Начало работы с программой
                  <br />
                  <span>
                    <Link>Подробнее</Link>
                  </span>
                </p>
              </div>

              <div className="third-block block-item">
                <h1>3</h1>
                <img src={instEdit} alt="" />
                <p>
                  Инструкция по редактированию слайдов орто районов
                  <br />
                  <span>
                    <Link>Подробнее</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

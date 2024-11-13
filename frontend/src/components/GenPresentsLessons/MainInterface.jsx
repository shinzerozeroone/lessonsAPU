import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

import Interfaces from "../../assets/Interfaces.svg";
import right from "../../assets/right.svg";

import "./GenPresentsLessons.css";

import { Link } from "react-router-dom";

export default function MainInteface() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <SideBar />
      <div className="gen-lessons-header">
        <div className="gen-lessons-header-image">
          <img src={Interfaces} alt="" className="gen-lessons-image" />
          <h3>Интерфейс программы и элементы управления</h3>
        </div>
        <div className="gen-lessons-container">
          <div className="gen-lessons-header-description">
            <h3>Основной экран</h3>
            <div className="description-back">
              <button className="first-button-mainWin btn-item-interfaces">
                1
              </button>
              <button className="second-button-mainWin btn-item-interfaces">
                2
              </button>
              <button className="third-button-mainWin btn-item-interfaces">
                3
              </button>

              <div className="description-lesson-name">
                <p>1</p>
                <p>Вкладки программы</p>
              </div>
            </div>

            <p className="gen-lessons-instr">
              <span>1. Главная.</span> Список презентаций для генерации.
              Редактирование списка, выбор шаблона презентации. <br />
              <span>2. Настройки.</span> Настройки наборов слайдов презентации,
              подписей к объектам <br />
              <span>3. Цвет. </span>Настройки цветов для слайдов ПЗЗ.
            </p>
          </div>
        </div>
        <Link to="/GenPresentations/MainInterface/MainTab">
          <p className="next-slide">
            Вперёд <img src={right} alt="" />
          </p>
        </Link>
      </div>

      <Footer />
    </>
  );
}

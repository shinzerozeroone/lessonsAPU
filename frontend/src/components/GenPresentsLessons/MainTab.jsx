import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import ThoseInstrs from "./ThoseInstrs";

import Interfaces from "../../assets/Interfaces.svg";
import right from "../../assets/right.svg";
import finger from "../../assets/finger.svg";

import "./GenPresentsLessons.css";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainTab() {
  const [show, setShow] = useState(false);

  const toggleInstrs = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <Breadcrumb></Breadcrumb>
      <div className="gen-lessons-header">
        <div className="gen-lessons-header-image">
          <img src={Interfaces} alt="" className="gen-lessons-image" />
          <h3>Интерфейс программы и элементы управления</h3>
        </div>
        <div className="gen-lessons-container">
          <div className="gen-lessons-header-description">
            <h3>Вкладка "Главная"</h3>
            <div className="gen-lessons-header-image-reminder">
              <p>
                Наведи на номер, <br />
                чтобы посмотреть описание{" "}
              </p>
              <img src={finger} alt="" />
            </div>
            <div className="description-back-mainTab">
              <button className="first-button-mainTab btn-item-interfaces">
                1
              </button>

              <button className="second-button-mainTab btn-item-interfaces">
                2
              </button>

              <button className="third-button-mainTab btn-item-interfaces">
                3
              </button>

              <button className="fouth-button-mainTab btn-item-interfaces">
                4
              </button>

              <button className="fives-button-mainTab btn-item-interfaces">
                5
              </button>

              <button className="six-button-mainTab btn-item-interfaces">
                6
              </button>

              <button className="sevens-button-mainTab btn-item-interfaces">
                7
              </button>

              <button className="eights-button-mainTab btn-item-interfaces">
                8
              </button>

              <button className="nines-button-mainTab btn-item-interfaces">
                9
              </button>

              <button className="ten-button-mainTab btn-item-interfaces">
                10
              </button>

              <button className="eleven-button-mainTab btn-item-interfaces">
                11
              </button>

              <button className="twelve-button-mainTab btn-item-interfaces">
                12
              </button>

              <button className="thirteenth-button-mainTab btn-item-interfaces">
                13
              </button>

              <button className="fourteenth-button-mainTab btn-item-interfaces">
                14
              </button>

              <button className="fiveteenth-button-mainTab btn-item-interfaces">
                15
              </button>

              <button className="sixteenth-button-mainTab btn-item-interfaces">
                16
              </button>

              <button className="seventeenth-button-mainTab btn-item-interfaces">
                17
              </button>

              <button className="eighteenth-button-mainTab btn-item-interfaces">
                18
              </button>

              <button className="nineteenth-button-mainTab btn-item-interfaces">
                19
              </button>

              <button className="twentieth-button-mainTab btn-item-interfaces">
                20
              </button>

              <button className="twentyOne-button-mainTab btn-item-interfaces">
                21
              </button>

              <div className="description-lesson-name">
                <p>2</p>
                <p>Вкладки "Главная"</p>
              </div>
            </div>
            <div className="mainTab-menu">
              <button onClick={toggleInstrs}>
                {toggleInstrs ? "Показать все" : "Скрыть"}
              </button>
            </div>
            {show && <ThoseInstrs />}
          </div>
        </div>
        <Link to="/GenPresentations/MainInterface/MainTab">
          <p className="next-slide">
            Вперёд <img src={right} alt="" />
          </p>
        </Link>
        <div className="KASTIL228"></div>
      </div>

      <Footer />
    </>
  );
}

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
  const [activeButtons, setActiveButtons] = useState([]);

  const toggleInstrs = () => {
    setShow((prev) => !prev);
  };

  const buttons = [
    { id: 1, label: "1", postion: { left: "-250px", top: "130px" } },
    { id: 2, label: "2", postion: { left: "210px", top: "130px" } },
    { id: 3, label: "3", postion: { left: "-160px", top: "210px" } },
    { id: 4, label: "4", postion: { left: "-10px", top: "210px" } },
    { id: 5, label: "5", postion: { left: "200px", top: "210px" } },
    { id: 6, label: "6", postion: { left: "500px", top: "210px" } },
    { id: 7, label: "7", postion: { left: "1000px", top: "210px" } },
    { id: 8, label: "8", postion: { left: "-250px", top: "275px" } },
    { id: 9, label: "9", postion: { left: "-180px", top: "275px" } },
    {
      id: 10,
      label: "10",
      postion: { left: "-50px", top: "275px", padding: "0px" },
    },
    {
      id: 11,
      label: "11",
      postion: { left: "130px", top: "275px", padding: "0px" },
    },
    {
      id: 12,
      label: "12",
      postion: { left: "300px", top: "275px", padding: "0px" },
    },
    {
      id: 13,
      label: "13",
      postion: { left: "470px", top: "275px", padding: "0px" },
    },
    {
      id: 14,
      label: "14",
      postion: { left: "640px", top: "275px", padding: "0px" },
    },
    {
      id: 15,
      label: "15",
      postion: { left: "830px", top: "275px", padding: "0px" },
    },
    {
      id: 16,
      label: "16",
      postion: { left: "380px", top: "275px", padding: "0px" },
    },
    {
      id: 17,
      label: "17",
      postion: { left: "-630px", top: "340px", padding: "0px" },
    },
    {
      id: 18,
      label: "18",
      postion: { left: "-160px", top: "520px", padding: "0px" },
    },
    {
      id: 19,
      label: "19",
      postion: { left: "20px", top: "520px", padding: "0px" },
    },
    {
      id: 20,
      label: "20",
      postion: { left: "290px", top: "130px", padding: "0px" },
    },
    {
      id: 21,
      label: "21",
      postion: { left: "250px", top: "90px", padding: "0px" },
    },
  ];

  const handleClick = (id) => {
    setActiveButtons((prev) =>
      prev.includes(id)
        ? prev.filter((buttonId) => buttonId !== id)
        : [...prev, id]
    );
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
              {buttons.map((btn) => (
                <button
                  key={btn.id}
                  className={`color-button ${
                    activeButtons.includes(btn.id) ? "clicked" : ""
                  }`}
                  style={{
                    top: btn.postion.top,
                    left: btn.postion.left,
                    padding: btn.postion?.padding,
                  }}
                  onClick={() => handleClick(btn.id)}
                >
                  {btn.label}
                </button>
              ))}

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

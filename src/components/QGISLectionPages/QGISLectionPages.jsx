import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

import qlrImage from "../../assets/qlr.svg";

import "./QGISLectionPages.css";
import { useState } from "react";

export default function QGISLectionPages({ id, numberPage }) {
  const [count, setCount] = useState(id);

  console.log(id);

  console.log(`id сейчас и его тип - ${id} \n ${typeof id}`);
  console.log(`счет id сейчас = ${count} \n его тип - ${typeof count}`);

  let content;

  switch (id) {
    case 0:
      content = "http://geoportal02/videos/lessons/1.mp4";
      break;
    case 1:
      content = "http://geoportal02/videos/lessons/2.mp4";
      break;

    case 2:
      content = "ZHOPA";
      break;
  }

  return (
    <>
      <Header />
      <Breadcrumbs numberPage={numberPage} />
      <SideBar />

      <div className="qgis-lesson-container">
        <div className="qgis-lesson-header">
          <div className="qlr-header-image">
            <img className="qlr-image" src={qlrImage} alt="Работа с QLR" />
          </div>
          <div className="qgis-lesson-description">
            <h3>Лекции QGIS</h3>
          </div>
        </div>

        <div className="qgis-content">
          <video controls>
            <source src={content} type="video/mp4" />
          </video>

          <button onClick={() => setCount(count + 1)}>forward</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

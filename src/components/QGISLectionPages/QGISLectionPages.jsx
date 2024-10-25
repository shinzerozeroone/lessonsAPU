import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

import qlrImage from "../../assets/qlr.svg";

import "./QGISLectionPages.css";

export default function QGISLectionPages() {
  let { id } = useParams();

  let content;

  switch (id) {
    case 0:
      content = "http://geoportal02/videos/lessons/1.mp4";
      break;
    case 1:
      content = "http://geoportal02/videos/lessons/2.mp4";
      break;
  }

  console.log(id);

  return (
    <>
      <Header />
      <Breadcrumbs />
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
        </div>
      </div>
      <Footer />
    </>
  );
}

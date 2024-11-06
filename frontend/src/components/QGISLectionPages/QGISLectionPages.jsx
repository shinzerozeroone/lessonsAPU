import { Link } from "react-router-dom";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

import qlrImage from "../../assets/qlr.svg";

import "./QGISLectionPages.css";
import { useEffect, useState, useRef } from "react";
import Comments from "../Comments/Commnets";

export default function QGISLectionPages({ id, numberPage }) {
  const videoRef = useRef(null);
  console.log(`id сейчас и его тип - ${id} \n ${typeof id}`);

  let content;

  switch (id) {
    case 0:
      content = "http://geoportal02/videos/lessons/1.mp4";
      break;
    case 1:
      content = "http://geoportal02/videos/lessons/2.mp4";
      break;
    case 2:
      content = "http://geoportal02/videos/lessons/3.mp4";
      break;
  }

  useEffect(() => {
    if (videoRef.current && content) {
      videoRef.current.load();
    }
  }, [content]);

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
          <video ref={videoRef} controls>
            <source src={content} type="video/mp4" />
          </video>
          <div className="qgis-menu">
            {id == 0 ? (
              <Link to={`/LectionsQGIS/${id + 1}`}>
                <button className="frwdBtn">
                  Вперед
                  <img src={right}></img>
                </button>
              </Link>
            ) : (
              <>
                <Link to={`/LectionsQGIS/${id - 1}`}>
                  <button className="prvBtn">
                    <img src={left}></img> Назад
                  </button>
                </Link>{" "}
                <Link to={`/LectionsQGIS/${id + 1}`}>
                  <button className="frwdBtn">
                    Вперед
                    <img src={right}></img>
                  </button>
                </Link>{" "}
              </>
            )}
          </div>
        </div>
      </div>
      <Comments lectureId={id} />

      <Footer />
    </>
  );
}

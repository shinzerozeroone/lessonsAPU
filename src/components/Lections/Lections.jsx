import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import qgisImage from "../../assets/qgis.svg";

import { Link } from "react-router-dom";

import "./Lections.css";

export default function Lections() {
  return (
    <>
      <Header></Header>
      <Breadcrumbs></Breadcrumbs>
      <SideBar></SideBar>
      <div className="lections-container">
        <div className="lections-header">
          <div className="qgis-header-image">
            <img className="qgis-image" src={qgisImage} alt="Работа с QLR" />
          </div>
          <h3>Лекции по QGIS</h3>
        </div>
        <div className="lections-content">
          <Link to={`/LectionsQGIS/0`}>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">0</p>
                <p className="lections-item-name"> Вводная лекция</p>
              </div>
            </div>
          </Link>
          <Link to={`/LectionsQGIS/1`}>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">1</p>
                <p className="lections-item-name"> Лекция 1</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">2</p>
                <p className="lections-item-name"> Лекция 2</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">3</p>
                <p className="lections-item-name"> Лекция 3</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">4</p>
                <p className="lections-item-name"> Лекция 4</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">5</p>
                <p className="lections-item-name"> Лекция 5</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">6</p>
                <p className="lections-item-name"> Лекция 6</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">7</p>
                <p className="lections-item-name"> Лекция 7</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">8</p>
                <p className="lections-item-name"> Лекция 8</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">9</p>
                <p className="lections-item-name"> Лекция 9</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">10</p>
                <p className="lections-item-name"> Лекция 10</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">11</p>
                <p className="lections-item-name"> Лекция 11</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">12</p>
                <p className="lections-item-name"> Лекция 12</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className="lections-item">
              <div className="lections-item-desc">
                <p className="lections-item-num">13</p>
                <p className="lections-item-name"> Лекция 13</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

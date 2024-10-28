import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import qgisImage from "../../assets/qgis.svg";

import { Link } from "react-router-dom";

import "./Lections.css";

export default function Lections({ numberPage }) {
  console.log(numberPage);
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
          {numberPage?.map((page) => (
            <>
              <Link
                key={page.id}
                state={page.id}
                to={`/LectionsQGIS/${page.id}`}
              >
                <div className="lections-item">
                  <div className="lections-item-desc">
                    <p className="lections-item-num">{page.id}</p>
                    <p className="lections-item-name"> {page.name}</p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

import Interfaces from "../../assets/Interfaces.svg";

import "./GenPresentsLessons.css";

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
          <div className="gen-lessons-header-description"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

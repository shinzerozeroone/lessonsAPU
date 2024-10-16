import "./SideBar.css";
import toHome from "../../assets/toHome.svg";
import qlrWork from "../../assets/qlr-work.svg";
import qgisLect from "../../assets/qgisLections.svg";
import genPresentSide from "../../assets/genPresentSide.svg";
import photoFixSide from "../../assets/photoFixSide.svg";

import SideMenu from "./SideMenu";

import { useState } from "react";
import { useRef } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={toHome} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={qlrWork} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={qgisLect} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={genPresentSide} alt="" />
          </button>

          <button className="sidebar-btn" onClick={() => setIsOpen(!isOpen)}>
            <img src={photoFixSide} alt="" />
          </button>
        </div>

        {isOpen && <SideMenu></SideMenu>}
      </div>
    </>
  );
}

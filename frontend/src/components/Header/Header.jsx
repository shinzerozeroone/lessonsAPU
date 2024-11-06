import "./Header.css";
import headerLogo from "../../assets/Group.svg";
import searchBtn from "../../assets/search.svg";
import accImg from "../../assets/user.png";

import { Link } from "react-router-dom";

import LogRegModal from "../LogRegModal/LogRegModal";
import { useState } from "react";

export default function Header() {
  const [open, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-nav">
          <a href="http://geoportal02/">
            <img src={headerLogo} alt="" />
          </a>
          <div className="nav-list">
            <a href="http://geoportal02/" className="site">
              Сервисы ГлавАПУ/
            </a>
            <p>Информационный портал ГлавАПУ</p>
          </div>
          <br />
          <p className="sheetName">Информационный портал ГлавАПУ</p>

          {/* <Link to="/registration">
            <button className="accBtn" onClick={handleModalOpen}>
              <img src={accImg} alt="" className="accImage" />
            </button>
          </Link>

          {open && <LogRegModal></LogRegModal>} */}

          <form role="search">
            <input type="text" placeholder="Поиск..." />
            <button>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14.9288L9.50886 9.12441C10.2276 8.16714 10.666 6.95157 10.666 5.63723C10.6588 2.52991 8.26545 0 5.32583 0C2.3862 0 0 2.52991 0 5.62963C0 8.72934 2.39339 11.2593 5.32583 11.2593C6.49736 11.2593 7.58265 10.849 8.4667 10.1728L13.9794 16L14.9928 14.9288H15ZM1.43747 5.62963C1.43747 3.36562 3.184 1.51947 5.32583 1.51947C7.46766 1.51947 9.21418 3.36562 9.21418 5.62963C9.21418 7.89364 7.46766 9.73979 5.32583 9.73979C3.184 9.73979 1.43747 7.89364 1.43747 5.62963Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </div>
      </header>
    </>
  );
}

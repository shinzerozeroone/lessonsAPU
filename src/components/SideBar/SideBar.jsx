import "./SideBar.css";
import toHome from "../../assets/toHome.svg";

export default function SideBar() {
  return (
    <>
      <div className="sidebar-container">
        <button className="toHome">
          <img src={toHome} alt="" />
        </button>
      </div>
    </>
  );
}

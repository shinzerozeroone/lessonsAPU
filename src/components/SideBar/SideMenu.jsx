import "./SideBar.css";

export default function SideMenu() {
  return (
    <>
      <div className="expanded-menu">
        <a href="">
          <div>
            <p>Домашняя страница</p>
          </div>
        </a>
        <a href="">
          <div>
            <p>Работа с QLR</p>
          </div>
        </a>
        <a href="">
          <div>
            <p>Лекции QGIS</p>
          </div>
        </a>
        <a href="">
          <div>
            <p>Генератор презентаций</p>
          </div>
        </a>
        <a href="">
          <div>
            <p>Фотофиксация инструкции</p>
          </div>
        </a>
      </div>
    </>
  );
}

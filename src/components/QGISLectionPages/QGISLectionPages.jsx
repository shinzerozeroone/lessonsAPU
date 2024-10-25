import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function QGISLectionPages() {
  const { id } = useParams();

  console.log(id);

  let content;

  switch (id) {
    case "0":
      content = (
        <div>
          <Breadcrumbs />
          <h2>Детали товара 1</h2>
          <p>Это подробная информация о товаре 1.</p>
        </div>
      );
      break;
    case "1":
      content = (
        <div>
          <Breadcrumbs />

          <h2>Детали товара 2</h2>
          <p>Это подробная информация о товаре 2.</p>
        </div>
      );
      break;
  }
  return (
    <>
      <div>{content}</div>
    </>
  );
}

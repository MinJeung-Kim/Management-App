import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./side_bar.module.css";

const SideBar = ({ menu }) => {
  const path = [
    { id: 1, path: "dashboard", icon: "fas fa-chart-line" },
    { id: 2, path: "maker", icon: "fas fa-user" },
    { id: 3, path: "billing", icon: "far fa-credit-card" },
  ];

  const { id } = useParams();
  useEffect(() => {
    menu(id);
  }, [id]);

  return (
    <aside>
      <ul className={styles.sidebar}>
        {path.map((item) => (
          <li className={getStyles(item.path)} key={item.id}>
            <Link to={`/${item.path}`}>
              <i className={item.icon}></i>
              {item.path}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dashboard":
      return styles.dashboard;
    case "maker":
      return styles.maker;
    case "billing":
      return styles.billing;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default SideBar;

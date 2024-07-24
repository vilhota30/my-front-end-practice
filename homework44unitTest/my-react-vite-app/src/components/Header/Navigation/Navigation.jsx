import { NavLink, Link } from "react-router-dom";
import style from "./Navigation.module.scss";

export function Navigation({ navAttrs }) {
  const { list, active, pending } = style;
  return (
    <nav {...navAttrs}>
      <ul className={list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? active : isPending ? pending : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/about_me"}>About Me</Link>
        </li>
      </ul>
    </nav>
  );
}

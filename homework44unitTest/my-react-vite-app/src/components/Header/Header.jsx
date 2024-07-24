import { ButtonGroup } from "./ButtonGroup/ButtonGroup.jsx";
import style from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation.jsx";

export default function Header() {
  const { header, logo, navigation } = style;
  return (
    <div className={header}>
      <Navigation navAttrs={{ className: navigation }} />
      <ButtonGroup />
    </div>
  );
}

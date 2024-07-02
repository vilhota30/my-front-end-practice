import style from "./ButtonGroup.module.scss";
import { ThemeButton } from "../../UI/Buttons/ThemeButton/ThemeButton.jsx";
// import { ThemeButtonConsumer } from "./ThemeButtonConsumer.jsx";

export function ButtonGroup() {
  const { container } = style;

  return (
    <div className={container}>
      <ThemeButton />
      {/* <ThemeButtonConsumer /> */}
    </div>
  );
}

import style from "./Footer.module.scss";

export default function Footer() {
  const { footer } = style;
  return (
    <div>
      <p className={footer}>All rights reserved</p>
      <p className={footer}>&copy; vilhota30</p>
    </div>
  );
}

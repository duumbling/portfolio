import cls from "./Footer.module.scss";
import icon from "../img/icon.svg";

export const Footer = (id) => {
  return `
  <footer id=${id}>
      <a class=${cls.tgIconBody} href="https://t.me/Howling_Shame" target="_blank">
         <img src=${icon} alt="telegram">
      </a>
      <a class=${cls.email} href="mailto:kakoy-toemail@ya.ru" target="_blank">kakoy-toemail@ya.ru</a>
    </footer>
  `;
};

import cls from "./MainPageWhatSection.module.scss";
import skillsImage from "./img/skills.png";

export const MainPageWhatSection = () => {
  return `
  <section class=${cls.MainPageWhatSectionBody}>
    <div class="container">
    <div class=${cls.MainPageWhatSectionSkillsContainer}>
      <img src=${skillsImage} alt="Мои навыки"></img>
    </div>
      <div class=${cls.MainPageWhatSectionTextContainer}>
        <h3>Что я делаю</h3>
        <p class=${cls.MainPageWhatSectionTextContainer_text}>
        Используя опыт, полученный при обучении новых сотрудников, я разрабатываю
        увлекательные и эффективные материалы для электронного обучения.
        </p>
        <p class=${cls.MainPageWhatSectionTextContainer_text}>
        Моя работа включает создание вводных курсов, интерактивных модулей, викторин и обучающих видео. 
        Я фокусируюсь на том, чтобы контент был не только информативным, но и вовлекающим,
        помогая учащимся достигать долгосрочных результатов и успехов в карьере.
        </p>
        <p class=${cls.MainPageWhatSectionTextContainer_text}>
        В своей работе я активно использую современные инструменты:
        CapCut для монтажа видео, iSpring Suite для разработки курсов, 
        Adobe Illustrator для создания графики, а также нейросети, такие как Suno,
        Recraft, GPT-Open и другие. Я также применяю собственные наработки и подходы, 
        чтобы сделать обучение максимально персонализированным и эффективным.
        </p>
      </div>
    </div>
    
  </section>
  
  `;
};

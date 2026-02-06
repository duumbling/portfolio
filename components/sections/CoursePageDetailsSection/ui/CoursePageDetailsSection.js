import cls from "./CoursePageDetailsSection.module.scss";

export const CoursePageDetailsSection = (course) => {
  return `
  <section class=${cls.CoursePageDetailsSectionBody}>
    <div class="container">
      <div class=${cls.CoursePageDetailsSectionDetailsContainer}>
        <h3>Детали</h3>
          <div>
            <p class=${cls.DetailsContainerClient}>
              <span>Заказчик: </span> ${course.Details.Details.Client}
            </p>
          </div>
      </div>
      <div class=${cls.CoursePageDetailsSectionToolsContainer}>
        <h3>Инструменты</h3>
         <div>
            ${course.Details.Tools.map((item) => {
              return ` 
              <p class=${cls.ToolsContaineritem_text}>
                ${item}
              </p>`;
            }).join("")}
         </div>
      </div>
      <div class=${cls.CoursePageDetailsSectionSkillsContainer}>
        <h3>Навыки</h3>
         <div>
         ${course.Details.Skills.map((item) => {
           return ` 
          <p class=${cls.SkillsContaineritem_text}>
            ${item}
          </p>`;
         }).join("")}
         </div>
      </div>
    </div>
    
  </section>
  
  `;
};

import CollapsedCourseItem from "../../../shared/CollapsedCourseItem";
import cls from "./MainPageCoursesListSection.module.scss";

export const MainPageCoursesListSection = (coursesList) => {
  return `
    <section class=${cls.MainPageCoursesListSectionBody} id="Portfolio_Section">
      <div class="container">
        <ul class=${cls.MainPageCoursesListSectionList} id="this">
          ${coursesList
            .map((item, index) => {
              return CollapsedCourseItem(item);
            })
            .join("")}
        </ul>
      </div>
  </section>
  `;
};

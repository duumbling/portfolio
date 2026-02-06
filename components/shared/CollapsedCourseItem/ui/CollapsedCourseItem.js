import cls from "./CollapsedCourseItem.module.scss";

export const CollapsedCourseItem = (course) => {
  return `
  <li class=${cls.courseItemBody} id="linkbutton" data-link=${course.ID}>
      <img src=${course.MainImage} alt="Изображение курса" class=${cls.courseItemImage}>
      <p class=${cls.courseItemName}>${course.Title}</p>
      <button 
      class=${cls.courseItemButton} 
      
      
      >
      Смотреть
      </button>
    </li>
  `;
};


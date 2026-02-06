import cls from "./CoursePageAboutSection.module.scss";

export const CoursePageAboutSection = (course) => {
  console.log(course.video);
  return `
  <section class=${cls.CoursePageAboutSectionBody}>
    <div class="container">
      <div class=${cls.CoursePageAboutSectionVideoContainer}>
        <video  src=${course.Video} alt="Видео о курсе" type="video/mp4" controls ></video>
      </div>
      <div class=${cls.CoursePageAboutSectionTextContainer}>
        <h3>О проекте</h3>
        <p class=${cls.CoursePageAboutSectionTextContainer_text}>
          ${course.About}
        </p>
      </div>
    </div>
    
  </section>
  
  `;
};

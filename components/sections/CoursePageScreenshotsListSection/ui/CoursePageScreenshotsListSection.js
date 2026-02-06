import CollapsedCourseItem from "../../../shared/CollapsedCourseItem";
import cls from "./CoursePageScreenshotsListSection.module.scss";

export const CoursePageScreenshotsListSection = (course) => {
  let srcForBig = ""

  window.updateSrc = function (src) {
    srcForBig = src
  }

  window.openBig = function (src) {
    let container = document.querySelector('#bigScreenshootContainer')
    updateSrc(src)
    console.log(srcForBig)
    container.querySelector('img').src = srcForBig
    container.classList = (`${cls.bigScreenshootContainer} ${cls.opened}`)

  }

  window.closeBig = function () {
    let mainContainer = document.querySelector('#CoursePageScreenshotsListSectionBody')
    let container = document.querySelector('#bigScreenshootContainer')
    container.classList = (`${cls.bigScreenshootContainer}`)
    mainContainer.scrollIntoView(false)
  }

  return `
      <section class=${cls.CoursePageScreenshotsListSectionBody} id="CoursePageScreenshotsListSectionBody">
        <div class="container">
          <ul class=${cls.CoursePageScreenshotsListSectionList}>
            ${course.Screenshots.map((item, index) => {
    return `
                <li class="${cls.CoursePageScreenshotsScreenshotItem}" onclick="openBig('${item}')">
                   <img src=${item} alt="screenshot ${index + 1}"></img>
                </li>
                `;
  }).join("")}
          </ul>
          <div class=${cls.bigScreenshootContainer} id="bigScreenshootContainer" onclick="closeBig()">
            <img src=""></img>
          </div>
        </div>
    </section>
  `;
};





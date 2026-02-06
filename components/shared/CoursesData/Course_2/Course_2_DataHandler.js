import CourseMainImage from "./CourseMainImage.png";

import Screenshot_1 from "./Screenshots/__Screenshot_1.png";
import Screenshot_2 from "./Screenshots/__Screenshot_2.png";
import Screenshot_3 from "./Screenshots/__Screenshot_3.png";
// import Screenshot_4 from "./Screenshots/__Screenshot_4.png";
// import Screenshot_5 from "./Screenshots/__Screenshot_5.png";
// import Screenshot_6 from "./Screenshots/__Screenshot_6.png";

import video from "./video.mp4";

const CourseDataHandler = () => {
  const courseTitle = "Эффективный телемаркетинг";
  const courseID = "1";
  // const courseAbout = "About text2";
  const courseAbout =
    "Необходимо было разработать демо-курс по эффективному телемаркетингу для банковских проектов.";
  const courseDetails = {
    Details: {
      Type: "Course name",
      Client: "Отдел обучения",
      Date: "Some date",
    },
    Tools: ["Adobe Illustrator", "Adobe Animate", "CapCut"],
    Skills: [
      "Педагогический дизайн",
      "Графический дизайн",
      "Анимация",
      "Монтаж видео",
    ],
  };
  const courseImage = CourseMainImage;
  const screenshotsList = [
    Screenshot_1,
    Screenshot_2,
    Screenshot_3,
    // Screenshot_4,
    // Screenshot_5,
    // Screenshot_6,
  ];

  const CourseData = {
    Title: courseTitle,
    ID: courseID,
    MainImage: courseImage,
    About: courseAbout,
    Details: courseDetails,
    Screenshots: screenshotsList,
    Video: video,
  };

  return CourseData;
};

export default CourseDataHandler;

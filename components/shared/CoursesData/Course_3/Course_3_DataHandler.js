import CourseMainImage from "./CourseMainImage.png";

import Screenshot_1 from "./Screenshots/__Screenshot_1.png";
import Screenshot_2 from "./Screenshots/__Screenshot_2.png";
import Screenshot_3 from "./Screenshots/__Screenshot_3.png";
import Screenshot_4 from "./Screenshots/__Screenshot_4.png";
import Screenshot_5 from "./Screenshots/__Screenshot_5.png";
import Screenshot_6 from "./Screenshots/__Screenshot_6.png";

const CourseDataHandler = () => {
  const courseTitle = "SomeCourse_3";
  const courseID = "2";
  const courseAbout = "About text";
  const courseDetails = {
    Details: {
      Type: "Course name",
      Client: "Client name",
      Date: "Some date",
    },
    Tools: ["Some tools", "Some tools"],
    Skills: ["Some skills", "Some skills", "Some skills"],
  };
  const courseImage = CourseMainImage;
  const screenshotsList = [
    Screenshot_1,
    Screenshot_2,
    Screenshot_3,
    Screenshot_4,
    Screenshot_5,
    Screenshot_6,
  ];

  const CourseData = {
    Title: courseTitle,
    ID: courseID,
    MainImage: courseImage,
    About: courseAbout,
    Details: courseDetails,
    Screenshots: screenshotsList,
  };

  return CourseData;
};

export default CourseDataHandler;

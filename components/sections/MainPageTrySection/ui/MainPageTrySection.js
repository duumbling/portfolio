import cls from "./MainPageTrySection.module.scss";


export const MainPageTrySection = () => {

  const tryHandler = () => {
    window.open("../../../try-course/try.html", "_blank")
  }


  return `
  <section class=${cls.MainPageTrySectionBody} id="Main_Section">
    <div class="container">
      <div class=${cls.MainPageTrySectionTextContainer}>
        <h3>Проработав более семи лет в сфере обучения, я обнаружил в себе страсть к созданию учебных материалов..</h3>
        <p class=${cls.MainPageTrySectionTextContainer_text}>
        Мой профессиональный путь начался в компании «Леруа Мерлен»,
        где я занимал позицию наставника, а затем перешел в роли тренера по soft skills и сервису. 
        Этот опыт позволил мне развить навыки работы с людьми и понять, как важно создавать вовлекающее и эффективное обучение. 
        </p>
        <p class=${cls.MainPageTrySectionTextContainer_text}>
        Позже я перешел в контактный центр, где сначала работал бизнес-тренером, а затем был повышен до позиции старшего тренинг-менеджера. 
        Здесь я углубил свои знания в области разработки и внедрения обучающих программ, а также управления процессом обучения. 
        </p>
        <p class=${cls.MainPageTrySectionTextContainer_text}>
        Сейчас я занимаюсь администрированием LMS (Learning Management System) и разработкой электронных курсов на должности старшего разработчика обучающих материалов. 
        Мой опыт позволил мне понять, что ключ к успешному обучению — не только в глубоком знании процессов, но и в способности создавать запоминающийся и мотивирующий опыт для учащихся. 
        Именно страсть к тому, чтобы помогать другим достигать успеха через обучение, изначально привела меня в сферу электронного обучения и продолжает вдохновлять меня каждый день.
        </p>
      </div>
      <div class=${cls.MainPageTrySectionCourseContainer}>
      <a href="https://trycourse.vercel.app/" target="_blank"> 
      <button class=${cls.MainPageTrySectionCourseContainer_button}>
  
       <p>Попробуй</p>
      </button>
          </a>
    </div>
    </div>
    
  </section>
  
  `;


};

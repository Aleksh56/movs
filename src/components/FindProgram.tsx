const FindProgram = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
      <div className="lg:p-4 max-w-full lg:max-w-[44rem] w-full">
        <img
          src="https://i.pinimg.com/originals/8b/6c/b4/8b6cb430f1bd571e209c8a8d08e5a194.jpg"
          alt="Program Image"
          className="max-w-full h-auto"
        />
      </div>
      <div className="p-4 lg:p-[2rem] bg-red-50 lg:absolute lg:right-0 lg:top-[10rem] w-full lg:w-[40%] mt-4 lg:mt-0">
        <h2 className="text-3xl lg:text-[44px] font-bold mb-2">
          Найди свое направление
        </h2>
        <p className="mb-4 font-bold">Специальности и направления</p>
        <p className="mb-4">
          В ПГНИУ работают подготовительные курсы, где вы можете подготовиться к
          сдаче ЕГЭ по всем предметам. С информацией о подготовительных курсах
          ПГНИУ можно ознакомиться на сайте подговительных курсов.
        </p>
        <div className="mb-4 flex flex-wrap">
          <a
            href="http://www.psu.ru/files/docs/obrazovanie/bachelors/2024/up/02-03-02-fit-f.pdf"
            className="mr-4 mb-2 underline"
          >
            Примерный учебный план
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindProgram;

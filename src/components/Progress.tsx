import AchievementImage from "../assets/images/Achivement-1.jpeg";

interface IAchievement {
  title: string;
  imageSrc: string;
  description: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const Achievement = ({ title, description }: IAchievement) => {
  const truncatedTitle = truncateText(title, 50);
  const truncatedDescription = truncateText(description, 100);

  return (
    <div className="p-4">
      <img
        src={AchievementImage}
        alt={title}
        className="mx-auto mb-4 max-w-full h-auto object-cover"
      />
      <h3 className="text-xl font-bold mb-2">{truncatedTitle}</h3>
      <p>{truncatedDescription}</p>
    </div>
  );
};

const Progress = () => {
  return (
    <div className="my-[60px]">
      <h2 className="text-2xl font-bold mb-4">Наши достижения</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Achievement
          title="Три команды ПГНИУ вышли в полуфинал Международного студенческого чемпионата мира по программированию"
          imageSrc="path_to_image_1.jpg"
          description="27 октября 2018 года в Екатеринбурге состоялся четвертьфинал Международного студенческого чемпионата мира по программированию (ICPC), в котором приняли участие 88 команд Уральского региона. Среди этих команд были 6 команд ПГНИУ, членами которых были студенты механико-математического факультета. По итогам соревнований в полуфинал прошли три команды нашего университета (всего было выбрано 30 команд)."
        />
        <Achievement
          title="Шесть команд ММФ прошли в 1/4 финала ЧМ по программированию"
          imageSrc="path_to_image_2.jpg"
          description="В Пермском университете прошел отборочный тур Международного студенческого чемпионата мира по программированию (ICPC). В 1/8 финала соревнований приняли участие 34 команды со всего Пермского края. На площадке ПГНИУ собрались более 100 человек, которые представляли вузы, колледжи и техникумы региона. По итогам соревнований в четвертьфинал прошли шесть команд."
        />
        <Achievement
          title="Победители и призеры Краевой студенческой олимпиады по теоретической механике!"
          imageSrc="path_to_image_3.jpg"
          description="В субботу 26 мая 2018 г. на базе ПНИПУ прошла Краевая студенческая олимпиада по теоретической механике. В личном первенстве студент 3 курса физического факультета Косков Михаил завоевал 1 место, разделив его с участником из команды ПНИПУ. Команда ПГНИУ заняла 2 место."
        />
        <Achievement
          title="В ПГНИУ состоялся 1 тур Всероссийской олимпиады по теоретической механике"
          imageSrc="path_to_image_4.jpg"
          description="Бакалавры механико-математического и физического факультетов приняли участие в I туре Всероссийской студенческой олимпиаде по теоретической механике, который проходил на базе кафедры механики и математического моделирования университета. Участникам олимпиады были предложены шесть заданий по кинематике, статике и динамике."
        />
      </div>
    </div>
  );
};

export default Progress;

import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center md:col-span-1">
          <img src={Logo} alt="Logo" className="w-16 h-16 mr-4" />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold">Контакты</h2>
            <p>Расположение: ауд. 421 (быв. ауд. 415), корп. 2</p>
            <p>Телефон: +7 (342) 239-67-72</p>
            <p>Почта: lab.movs@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Приемная комиссия</h2>
            <p>Расположение: корп. 5, этаж 2, ауд. 217</p>
            <p>Телефон: +7 (342) 2-396-589</p>
            <p>Почта: entrance.examination@psu.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

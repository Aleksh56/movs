import React from "react";
import Hero from "../../components/Hero";

const ApplicantsPage: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Абитуриентам
        </h1>

        {/* Правила приема */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Правила приема на механико-математический факультет (2018 год)
          </h2>
          <p className="text-lg text-gray-700">
            Сроки приема документов и вступительных испытаний, сроки оформления
            в приемной комиссии заявлений о согласии на зачисление и
            представления оригиналов документов об образовании, а также детали
            по зачислению на бюджетные места и по договорам представлены на
            данной странице.
          </p>
        </section>

        {/* Вступительные испытания и минимальные баллы */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Перечень вступительных испытаний и минимальные баллы
          </h2>
          <div className="text-lg text-gray-700">
            <p>
              Математика, Информатика и ИКТ, Русский язык - минимальные баллы
              ЕГЭ для различных направлений.
            </p>
            <p>Срок обучения бакалавров на очной форме – 4 года.</p>
            <p>Срок обучения специалистов на очной форме – 5,5 лет.</p>
            <p>
              После окончания бакалавриата студенты имеют возможность
              поступления в магистратуру в случае успешной сдачи вступительного
              экзамена. Срок обучения в магистратуре - 2 года.
            </p>
          </div>
        </section>

        {/* Платное обучение */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Платное обучение</h2>
          <p className="text-lg text-gray-700">
            По вопросам заключения договоров об оплате обучения обращайтесь в
            деканат механико-математического факультета: 239-62-10, ауд. 410,
            корп.№2.
          </p>
        </section>
      </div>
    </>
  );
};

export default ApplicantsPage;

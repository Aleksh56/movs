import React from "react";
import Hero from "../../components/Hero";
import { departmentInfo, qualificationInfo, staffMembers } from "../../data";

const Contacts: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">
          Контактная информация
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {departmentInfo.title}
            </h3>
            {departmentInfo.details.map((detail, index) => (
              <p key={index} className="mt-1 max-w-2xl text-sm text-gray-500">
                {detail.label}: {detail.value}
              </p>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">
          Сотрудники кафедры
        </h2>
        {staffMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow overflow-hidden sm:rounded-lg mb-5"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {member.position}
              </p>
              {member.details.map((detail, detailIndex) => (
                <p
                  key={detailIndex}
                  className="mt-1 max-w-2xl text-sm text-gray-500"
                >
                  {detail.label}: {detail.value}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Повышение квалификации и стажировки
          </h2>
          <p className="mt-4 text-gray-600">{qualificationInfo}</p>
        </div>
      </div>
    </>
  );
};

export default Contacts;

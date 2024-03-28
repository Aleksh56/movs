import { useState } from "react";
import ModalForm from "./ModalForm";

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between py-8 px-4 sm:py-16 sm:px-24 bg-red-500 my-12">
        <div className="text-white text-lg sm:text-2xl leading-tight sm:leading-[1.25] mb-4 sm:mb-0 text-center sm:text-left">
          <p>
            Хочешь быть в курсе всех
            <br className="hidden sm:inline" />
            возможностей поступления
          </p>
        </div>
        <button
          onClick={openModal}
          className="bg-white text-red-500 px-4 py-2 rounded-[3px] font-bold text-center"
        >
          Заполнить анкету
        </button>
      </div>
      {isModalOpen && <ModalForm onClose={closeModal} />}
    </>
  );
};

export default Feedback;
``;

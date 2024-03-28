import { useState, useEffect } from "react";
import { newsData } from "./data/NewsData";
import Modal from "./components/Modal";

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  const openModal = (news) => {
    setCurrentNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Новости</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="block overflow-hidden cursor-pointer"
            onClick={() => openModal(news)}
          >
            <div
              className={`bg-white p-6 rounded-lg shadow-md flex flex-col ${
                news.id === 1 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="text-md font-bold mb-2 truncate">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4 truncate">
                  {news.description}
                </p>
              </div>
              <span className="text-gray-500 text-sm">{news.date}</span>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <Modal news={currentNews} onClose={closeModal} />}
    </div>
  );
};

export default News;

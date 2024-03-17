import { useState } from "react";
import { newsData } from "./data/NewsData";

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState({});

  const openModal = (news) => {
    setCurrentNews(news);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

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
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={(e) => closeModal(e)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-[80vh]"
            onClick={stopPropagation}
          >
            <h3 className="text-lg font-bold mb-2">{currentNews.title}</h3>
            <img
              src={currentNews.image}
              alt={currentNews.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-700 mb-4">{currentNews.description}</p>
            <span className="text-gray-500 text-sm">{currentNews.date}</span>
            <div className="mt-4 text-right">
              <button
                onClick={(e) => closeModal(e)}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;

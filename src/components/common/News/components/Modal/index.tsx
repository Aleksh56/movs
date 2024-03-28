const Modal = ({ news, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-[80vh] transform transition-all ease-in-out duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-gray-700 mb-4">{news.description}</p>
        <span className="text-gray-500 text-sm">{news.date}</span>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

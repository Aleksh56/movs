import { useState } from "react";
import { useAuth } from "../context/IsAuth";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const { login } = useAuth();

  const showMessage = (text: string, color: string) => {
    setMessage(text);
    setMessageColor(color);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = 1;

      if (response.success) {
        showMessage(response.message, "green");

        setTimeout(() => {
          login();
        }, 2000);
      } else {
        showMessage(response.message, "red");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("Произошла ошибка", "red");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen px-3">
      <div className="w-[35rem] p-6 border rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Вход для администратора</h2>
        {message && (
          <div style={{ color: messageColor }} className="mb-4">
            {message}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-2">
              Имя пользователя:
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-2">
              Пароль:
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

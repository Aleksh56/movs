import { render } from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/IsAuth.tsx";

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { appStore } from "./redux/index.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <Provider store={appStore}>
        <App />
    </Provider>
);

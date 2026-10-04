import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { App } from "@/components/App";
import { store } from "./redux/store";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
   
<BrowserRouter basename="/redux">
  <Provider store={store}>
    
   <App />
  </Provider>,
  </BrowserRouter>
  
);

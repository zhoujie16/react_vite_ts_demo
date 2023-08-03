import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/index.scss";
import Config from "./config";
import Home from "@/pages/home";
import Demo1 from "@/pages/demo1";
import Demo2 from "@/pages/demo2";
import { getParameterByName } from "./libs/utils";
import eruda from "eruda";
import "./libs/rem";
import { Provider } from "react-redux";
import configStore from "./store/configureStore";

// 初始化函数
(() => {
  setTimeout(() => {
    console.log("项目公共配置", { ...Config });
  }, 0);
  // querystring中加入debug=true开启debug工具
  if (getParameterByName("debug") === "true") {
    eruda.init();
  }
})();

const store = configStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Demo1" element={<Demo1 />} />
          <Route path="/Demo2" element={<Demo2 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);


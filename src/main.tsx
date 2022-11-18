import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/index.scss";
import Config from "./config";
import Home from "@/pages/home";
import Demo1 from "@/pages/demo1";
import Demo2 from "@/pages/demo2";
import { getParameterByName, getScript } from "./libs/utils";
import "./libs/rem";
import { Provider } from "react-redux";
import configStore from "./store/configureStore";
import Demo3 from "./pages/demo3";
import JintouSay from "./pages/JintouSay";
import Demo4 from "./pages/demo4";

// 初始化函数
(() => {
  setTimeout(() => {
    console.log("项目公共配置", { ...Config });
  }, 0);
  // querystring中加入debug=true开启debug工具
  if (getParameterByName("debug") === "true") {
    getScript("//www.jk.cn/hm-plan-c/eruda.js").then(() => {
      (window as any).eruda.init();
    });
  }
})();

const store = configStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Demo1" element={<Demo1 />} />
          <Route path="/Demo2" element={<Demo2 />} />
          <Route path="/Demo3" element={<Demo3 />} />
          <Route path="/JintouSay" element={<JintouSay />} />
          <Route path="/Demo4" element={<Demo4 />} />
        </Routes>
      </HashRouter>
    </Provider>
  </>
);

import { testReq } from "./../../api/demo";

export const add = (num = 1) => {
  return {
    type: "ADD",
    payload: num,
  };
};
export const minus = (num = 1) => {
  return {
    type: "MINUS",
    payload: num,
  };
};

// 异步的action
export const asyncAdd = (num = 1) => {
  return {
    type: "ADD",
    payload: async () => {
      await new Promise(r => setTimeout(r, 1000));
      return num;
    },
  };
};

// 接口测试
export const asyncReqtest = () => {
  return {
    type: "API_getUserInfo",
    payload: testReq(),
  };
};

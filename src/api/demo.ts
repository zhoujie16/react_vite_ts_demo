// demo2 页面 相关接口
import request from "@/libs/request";
import Config from "@/config";

//
export const testReq = () => {
  return request.get(`${Config.APP_API}/demo`);
};

// demo2 页面 相关接口
import request from "@/libs/request";
import Config from "@/config";

//
export const testReq = () => {
  return request.get(`${Config.APP_API}/demo`);
};

export const getJinTouSay = () => {
  return request.get(
    `https://api.jtwapp.cn/api/v3/circle/say/user_line?isArticle=0&pageNum=1&pageSize=20&sayId=8471921&targetCngoldId=2452678`
  );
};

const ua = navigator.userAgent;

const PLATFORM = /(Android);?[\s/]+([\d.]+)?/i.test(ua)
  ? "android"
  : /(iPhone|iPad|iPod).*OS\s([\d_]+)/i.test(ua)
  ? "iOS"
  : /(MSIE) (\d+)/i.test(ua)
  ? "ie"
  : /Chrome\/(\d+)/i.test(ua)
  ? "chrome"
  : "unknow";

const ov = RegExp.$2 ? RegExp.$2.split(/_|\./) : [0, 0];
const osVersion = parseFloat(ov[0] + "." + ov[1]);

const IS_WX = /MicroMessenger/.test(ua);
const IS_ALIPAY = /alipayclient/i.test(ua.toLowerCase());

const iOS = PLATFORM === "iOS";
const isAndroid = PLATFORM === "android";

const APP_API = "http://x.abczzz.cn";

export default {
  ua,
  PLATFORM,
  ov,
  osVersion,
  IS_WX,
  IS_ALIPAY,
  iOS,
  isAndroid,
  APP_API,
};

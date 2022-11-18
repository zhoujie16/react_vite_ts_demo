export function getParameterByName(name: string, url?: string) {
  let myUrl = url;
  if (!url) myUrl = window.location.href;
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(myUrl);
  if (!results) return null;
  if (!results[2]) return "";
  try {
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  } catch (e) {
    return "";
  }
}

// 动态 添加 script
export const getScript = (e: any) => {
  return new Promise((t, o) => {
    const a: any = document.createElement("script");
    (a.src = e),
      (a.async = !0),
      (a.onerror = o),
      (a.onload = a.onreadystatechange =
        function () {
          const e = this.readyState;
          (e && "loaded" !== e && "complete" !== e) ||
            ((a.onload = a.onreadystatechange = null), t());
        }),
      document.head.appendChild(a);
  });
};

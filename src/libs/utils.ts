export function getParameterByName(name, url?) {
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

import language from "../languageData.js";
import { fetchData } from "./apiCall.js";
// import fetchData from "./apiCall.js";

// *GETTING CODE OF THE LANGUAGE
let arr = [];
export function getCode(lang, arrangeNo) {
  if (lang === undefined) return;
  for (let [key, value] of Object.entries(language)) {
    if (lang === value) {
      arr[arrangeNo] = key;
      if (arr[0] && arr[1]) {
        fetchData(arr[0], arr[1]);
      }
    }
  }
}

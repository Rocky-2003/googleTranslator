import { getCode } from "./getLangCode.js";

export default function getLanguage(lang, arrangeNo) {
  lang.addEventListener("change", (e) => {
    // return e.target.value;
    // console.log(`${e.target.value}`);
    getCode(`${e.target.value}`, arrangeNo);
  });
}

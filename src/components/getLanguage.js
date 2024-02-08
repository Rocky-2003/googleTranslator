import { getCode } from "./getLangCode.js";



 export let language;

export  function getLanguage(lang, arrangeNo) {
  lang.addEventListener("change", (e) => {
    language = e.target.value;
    getCode(`${e.target.value}`, arrangeNo);
  });
}


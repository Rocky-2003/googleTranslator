"use strict";

import language from "./languageData.js";

const renderLanguageData = document.querySelectorAll(".selectLanguage");
const changeLanguage = document.querySelector("#changeLang");
const toChangeLanguage = document.querySelector("#toChangeLang");
let option;

renderLanguageData.forEach((select) => {
  for (let [code, value] of Object.entries(language)) {
    option = document.createElement("option");
    option.innerHTML = value;
    option.dataset.langCode = code;
    option.classList.add("option-select");
    option.addEventListener("click", (e) => {
      console.log(e.target);
    });
    select.appendChild(option);
  }
});

console.log();
changeLanguage.childNodes.forEach((el) => {
 
});

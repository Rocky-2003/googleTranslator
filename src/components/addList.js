"use strict";
import languageData from "../languageData.js";
import apiCall from "./apiCall.js";

export default function addList(lang) {
  
  for (let [key, value] of Object.entries(languageData)) {
    let option = document.createElement("option");
    option.innerHTML = value;
    option.dataset.langCode = key;
    option.classList.add("value");
    lang.appendChild(option);
  }
}

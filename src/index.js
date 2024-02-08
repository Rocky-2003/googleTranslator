"use strict";

import addList from "./components/addList.js";
import swapList from "./components/swapList.js";
// import apiCall from "./components/apiCall.js";

import getData from "./components/getData.js";

const inputLanguage = document.querySelector("#area1");
const outputLanguage = document.querySelector("#area2");
const commonToAdd = document.querySelectorAll(".selectLanguage");
const language1 = document.querySelector("#changeLang");
const language2 = document.querySelector("#toChangeLang");

// * ADDING LIST TO DROPDOWN SELECT

// let swap = () => {
//   swapList(...argu);
// };
let argu = [language1, language2, inputLanguage, outputLanguage];
getData(argu);
commonToAdd.forEach((language) => {
  addList(language);
});

// *wapping list of selected languages;
swapList(...argu);

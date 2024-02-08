"use strict";

import addList from "./components/addList.js";
import { getLanguage } from "./components/getLanguage.js";
// import { language } from "./components/getLanguage.js";

const changeLanguage = document.querySelector("#changeLang");
const toChangeLanguage = document.querySelector("#toChangeLang");
// const reverseLanguage = document.querySelector(".reverse-lang");

// *This call is to set the languages on UI
addList(changeLanguage);
addList(toChangeLanguage);

// * This call is used which languages is selected and the we get the language Code

getLanguage(changeLanguage, 0);
getLanguage(toChangeLanguage, 1);

import language from "../languageData.js";

export default function addList(listName) {
  for (let [key, value] of Object.entries(language)) {
    // console.log(key, value);
    let option = document.createElement("option");
    option.innerHTML = value;
    option.dataset.langCode = key;
    listName.appendChild(option);
  }
}

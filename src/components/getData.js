import languageData from "../languageData.js";
import apiCall from "./apiCall.js";

export default function getData([lang1, lang2, inputText, outputText]) {
  
  let inputL1;
  let inputL2;
  inputText.addEventListener("input", () => {
    callApi();
  });

  for (let [key, value] of Object.entries(languageData)) {
    lang1.addEventListener("change", (e) => {
      if (e.target.value === value) {
        inputL1 = key.substring(0, 2);
        callApi();
      }
    });
    lang2.addEventListener("change", (e) => {
      if (e.target.value === value) {
        inputL2 = key.substring(0, 2);
        callApi();
      }
    });
  }

  function callApi() {
    apiCall(inputL1, inputL2, inputText, outputText);
  }
  apiCall(inputL1, inputL2, inputText, outputText);
}

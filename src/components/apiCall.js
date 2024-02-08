import languageData from "../languageData.js";
// import swapList from "./components/swapList.js";


export default async function apiCall(
  inputLanguage = "en",
  outputLanguage,
  inputText,
  outputText
) {
  if (
    inputLanguage !== undefined &&
    outputLanguage !== undefined &&
    inputText.value !== ""
  ) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
      inputText.value
    )}`;
    const response = await fetch(url);
    const data = await response.json();

    outputText.value = data[0][0][0];

    for (let [key, value] of Object.entries(languageData)) {
      if (key.substring(0, 2) === inputLanguage) {
        console.log(value);
      }
      if (key.substring(0, 2) === outputLanguage) {
        console.log(value);
      }
    }
  }
}

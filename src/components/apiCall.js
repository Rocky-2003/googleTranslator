import languageData from "../languageData.js";
import swapList from "./swapList.js";

function swapCall(inputLanguage = "en", outputLanguage, inputText, outputText) {
  let sapLang1;
  let sapLang2;
  console.log(sapLang1,'==', sapLang2);
  for (let [key, value] of Object.entries(languageData)) {
    if (key.substring(0, 2) === inputLanguage) {
      sapLang1 = value;
    }
    if (key.substring(0, 2) === outputLanguage) {
      sapLang2 = value;
    }
  }

  swapList(sapLang1, sapLang2, inputText, outputText);
}

export default async function apiCall(
  inputLanguage = "en",
  outputLanguage = "am",
  inputText,
  outputText
) {
  try {
    if (
      inputLanguage !== undefined &&
      outputLanguage !== undefined &&
      inputText.value !== ""
    ) {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
        inputText.value
      )}`;

      const response = await fetch(url);
      if (response.status == 400) throw new Error("Not getting data");
      const data = await response.json();
      console.log(data);

      outputText.value = data[0][0][0];
      // swapCall(inputLanguage, outputLanguage, inputText, outputText);
    }
  } catch (err) {
    console.log(err);
  }
}

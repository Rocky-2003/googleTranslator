// import apiCall from "./apiCall.js";

export default function swapList(lang1, lang2, inputLang, outputLang) {
  let swap = document.querySelector(".reverse-lang");

  swap.addEventListener("click", (e) => {
    if (outputLang.value !== "" && lang1.value !== '') {
    
      // console.log(lang1.value, lang2.value, inputLang.value, outputLang.value);
      let temp = lang1.value;
      lang1.value = lang2.value;
      lang2.value = temp;

      let tempIO = outputLang.value;
      outputLang.value = inputLang.value;
      inputLang.value = tempIO;
    }
  });
}

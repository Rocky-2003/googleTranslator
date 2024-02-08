import apiCall from "./apiCall.js";

export default function swapList(lang1, lang2, input, output) {

  let swap = document.querySelector(".reverse-lang");
  swap.addEventListener("click", (e) => {
    if (lang1.value !== "Auto Detect") {
      const temp = lang1.value;
      lang1.value = lang2.value;
      lang2.value = temp;

      const tempInput = input.value;
      input.value = output.value;
      output.value = tempInput;
    }
  });
}

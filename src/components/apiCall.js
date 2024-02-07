export async function fetchData(lang1, lang2, text) {
  // console.log(lang1, lang2);
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${`${lang1}`}&tl=${`${lang2}`}&dt=t&q=${encodeURI(
      "This is Rocky"
    )}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();

    console.log(data[0][0][0]);
  } catch (err) {
    console.log(err);
  }
}

// let data = await fetchData();

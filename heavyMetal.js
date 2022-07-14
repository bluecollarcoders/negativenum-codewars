const heavyMetalUmlauts = (boringText) => {
  var newString = "";
  const charMap = {
    A: "Ä",
    a: "ä",
    E: "Ë",
    e: "ë",
    I: "Ï",
    i: "ï",
    O: "Ö",
    o: "ö",
    U: "Ü",
    u: "ü",
    Y: "Ÿ",
    y: "ÿ",
  };

  for (let i = 0; i < boringText.length; i++) {
    if (charMap[boringText[i]]) {
      newString += charMap[boringText[i]];
    } else {
      newString += boringText[i];
    }
  }
  return newString;
};

console.log(
  heavyMetalUmlauts("Facebook introduces new hip hop reaction buttons")
);

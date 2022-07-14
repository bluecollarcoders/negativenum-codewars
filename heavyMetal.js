/*

Your retro heavy metal band, VÄxën, originally started as kind of a joke, just because why would anyone want to use the crappy foosball table in your startup's game room when they could be rocking out at top volume in there instead? Yes, a joke, but now all the top tech companies are paying you top dollar to play at their conferences and big product-release events. And just as how in the early days of the Internet companies were naming everything "i"-this and "e"-that, now that VÄxënmänïä has conquered the tech world, any company that doesn't use Hëävÿ Mëtäl Ümläüts in ëvëry pössïblë pläcë is looking hopelessly behind the times.

Well, with great power chords there must also come great responsibility! You need to help these companies out by writing a function that will guarantee that their web sites and ads and everything else will RÖCK ÄS MÜCH ÄS PÖSSÏBLË! Just think about it -- with the licensing fees you'll be getting from Gööglë, Fäcëböök, Äpplë, and Ämäzön alone, you'll probably be able to end world hunger, make college and Marshall stacks free to all, and invent self-driving bumper cars. Sö lët's gët röckïng and röllïng! Pëdal tö thë MËTÄL!

Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff

I need to look through each letter in a string
see if its a vowel aeouy
if its a vowel change to umalutus

.replace(/\u00c4/g, 'A')
.replace(/\u00cb/g, 'E')
.replace(/\u00cf/g, 'I')
.replace(/\u00d6/g, 'O')
.replace(/\u00dc/g, 'U')
.replace(/\u00e4/g, 'a')
.replace(/\u00eb/g, 'e')
.replace(/\u00ef/g, 'i')
.replace(/\u00f6/g, 'o')
.replace(/\u00fc/g, 'u');

const umlautLetters = {
    A: 'Ä',
    a: 'ä',
    E: 'Ë',
    e: 'ë',
    I: 'Ï',
    i: 'ï',
    O: 'Ö',
    o: 'ö',
    U: 'Ü',
    u: 'ü',
    Y: 'Ÿ',
    y: 'ÿ',
  };

 

*/

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

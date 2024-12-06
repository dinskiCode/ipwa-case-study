// source: https://www.w3.org/International/questions/qa-scripts.de
const rtlLanguages = [
  "ar", // Arabic
  "fa", // Persian (Farsi)
  "he", // Hebrew
  "ur", // Urdu
  "ps", // Pashto
  "sd", // Sindhi
  "dv", // Divehi (Maldivian)
  "syr", // Syriac
  "ug", // Uighur
  "arc", // Aramaic
  "nqo", // N'Ko
  "ckb", // Kurdish (Sorani)
  "azb", // South Azerbaijani
  "bal", // Baluchi (in Arabic script)
  "ha", // Hausa (when written in Ajami script)
  "khw", // Khowar (when written in Arabic script)
  "ks", // Kashmiri (when written in Arabic script)
  "ku", // Kurdish (some dialects use Arabic script)
  "lrc", // Northern Luri
  "mzn", // Mazanderani
  "prd", // Dari (Afghan Persian)
];

/**
 *
 * @returns {Boolean} true if the users browsers language is read from/written in right to left
 */
function isRTL() {
  const browserLang = navigator.language || navigator.userLanguage;
  return rtlLanguages.some((lang) => browserLang.startsWith(lang));
}

export default isRTL;

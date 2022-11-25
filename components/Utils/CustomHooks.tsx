import React from "react";
import en from "../../messages/en.json";
import de from "../../messages/de.json";
import fr from "../../messages/fr.json";
import es from "../../messages/es.json";
import { useRouter } from "next/router";

export default function getLocale(): object {
  const { locale } = useRouter();

  /* const { userLanguage: string } = getUser() 
   
    const lexicon = getLexiconData.find((x:string) => x.languageID === userLanguage)

    if (locale !== undefined && lexicon === locale) {
        lexicon
    } else {
    return {}
    }

*/

  if (locale !== undefined) {
    switch (locale) {
      case "en":
        en;
      case "de":
        de;
      case "es":
        es;
      case "fr":
        fr;

      default:
        en;
    }
  }

  return {};
}

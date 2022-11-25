import { useRouter } from "next/router";
import { newsContent } from "../../index_2";
import styles from "./LanguageForm.module.css";

export default function LanguageForm() {
const { locale } = useRouter()

// const t = locale === 'en' 
//   ? newsContent['en-US'] 
//   : locale === 'es-ES' 
//   ? newsContent['es-ES'] 
//   : locale === 'de-DE' 
//   ? newsContent['de-DE'] 
//   : locale === 'fr-FR' 
//   ? newsContent['fr-FR'] 
//   : ''

  // const { title, synopsis, imageUrl } = newsContent;
    return (
      <div className={styles.newscard}>
        <div
          // style={{ backgroundImage: `url(${imageUrl})` }}
          style={{ backgroundImage: `url()` }}
          className={styles.newscardimg}
        ></div>
        <div className={styles.newscarddetails}>
          <div className={styles.newscardname}>
            {/* <h3>{t.title}</h3> */}
            <h3>{'title'}</h3>
          </div>
          <div className={styles.newscardauthor}>
            {/* <span>{synopsis}</span> */}
            <span>{'synopsis'}</span>
          </div>
        </div>
      </div>
    );
  }
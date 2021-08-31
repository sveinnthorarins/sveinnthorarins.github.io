import styles from './codinglanguagetag.module.scss';

const langTypescript = { title: 'TypeScript', style: styles.typescript };
const langPixijs = { title: 'PixiJS', style: styles.pixijs };
const langJavascript = { title: 'JavaScript', style: styles.javascript };
const langCpp = { title: 'C++', style: styles.cpp };

const languageLookup: { [key: string]: { title: string, style: string } } = {
  // entries only need to be lowercase since keys from props get converted to lowercase -> languageLookup[item.toLowerCase()]
  'typescript': langTypescript,
  'ts': langTypescript,
  'pixijs': langPixijs,
  'pixi': langPixijs,
  'html': { title: 'HTML', style: styles.html },
  'css': { title: 'CSS', style: styles.css },
  'javascript': langJavascript,
  'js': langJavascript,
  'cpp': langCpp,
  'c++': langCpp,
};

export default function CodingLanguageTag(props: { codeLangOrTech: string, className?: string }) {
  
  return (
    <div className={`${styles.language} ${props.className} ${languageLookup[props.codeLangOrTech.toLowerCase()] ? languageLookup[props.codeLangOrTech.toLowerCase()].style : undefined}`}>
      {languageLookup[props.codeLangOrTech.toLowerCase()] ? languageLookup[props.codeLangOrTech.toLowerCase()].title : props.codeLangOrTech}
    </div>
  );
}

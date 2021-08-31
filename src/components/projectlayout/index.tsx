import styles from './projectlayout.module.scss';
import { PropsWithChildren, Children, isValidElement } from 'react';
import Link from 'next/link';
import TextSection from '@/components/textsection';
import TextSectionTitle from '@/components/textsection/title';
import TextSectionText from '@/components/textsection/text';
import Footer from '@/components/footer';
import CodingLanguageTag from '@/components/codinglanguagetag';

type ProjectLayoutProps = {
  title: string,
  codeLangOrTech: string[],
  infoLinks?: {
    github?: string,
    liveDemo?: string,
  }
};

export default function ProjectLayout(props: PropsWithChildren<ProjectLayoutProps>) {
  
  return (
    <section className={styles.project}>
      <div style={{ textAlign: 'left' }}>
        <Link href="/#projects">
          <a className={styles.backlink}
            ><svg viewBox="0 0 20 15"><path d="M 7 1 L 1 8 M 1 8 L 7 14" /></svg
            ><span>Back to homepage</span
          ></a>
        </Link>
      </div>
      <TextSection>
        <TextSectionTitle>{props.title}</TextSectionTitle>
        <div className={styles.languages}>
          {props.codeLangOrTech.map((item, idx) => {
            return <CodingLanguageTag codeLangOrTech={item} key={idx} />;
          })}
        </div>
        <div className={styles.info}>
          {props.infoLinks?.liveDemo ? <a href={props.infoLinks.liveDemo} target="_blank" rel="noreferrer">Live demo</a> : undefined}
          {props.infoLinks?.github ? <a href={props.infoLinks.github} target="_blank" rel="noreferrer">GitHub repo</a> : undefined}
        </div>
        {props.children && Children.map(props.children, (child) => {
          if (isValidElement(child) && child.type === 'p') return <TextSectionText {...child.props}>{child.props.children}</TextSectionText>;
          return child;
        })}
      </TextSection>
      <Footer />
    </section>
  );
}

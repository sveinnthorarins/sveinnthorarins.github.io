// Component imports
import Head from 'next/head';
import Introduction from '@/components/introduction';
import TextSection from '@/components/textsection';
import TextSectionTitle from '@/components/textsection/title';
import TextSectionText from '@/components/textsection/text';
import Showcase from '@/components/showcase';
import ShowcaseCard from '@/components/showcase/card';
import KattisSolvedProblems from '@/components/kattissolvedproblems';
import Footer from '@/components/footer';
// Photo imports
import antsimPhoto from '@/public/antsimulation.jpg';
import mssmPhoto from '@/public/console-icon.jpg';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Sveinn Thorarinsson</title>
        <meta name="description" content="Personal Portfolio Website" /> {/* description of page, shows up on google search result */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Introduction />
        <TextSection id="projects">
          <TextSectionTitle>Personal Projects</TextSectionTitle>
          <TextSectionText>
            In my spare time I enjoy turning my ideas and curiosities into personal programming projects. 
            Sometimes the projects make my life easier in some way and other times they are just for the purpose of fun and learning. 
            Most of these personal programming endeavours of mine are publicly accessible on <a href="https://github.com/sveinnthorarins" rel="noreferrer" target="_blank">my GitHub</a>. 
            Here are some of the best ones that I&apos;ve chosen to showcase:
          </TextSectionText>
          <Showcase>
            <ShowcaseCard title="Ant Foraging Simulation" href="/project/ant-foraging-simulation" imageSrc={antsimPhoto} imageAlt="Ant simulation project in action" />
            <ShowcaseCard title="Minecraft Server Sleep Manager" href="/project/minecraft-server-sleep-manager" imageSrc={mssmPhoto} imageAlt="Console application icon" />
          </Showcase>
        </TextSection>
        <TextSection>
          <TextSectionTitle>Solved Coding Problems</TextSectionTitle>
          <TextSectionText>
            I also love taking a crack at solving complex coding problems.
            The feeling you get when you finally solve an extremely hard problem that you&apos;ve been thinking about for days is just so thrilling!
            I&apos;ve found that the best sources of such problems are online judge platforms for competitive programming.
            Here below you can see a daily-updated list of the problems I&apos;ve solved (using C++) on the online judge platform <a href="https://www.kattis.com/" rel="noreferrer" target="_blank">Kattis</a>:
          </TextSectionText>
          <KattisSolvedProblems />
        </TextSection>
        <Footer />
      </main>
    </div>
  );
}

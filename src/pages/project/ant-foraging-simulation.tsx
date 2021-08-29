import Head from 'next/head';
import Image from 'next/image';
import ProjectLayout from '@/components/projectlayout';
import TextSectionHeading from '@/components/textsection/heading';
import greenParticlesPhoto from '@/public/greenparticles.jpg';
import blueParticlesPhoto from '@/public/blueparticles.jpg';
import orangeParticlesPhoto from '@/public/orangeparticles.jpg';
import antSensorsPhoto from '@/public/antsensors.jpg';
import antCirclePhoto from '@/public/antcircle.jpg';
import antCircleSensorsPhoto from '@/public/antcircleandsensors.jpg';

export default function ProjectAntForagingSimulation() {
  return (
    <div>
      <Head>
        <title>Ant Foraging Simulation - Sveinn Thorarinsson</title>
        <meta name="description" content="An ant foraging simulation where the ants use pheromones to help each other find food and find their way home." /> {/* description of page, shows up on google search result */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProjectLayout 
          title="Ant Foraging Simulation" 
          codeLangOrTech={["TypeScript", "PixiJS", "HTML", "CSS"]} 
          infoLinks={{ liveDemo: "https://sveinnthorarins.github.io/ant-simulation", github: "https://github.com/sveinnthorarins/ant-simulation" }}
        >
          <p>
            This project is a web visualization of an ant foraging simulation where the ants use pheromones to help each other find food and find their way home.
            The simulation logic is entirely coded from scratch, including all the physics and movement logic.
            The visualization consists of the map (dark area is out of bounds), the anthill, 60 ants and three types of circular particles.
          </p>
          <TextSectionHeading>Particle types</TextSectionHeading>
          <p>
            The green particles are food, while the blue and orange ones are pheromones. 
            The ants lay down blue particles as they wander away from their anthill. Ants carrying food can use these blue particles to guide their way home.
            Similarly, the ants lay down orange particles as they pick up food and carry it away. Ants looking for food can use these orange particles to help them find it.
            The pheromones diffuse over time, indicated by their particles getting larger and more transparent, until they&apos;ve fully evaporated and disappear.
          </p>
          <div style={{ maxHeight: "5em", margin: "0 -0.2em", display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ maxWidth: "7.5em", maxHeight: "5em", margin: "0 0.2em", borderRadius: "1.5em", overflow: "hidden" }}>
              <Image src={greenParticlesPhoto} alt="Green food particles"/>
            </div>
            <div style={{ maxWidth: "7.5em", maxHeight: "5em", margin: "0 0.2em", borderRadius: "1.5em", overflow: "hidden" }}>
              <Image src={blueParticlesPhoto} alt="Blue pheromone particles"/>
            </div>
            <div style={{ maxWidth: "7.5em", maxHeight: "5em", margin: "0 0.2em", borderRadius: "1.5em", overflow: "hidden" }}>
              <Image src={orangeParticlesPhoto} alt="Orange pheromone particles"/>
            </div>
          </div>
          <TextSectionHeading>Interactivity</TextSectionHeading>
          <p>
            Three elements of the simulation can be interacted with; the map, the anthill and the food. 
            The map can be changed with an erase brush and a pencil.
            The anthill can be moved to another location.
            Lastly, the user can spawn in food before the simulation begins.
            If no food has been added when the simulation starts, it will automatically spawn the maximum amount of food in random locations.
          </p>
          <TextSectionHeading>Idea and technology</TextSectionHeading>
          <p>
            I became instantly inspired to make this project after stumbling upon a few YouTube videos of different ant simulations people had created.
            None of the simulations displayed in the YouTube videos were accessible to the viewers, they were all closed-source and programmed as a desktop program or using a game engine.
            This motivated me even more and I knew I wanted my simulation visualization to be an interactive website, accessible to everyone.
          </p>
          <p>
            After carefully comparing all the web rendering libraries out there I decided on using <a href="https://pixijs.com/" target="_blank" rel="noreferrer">PixiJS</a>.
            Since I had never worked with the library before and had no idea how it worked I decided to code the project in TypeScript and use NodeJS for the development repository.
            This way I could install PixiJS as an npm package, import it into my project and get the sweet IntelliSense and TypeScript typing to help me out.
            I then used Rollup to bundle together the compiled TypeScript code into one JavaScript bundle that the HTML page can easily link to.
          </p>
          <TextSectionHeading>Biggest challenges</TextSectionHeading>
          <p>
            Making a large visualization project using a rendering library I&apos;ve never seen before was definitely a challenge.
            However, I&apos;m a fast learner and I can&apos;t help but feel that the whole process went extremely well.
            Probably in large part due to the fact that <a href="https://pixijs.com/" target="_blank" rel="noreferrer">PixiJS</a> has great documentation and active forums with all sorts of tips.
            The most challenging part with regards to rendering was making sure it was performant since the total number of particles at any given time in the simulation can be up to 25000.
          </p>
          <p>
            The ants&apos; movement logic was one of the biggest challenges and is very cleverly coded.
            Each ant samples three circular areas in front of it for the pheromones it&apos;s looking for.
            Looping over all the thousands of pheromones and checking if they were in a particular area proved to be too slow.
            To solve this I implemented a grid system where the whole map is divided into a grid (rows and columns).
            Each entry in the grid then has its own data structure and contains the pheromones that are placed within that segment of the map.
            This allows us to loop only over the pheromones in the grid segments that the sampling area covers.
          </p>
          <p>
            The ant then goes in the direction of the sampling area that contains the strongest concentration of pheromones (they lose strength over time as they diffuse).
            If no pheromones are found in the sampled areas the ant simply wanders forward randomly.
            Also, the ant does not consider sampling areas that are out of bounds.
            If all the forward areas are out of bounds the ant will instead sample areas to its left, right and backwards.
            If none of those areas contain pheromones the ant will turn randomly to one of those areas, to prevent it from going forward and out of bounds.
          </p>
          <p>
            Lastly, the ant is equipped with a vision radius. When a food particle is inside that radius the ant is able to walk directly towards it and pick it up.
            Similarly, when the anthill is within the vision radius the ant is able to walk directly towards it and return the food it carries.
          </p>
          <div style={{ maxHeight: "5em", margin: "0 -0.2em", display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ maxWidth: "7.5em", maxHeight: "5em", margin: "0 0.2em", borderRadius: "1.5em", overflow: "hidden" }}>
              <Image src={antSensorsPhoto} alt="Ant sensors"/>
            </div>
            <div style={{ maxWidth: "7.5em", maxHeight: "5em", margin: "0 0.2em", borderRadius: "1.5em", overflow: "hidden" }}>
              <Image src={antCirclePhoto} alt="Ant vision range"/>
            </div>
            <div style={{ maxWidth: "7.5em", maxHeight: "5em", margin: "0 0.2em", borderRadius: "1.5em", overflow: "hidden" }}>
              <Image src={antCircleSensorsPhoto} alt="Ant vision range and sensors"/>
            </div>
          </div>
        </ProjectLayout>
      </main>
    </div>
  );
}

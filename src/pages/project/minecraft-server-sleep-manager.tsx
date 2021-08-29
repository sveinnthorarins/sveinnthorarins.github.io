import ProjectLayout from '@/components/projectlayout';
import TextSectionHeading from '@/components/textsection/heading';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minecraft Server Sleep Manager - Sveinn Thorarinsson</title>
        <meta name="description" content="Console-application for Windows that enables a Minecraft server to be on-demand. Server turns on when pinged and shuts down when no players are playing on it." /> {/* description of page, shows up on google search result */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProjectLayout
          title="Minecraft Server Sleep Manager"
          codeLangOrTech={['C++']}
          infoLinks={{ github: 'https://github.com/sveinnthorarins/Minecraft-Server-Sleep-Manager' }}
        >
          <p>
            This project is a Windows console application that enables a Minecraft server to be on-demand.
            The application achieves this by listening to activity on the server&apos;s port.
            Upon starting the application it begins listening to the server&apos;s port and will only start the server when someone pings it or tries to connect to it.
            After starting the server the application will scan established connections every 30 minutes.
            If no established connections are found (i.e. no players playing on the server) it will shut down the server and continue where it began (listening to server&apos;s port).
          </p>
          <p>
            The application is programmed for the use of a Minecraft server but can possibly be applied to other types of servers.
            It reads information about the server from the standard Minecraft server configuration file.
            The stopping of the server is performed via RCON and thus follows Minecraft&apos;s RCON protocol.
            This would all likely need to be changed if the application were to be used for another type of server.
          </p>
          <TextSectionHeading>Idea and technology</TextSectionHeading>
          <p>
            I got the idea for this project when I was hosting a Minecraft server for me and my friends on a spare computer.
            I didn&apos;t want the computer to be running the server and using resources unless it was absolutely needed.
            This also gave me a reliable way of restarting the server to make sure it was always performing at its best.
          </p>
          <p>
            The application is pretty basic and coded in just one C++ file.
            It uses the Windows libraries ws2_32 (Windows Sockets 2) and iphlpapi.
          </p>
          <TextSectionHeading>Biggest challenges</TextSectionHeading>
          <p>
            This project is the first I&apos;ve programmed using Windows libraries and that was the biggest challenge.
            Reliably spawning a process, creating sockets for listening to and sending network activity as well as retrieving a list of the computer&apos;s endpoints.
          </p>
          <p>
            Sending an RCON packet was also a challenge but one that I managed to overcome easily with documentation about Minecraft&apos;s RCON protocol.
          </p>
        </ProjectLayout>
      </main>
    </div>
  );
}

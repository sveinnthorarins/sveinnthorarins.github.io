import { useEffect, useRef } from 'react';


export default function FallingStarsVisualization(props: { className: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function update() {
      try {
        // @ts-ignore // this is a global variable defined by our .js source file that belongs to the visualization
        if (FallingStarsGameData) FallingStarsGameData.updateContainer(containerRef.current);
      } catch (error) { // ReferenceError, that is, the .js source file hasn't executed fully and created the global variable
        setTimeout(() => update(), 100); // another timeout until update has completed...
      }
    }
    update();
  }, [containerRef]);
  
  return <div className={props.className} ref={containerRef}></div>
}

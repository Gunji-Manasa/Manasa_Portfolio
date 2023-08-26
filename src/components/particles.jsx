
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">
      

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        particles: {
      move: {
        bounce: false,
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 }
      }
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#000000"
          },
          particles: {
            color: {
              value: "#fff"
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#000"
          },
          particles: {
            color: {
              value: "#fff"
            }
          }
        }
      }]
    }}
    />
    </div>
  );
}
export default Particle;
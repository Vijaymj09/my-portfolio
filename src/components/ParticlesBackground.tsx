import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        preset: "links",
        background: {
          color: "#000000",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      }}
    />
  );
};

export default ParticlesBackground;

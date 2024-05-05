import type { ISourceOptions } from "@tsparticles/engine";

const theme = {
  particleColor: "#E44805",
  linkColor: "#B41817",
  zindex: {
    value: -50,
  },
  background: {
    color: "#0F0909",
  },
};

export const particlesConfigInteractive: ISourceOptions = {
  key: "parallax",
  name: "Parallax",
  particles: {
    zIndex: {
      value: -50,
    },
    number: {
      value: 50,
    },
    color: {
      value: theme.particleColor,
    },
    shape: {
      type: "square",
      fill: false,
      close: true,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.9,
      },
      animation: {
        enable: true,
        speed: 3,
        sync: true,
      },
    },
    size: {
      value: {
        min: 1,
        max: 10,
      },
      animation: {
        enable: true,
        speed: 30,
        sync: true,
      },
    },
    links: {
      enable: true,
      distance: 200,
      color: theme.linkColor,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          smooth: 10,
          force: 50,
        },
      },
      onClick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 400,
      },
    },
  },
  background: theme.background,
};

export const particlesConfigUninteractive: ISourceOptions = {
  key: "parallax",
  name: "Parallax",
  particles: {
    zIndex: {
      value: -50,
    },
    number: {
      value: 60,
      density: {
        enable: true,
      },
    },
    color: {
      value: theme.particleColor,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 3,
        sync: false,
      },
    },
    size: {
      value: {
        min: 1,
        max: 10,
      },
      animation: {
        enable: true,
        speed: 20,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: theme.linkColor,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
  interactivity: {
    events: {},
    modes: {},
  },
  background: theme.background,
};

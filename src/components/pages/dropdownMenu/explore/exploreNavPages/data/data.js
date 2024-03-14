// object for intro component
const intro = {
  title: "Topics",
  intro: "Browse popular topics on GitHub.",
};

// array of object for topics cart
const topics = [
  {
    id: 1,
    name: "TypeScript",
    image:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    id: 2,
    name: "Unity",
    image:
      "https://store-speedtree-com.exactdn.com/site-assets/uploads/Unity-Logo-White.png?strip=all&lossy=1&quality=73&zoom=1&resize=1200%2C720&ssl=1",
    description:
      "Unity is a game engine used to create 2D/3D video games, and simulations for computers, consoles, and mobile devices.",
  },
  {
    id: 3,
    name: "Terminal",
    image:
      "https://raw.githubusercontent.com/github/explore/d92924b1d925bb134e308bd29c9de6c302ed3beb/topics/terminal/terminal.png",
    description:
      "The terminal is an interface in which you can type and execute text-based commands.",
  },
];

// all featured topics
const featuredTopics = [
  {
    id: 1,
    logo: "",
    title: "3D",
    description:
      "3D refers to the use of three-dimensional graphics, modeling, and animation in various industries.",
  },
  {
    id: 2,
    logo: "https://raw.githubusercontent.com/github/explore/8be26d91eb231fec0b8856359979ac09f27173fd/topics/ajax/ajax.png",
    title: "Ajax",
    description:
      "Ajax is a technique for creating interactive web applications.",
  },
  {
    id: 3,
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png",
    title: "Angular",
    description: "Angular is an open source web application platform.",
  },
  {
    id: 4,
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aspnet/aspnet.png",
    title: "ASP.NET",
    description:
      "ASP.NET is a web framework for building modern web apps and services.",
  },
];

export { intro, topics, featuredTopics };

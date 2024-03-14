// object for intro component
const topicsTntro = {
  title: "Topics",
  intro: "Browse popular topics on GitHub.",
};

const trendingsTntro = {
  title: "Trending",
  intro: "See what the GitHub community is most excited about today.",
};

const collectionsTntro = {
  title: "Collections",
  intro:
    "Curated lists and insight into burgeoning industries, topics, and communities.",
};

// array of object for topics, trendings events, collections and sponsors
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

// array of object for collections cart
const collections = [
  {
    id: 1,
    name: "Game Engine",
    image: "",
    description: "Frameworks for building games across multiple platforms.",
  },
  {
    id: 2,
    name: "Learn to code",
    image:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/learn-to-code/learn-to-code.png",
    description: "Resources to help people learn to code",
  },
  {
    id: 3,
    name: "Pixel Art tolls",
    image:
      "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/pixel-art-tools/pixel-art-tools.png",
    description:
      "Creating pixel art for fun or animated sprites for a game? The digital artist in you will love these apps and tools!",
  },
];
// all featured Collections
const featuredCollections = [
  {
    id: 1,
    logo: "",
    title: "Clean code linters",
    description:
      "Make sure your code matches your style guide with these essential code linters.",
  },
  {
    id: 2,
    logo: "",
    title: "Open journalism",
    description:
      "See how publications and data-driven journalists use open source to power their newsroom and ensure information is reported fairly and accurately.",
  },
  {
    id: 3,
    logo: "",
    title: "Design essentials",
    description:
      "This collection of design libraries are the best on the web, and will complete your toolset for designing stunning products.",
  },
  {
    id: 4,
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/github-pages-examples/github-pages-examples.png",
    title: "GitHub Pages examples",
    description:
      "Fine examples of projects using GitHub Pages (https://pages.github.com).",
  },
];

export {
  // all page intro
  topicsTntro,
  trendingsTntro,
  collectionsTntro,

  // all page carts
  topics,
  collections,

  // all page featured carts
  featuredTopics,
  featuredCollections,
};

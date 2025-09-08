// components/data/projects.js

export const projects = [
  {
    slug: "flightfinder",
    logo: "/logos/flightfinder.png",
    title: "FlightFinder (Full Stack Flight Discovery App)",
    description:
      "A full-stack flight discovery app that makes travel planning easy and smart. FlightFinder uses real-world datasets, including Goibibo flights, airport codes, and CO₂ emissions. On the frontend, it calculates carbon emissions based on flight class and distance, helping users track environmental impact. The app also shows flight price history, applies randomized discounts for testing, and supports nearby airport search and airline logo matching. MongoDB stores all data, while Node.js and Express handle APIs. React creates a dynamic UI, Redux manages state efficiently, and Framer Motion adds smooth animations for a clean, interactive experience.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Framer Motion",
    ],
    github: "https://github.com/Mohansai-M/flight-finder",
    demo: "https://flight-finder-v2.vercel.app/",
    screenshots: [
      "/projects/flightfinder/flightfinder (1).png",
      "/projects/flightfinder/flightfinder (2).png",
      "/projects/flightfinder/flightfinder (3).png",
      "/projects/flightfinder/flightfinder (4).png",
      "/projects/flightfinder/flightfinder (5).png",
    ],
  },
  {
    slug: "linknest",
    logo: "/logos/linknest.png",
    title: "LinkNest (Full Stack Bookmarks App - In Progress)",
    description:
      "LinkNest is a modern bookmark manager that helps users save, categorize, and search links quickly. Built with Next.js and TypeScript for speed and scalability, it uses GraphQL for fast data queries and Redux for state management. Planned features include secure login, responsive design, and smooth animations using Framer Motion. LinkNest aims to provide a fast, simple, and visually appealing way to organize bookmarks across devices.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Framer Motion",
      "MongoDB",
    ],
    github: "https://github.com/Mohansai-M",
    demo: "https://mohansaim.vercel.app/",
    screenshots: ["/projects/comingSoon.png"],
  },
  {
    slug: "proofvault",
    logo: "/logos/proofvault.png",
    title: "ProofVault (Decentralized Certificate Storage)",
    description:
      "ProofVault is a Web3 app for uploading, storing, and verifying certificates securely on the blockchain. Built with React for the frontend and Solidity with Hardhat for smart contracts, it uses IPFS for decentralized storage to ensure data cannot be tampered with. Smart contracts guarantee certificates are permanent and verifiable. Users can connect via WalletConnect or MetaMask for seamless blockchain interaction. Framer Motion adds smooth animations, making the app user-friendly while combining blockchain security with a clean interface.",
    tech: [
      "React",
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "IPFS",
      "Web3.js",
      "MetaMask",
      "WalletConnect",
      "Framer Motion",
    ],
    github: "https://github.com/Mohansai-M/proof-vault",
    screenshots: [
      "/projects/proofvault/proofvault (1).png",
      "/projects/proofvault/proofvault (2).png",
      "/projects/proofvault/proofvault (3).png",
      "/projects/proofvault/proofvault (4).png",
      "/projects/proofvault/proofvault (5).png",
    ],
    video: "https://www.loom.com/share/714332964d214fa4a2db39c5f15b421d",
  },
];

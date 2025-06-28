import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  infosys,
  Jetking,
  threejs,
  Devtern,
  Stocks,
  Cryptoo,
  ipfs,
  Marketplace,
  go,solidity,ethereum,python,hyperledger,sql,Hardhat,doctor

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Smart Contract",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "go",
    icon: go,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
  {
    name: "hyperledger",
    icon: hyperledger,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "hardhat",
    icon: Hardhat,
  },
];

const experiences = [
  {
    title: "Web Development Internship",
    company_name: "Dev-Tern",
    icon: Devtern,
    iconBg: "#383E56",
    date: "March 2024- April 2024",
    points: [
      "Developing and maintaining web applications using HTML,CSS, Javascript  and other related technologies.",
      "Collaborating with teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain Development",
    company_name: "Jet-King InfoTrain",
    icon: Jetking,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Currently pursuing a Blockchain Development certification at Jetking with hands-on experience in building decentralized applications (DApps).",
      "Gained in-depth knowledge of blockchain fundamentals, consensus algorithms, smart contracts, and decentralized networks.",
      "Proficient in writing and deploying smart contracts using Solidity on Ethereum-compatible networks.",
      
    ],
  },
  {
    title: "Creating Smart Contracts with Ethereum",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#383E56",
    date: " April 2025 - june 2025",
    points: [
      "Understood Solidity features like functions, modifiers, inheritance, and events",
      "Gained practical knowledge of Ethereum blockchain architecture, gas mechanism, and smart contract lifecycle.",
      "Used Remix IDE for writing and debugging smart contracts and MetaMask for interacting with contracts via a wallet.",

    ],
  },
  // {
  //   title: "",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];



const projects = [
  {
    name: "FUTURE FLARE - Stocks Forecasting",
    description:
      "Future Flare is a stock forecasting app that predicts future prices using historical data from the Yahoo Finance API. Built with HTML, CSS, JavaScript, and SQLAlchemy, it uses the Prophet ML model for predictions. Users can input stock symbols to view trend-based forecasts.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Prophet Model",
        color: "green-text-gradient",
      },
      {
        name: "SQLAlchemy",
        color: "pink-text-gradient",
      },
    ],
    image: Stocks,
    source_code_link: "https://github.com/dineshbabu2203/Stocks-Forecasting-.git",
  },
  {
    name: "CRYPTO-Dapp",
    description:
      "This Web3.0 dApp allows users to interact with Ethereum smart contracts via MetaMask using a React (Vite) frontend styled with Tailwind CSS. It supports decentralized transactions without a backend, offering a fast, responsive UI. The app is developer-friendly and easily extendable.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Hardhat",
        color: "green-text-gradient",
      },
    ],
    image:Cryptoo ,
    source_code_link: "https://github.com/dineshbabu2203/Crypt0_dapp/tree/main/project_web3.0-main",
  },
  {
    name:"IPFS-Decentralized Storage",
    description:
      "  A full-stack React dApp to upload files to IPFS via Pinata and store the hash on Ethereum Users can interact with a smart contract using MetaMask to save and retrieve IPFS hashes.Built with React, ethers.js, Solidity, and IPFS (Pinata) on the Sepolia testnet.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "sepolia-Testnet",
        color: "pink-text-gradient",
      },
    ],
    image: ipfs,
    source_code_link: "https://github.com/dineshbabu2203/IPFS_Storage.git",
  },
  {
    name:"MARKETPLACE",
    description:
      " A DApp for listing, purchasing, and transferring items on Ethereum using React, Ethers.js, and Solidity.Uses can connect MetaMask, list items with ETH price, buy items, and transfer ownership.Core features include wallet integration, smart contract interaction, and real-time item management.",
    tags: [
      {
        name: "Hardhat",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "sepolia-Testnet",
        color: "pink-text-gradient",
      },
    ],
    image: Marketplace,
    source_code_link: "https://github.com/dineshbabu2203/IPFS_Storage.git",
  },
  {
    name:"DOCTOR-BOOKING-SYSTEM:- Hyperledger",
    description:
      "A full-stack doctor appointment system using MongoDB for managing users and bookings.Payments are securely recorded on a private Hyperledger Fabric blockchain using chaincode.This ensures tamper-proof, auditable, and transparent transaction history.",
    tags: [
      {
        name: "Hyperledger",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
       {
        name: "Node.js",
        color: "green-text-gradient",
      }
    ],
    image:doctor ,
    source_code_link: "https://github.com/dineshbabu2203/Doctor-Appoint-Booking-System-",
  },
];

export { services, technologies, experiences,  projects };
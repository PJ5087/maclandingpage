MacBook Pro Landing Page
A modern landing page showcasing the MacBook Pro, built using React, Three.js, and React Three Fiber. 
This project includes a 3D model of the MacBook Pro and features a dynamic animation of the screen opening as users scroll through the page.

Features
3D model of the MacBook Pro using GLTF.
Interactive animations of the MacBook screen.
Smooth scrolling experience with scroll-triggered animations.
Responsive design for different screen sizes.
Modern, minimalistic UI with text animations and masking effects.

Tech Stack
React: Front-end framework for building user interfaces.
React Three Fiber: A React renderer for Three.js.
Three.js: 3D library for WebGL.
@react-three/drei: Useful helpers and abstractions for React Three Fiber.
Tailwind CSS: Utility-first CSS framework for styling.

Setup
Prerequisites
Node.js
NPM or Yarn

Installation
.Clone the repository
.Navigate to the project firectory
.npm istall
.npm run dev


FILE STRUCTURE

macbook-pro-landing-page/
│
├── public/                     # Public assets (textures, GLTF files)
│   └── mac.glb                 # 3D model of the MacBook Pro
│
├── src/                        
│   │   └── MacContainer.jsx    # Component for rendering the MacBook 3D model
│   ├── App.jsx                 # Main app file
│   ├── style.css               # Custom styles
│   └── index.js                # Entry point for React
│
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation



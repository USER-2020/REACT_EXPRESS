// MyThree.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './mythree.css';

function MyThree({ className }) {
  const refContainer = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, cube;

    const init = () => {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      refContainer.current && refContainer.current.appendChild(renderer.domElement);

      // Cube
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    };

    const handleResize = () => {
      // Update camera aspect ratio and renderer size on window resize
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Initialize the scene
    init();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className={`containerThreejs ${className}`}ref={refContainer}></div>;
}

export default MyThree;

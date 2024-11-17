import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import planeVertexShader from '../shaders/Basic/vert.glsl';
import planeFragmentShader from '../shaders/Basic/frag.glsl';


const ThreeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const PlaneShaderMaterial = new THREE.ShaderMaterial({
        vertexShader: planeVertexShader,
        fragmentShader: planeFragmentShader,
  
    });
    const planeGeometry = new THREE.PlaneGeometry();
   
    const plane = new THREE.Mesh(planeGeometry, PlaneShaderMaterial);
    scene.add(plane);

    camera.position.z = 5;


    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeCanvas;  // <-- C'est l'export par défaut

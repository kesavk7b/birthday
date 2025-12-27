import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const SmallTexturedText = () => {
  const mountRef = useRef(null);

  useEffect(() => {
	if (!mountRef.current) return;

	const width = mountRef.current.clientWidth || 300;
	const height = mountRef.current.clientHeight || 150;

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0xeeeeee);

	const camera = new THREE.OrthographicCamera(
		width / -2,
		width / 2,
		height / 2,
		height / -2,
		0.1,
		1000
	);
	camera.position.z = 100;

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(width, height);

	// 🛑 double check before appending
	if (mountRef.current && !mountRef.current.contains(renderer.domElement)) {
		mountRef.current.appendChild(renderer.domElement);
	}

	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(10, 10, 10);
	scene.add(light);

	const textureLoader = new THREE.TextureLoader();
	const texture = textureLoader.load(
		"https://threejsfundamentals.org/threejs/resources/images/wall.jpg"
	);

	const fontLoader = new FontLoader();
	fontLoader.load(
		"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
		(font) => {
		const geometry = new TextGeometry("Kesav", {
			font,
			size: 50,
			height: 10,
			bevelEnabled: true,
			bevelThickness: 2,
			bevelSize: 2,
			bevelSegments: 2,
		});

		geometry.computeBoundingBox();
		if (!geometry.boundingBox) return;

			const centerX =
				-0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
			const centerY =
				-0.5 * (geometry.boundingBox.max.y - geometry.boundingBox.min.y);

			const material = new THREE.MeshStandardMaterial({ map: texture });
			const textMesh = new THREE.Mesh(geometry, material);
			textMesh.position.set(centerX, centerY, 0);

			scene.add(textMesh);

			renderer.render(scene, camera);
		}
	);

	return () => {
		// 🛑 cleanup safely
		if (mountRef.current?.contains(renderer.domElement)) {
			mountRef.current.removeChild(renderer.domElement);
		}
		renderer.dispose();
	};
}, []);


  return <div ref={mountRef} className="w-full h-20" />;
};

export default SmallTexturedText;

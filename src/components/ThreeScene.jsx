import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import modelUrl from "../assets/models/cake1.glb";
import music from "../assets/audios/hbd.mp3";

const ThreeScene = () => {
  const mountRef = useRef(null);
  const audioRef = useRef(null);
  const unmuteTimerRef = useRef(null);

  // 🎶 Background music (try autoplay muted → unmute)
  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.volume = 0.4;
    audio.muted = true;

    audioRef.current = audio;

    audio
      .play()
      .then(() => {
        // unmute a bit later (may still be blocked on some browsers)
        unmuteTimerRef.current = setTimeout(() => {
          if (audioRef.current) audioRef.current.muted = false;
        }, 100);
      })
      .catch(() => {
        // Autoplay may be blocked — that's normal.
        // You can optionally start on first interaction if you want.
      });

    return () => {
      if (unmuteTimerRef.current) clearTimeout(unmuteTimerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // ✅ cache mount (prevents null removeChild crash)
    const mount = mountRef.current;

    // ---------------- SCENE ----------------
    const scene = new THREE.Scene();

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(3, 3, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // ---------------- GRADIENT SKY ----------------
    const skyGeo = new THREE.SphereGeometry(50, 32, 32);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color("#ffd6e0") },
        bottomColor: { value: new THREE.Color("#fff1f2") },
        offset: { value: 33 },
        exponent: { value: 0.6 },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          float mixValue = max(pow(max(h, 0.0), exponent), 0.0);
          gl_FragColor = vec4(mix(bottomColor, topColor, mixValue), 1.0);
        }
      `,
    });

    const sky = new THREE.Mesh(skyGeo, skyMat);
    scene.add(sky);

    // ---------------- THEME AUTO CHANGE (optional) ----------------
    const themes = [
      { top: "#ffd6e0", bottom: "#fff1f2" },
      { top: "#cdb4db", bottom: "#e0f2fe" },
      { top: "#bbf7d0", bottom: "#ecfeff" },
      { top: "#fde68a", bottom: "#fff7ed" },
    ];
    let themeIndex = 0;
    let themeTimer = 0;

    // ---------------- LIGHTS ----------------
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    const candleLight = new THREE.PointLight(0xffc857, 1.4, 10);
    candleLight.position.set(0, 2.5, 0);
    scene.add(candleLight);

    // ---------------- CONTROLS ----------------
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.target.set(0, 1, 0);

    // ---------------- SPARKLES ----------------
    const sparkleGeo = new THREE.BufferGeometry();
    const sparkleCount = 300;
    const sparklePos = new Float32Array(sparkleCount * 3);

    for (let i = 0; i < sparklePos.length; i++) {
      sparklePos[i] = (Math.random() - 0.5) * 10;
    }

    sparkleGeo.setAttribute("position", new THREE.BufferAttribute(sparklePos, 3));

    const sparkleMat = new THREE.PointsMaterial({
      color: 0xffb703,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
    });

    const sparkles = new THREE.Points(sparkleGeo, sparkleMat);
    scene.add(sparkles);

    // ---------------- MODEL ----------------
    let cake = null;
    let baseY = 0;
    let float = 0;

    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      cake = gltf.scene;
      cake.scale.set(0.4, 0.8, 0.4);

      const box = new THREE.Box3().setFromObject(cake);
      const center = box.getCenter(new THREE.Vector3());
      cake.position.sub(center);

      const size = box.getSize(new THREE.Vector3());
      baseY = size.y / 2;
      cake.position.y = baseY;

      scene.add(cake);
    });

    // ---------------- ANIMATION ----------------
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (cake) {
        float += 0.01;
        cake.position.y = baseY + Math.sin(float) * 0.08;
        cake.rotation.y += 0.003;
      }

      // sparkles
      sparkles.rotation.y += 0.0005;

      // candle flicker
      candleLight.intensity = 1.2 + Math.sin(Date.now() * 0.01) * 0.2;

      // gentle camera motion
      camera.position.x = 3 + Math.sin(Date.now() * 0.0005) * 0.2;
      camera.lookAt(0, 1, 0);

      // theme auto change
      themeTimer += 0.05;
      if (themeTimer > 5) {
        themeTimer = 0;
        themeIndex = (themeIndex + 1) % themes.length;
        sky.material.uniforms.topColor.value.set(themes[themeIndex].top);
        sky.material.uniforms.bottomColor.value.set(themes[themeIndex].bottom);
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // ---------------- RESIZE ----------------
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // ---------------- CLEANUP (SAFE) ----------------
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);

      controls.dispose();
      renderer.dispose();

      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Birthday text overlay */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          width: "100%",
          textAlign: "center",
          fontSize: "1.6rem",
          fontWeight: "bold",
          color: "#ff4d6d",
          textShadow: "0 0 20px rgba(255,77,109,0.6)",
          zIndex: 10,
          animation: "pulse 2s infinite",
          pointerEvents: "none",
        }}
      >
        🎉 Happy Birthday 🎉
        <div>Suganthi</div>
      </div>

      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default ThreeScene;

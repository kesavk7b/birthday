import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Test = ()=>{
    const ref = useRef();
    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,100/100,0.1,1000);
        camera.position.z = 2;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(100,100);
        renderer.setAnimationLoop( animate );
        ref.current.appendChild(renderer.domElement);
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color:"green"});
        const cube = new THREE.Mesh(geometry,material);
        scene.add(cube);

        return ()=>{
            ref.current.removeChild(renderer.domElement);
        }
        function animate() {
            cube.rotation.x=0.4;
            cube.rotation.y=0.4;
            renderer.render( scene, camera );
        }
    },[])
    return (
        <div ref={ref} ></div>
    )
}

export default Test;

import * as THREE from 'https://unpkg.com/three@0.160.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.160.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.160.1/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
scene.add(light);

const loader = new GLTFLoader();
loader.load('model/modelo.glb', function(gltf) {
  scene.add(gltf.scene);
}, undefined, function(error) {
  console.error(error);
});

camera.position.set(0, 1.5, 3);
const defaultCameraPos = camera.position.clone();
const defaultTarget = controls.target.clone();

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Botones
document.getElementById("fullscreenBtn").addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

let fondoClaro = true;
document.getElementById("bgToggleBtn").addEventListener("click", () => {
  fondoClaro = !fondoClaro;
  scene.background = new THREE.Color(fondoClaro ? 0xeeeeee : 0x222222);
});

document.getElementById("resetViewBtn").addEventListener("click", () => {
  camera.position.copy(defaultCameraPos);
  controls.target.copy(defaultTarget);
  controls.update();
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("ui").classList.toggle("active");
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

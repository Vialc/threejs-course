import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new THREE.Scene();

window.addEventListener("resize", () => {
  //Pega o novo tamanho da tela
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //Atualiza o novo AspectRatio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //Atualiza o novo tamanho do renderer (New RenderSize)
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

//Mesh
const geomtery = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const purpleMesh = new THREE.Mesh(geomtery, material);

scene.add(purpleMesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;

scene.add(camera);

const canvas = document.querySelector(".draw")

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(aspect.width, aspect.height);

//Orbit Controls
const controls = new OrbitControls(camera, canvas);
// controls.autoRotate = true;
// controls.autoRotateSpeed = 6;

controls.enableDamping = true;
controls.dampingFactor = 0.01;


//Clock
const clock = new THREE.Clock();

//animate
const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  controls.update();

  // purpleMesh.rotation.x = elapsedTime;
  purpleMesh.rotation.y = elapsedTime;

  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
}

animate();



import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new THREE.Scene();

// LoadingManager
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log("On Start");
}
loadingManager.onLoad = () => {
  console.log("On Load");
}
loadingManager.onProgress = () => {
  console.log("On Progress");
}
loadingManager.onError = () => {
  console.log("On Error");
}

//textureLoader
const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load("/texture/color.jpg");

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
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ map: colorTexture});
const purpleMesh = new THREE.Mesh(geometry, material);

scene.add(purpleMesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 1.5;

scene.add(camera);

const canvas = document.querySelector(".draw")

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(aspect.width, aspect.height);

//Orbit Controls
const controls = new OrbitControls(camera, canvas);


//Clock
const clock = new THREE.Clock();

//animate
const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  controls.update();

  // purpleMesh.rotation.x = elapsedTime;
  // purpleMesh.rotation.y = elapsedTime;

  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
}

animate();



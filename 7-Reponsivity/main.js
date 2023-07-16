// Código de exemplo de uma implementação de responsividade. A função é chamada
// sempre que a janela é redimensionada, e atualiza o tamanho do canvas.

// import "./style.css";
// import * as THREE from "three";

//Instance new Scene
// const scene = new THREE.Scene();

//Create Mesh
// const geomtery = new THREE.BoxGeometry(0.5, 0.5, 0.5);
// const material = new THREE.MeshBasicMaterial({ color: "purple" });
// const purpleMesh = new THREE.Mesh(geomtery, material);
// purpleMesh.position.x = 1;

//add mesh to scene
// scene.add(purpleMesh, yellowMesh, greenMesh, whiteMesh, pinkMesh, blueMesh);



//create Camera
// const aspect = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };
// const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
// camera.position.z = 2.5;

// add camera to scene
// scene.add(camera);

//Renderer
// const canvas = document.querySelector(".draw");
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(aspect.width, aspect.height);

//Clock Class
// const clock = new THREE.Clock();


//Para deixar a tela responsiva
//resize
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

// const animate = () => {
//   //GetElapsedTime
//   const elapsedTime = clock.getElapsedTime();

//   //Look At
//   greenMesh.lookAt(new THREE.Vector3(cursor.x, cursor.y, 1));

//   //Renderer
//   renderer.render(scene, camera);

//   //RequestAnimationFrame
//   window.requestAnimationFrame(animate);
// };
// animate();

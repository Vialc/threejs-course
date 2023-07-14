console.log(THREE)

//SCENE Objects(Mesh) Camera Renderer

//Scene
const scene = new THREE.Scene();
//Objects (Mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
//Camera
//aspect ratio é o segundo argumento da função PerspectiveCamera.
//Ele é calculado dividindo a largura pela altura. width/height
//nesse exemplo, será usado a largura e altura da janela do navegador
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio); //near value is 1, and far value is 2000
camera.position.z = 3;
camera.position.y = 0;
camera.position.x = 0;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

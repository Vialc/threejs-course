console.log(THREE)

//SCENE Objects(Mesh) Camera Renderer

//Scene
const scene = new THREE.Scene();

//Group
const group = new THREE.Group();
//Objects (Mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.z = 1;
// scene.add(mesh);

//mesh two
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({ color: "green" });
const mesh2 = new THREE.Mesh(geometry2, material2);

mesh2.position.y = 2;
// scene.add(mesh2);

group.add(mesh, mesh2);
group.position.x = 3;
scene.add(group);

//Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
//Camera
//aspect ratio é o segundo argumento da função PerspectiveCamera.
//Ele é calculado dividindo a largura pela altura. width/height
//nesse exemplo, será usado a largura e altura da janela do navegador
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio); //near value is 1, and far value is 2000
camera.position.z = 4;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

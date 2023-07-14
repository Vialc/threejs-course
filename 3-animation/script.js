//SCENE Mesh Camera Renderer

//SCENE
var scene = new THREE.Scene()

//MESH
var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({ color: 'purple' })
var mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//CAMERA

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
)
camera.position.z = 5
scene.add(camera)

//RENDERER
var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.draw'),
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera);

//clock class
const clock = new THREE.Clock()

amimate = () => {
  const elapsedTime = clock.getElapsedTime()

  //update rotation on X axis
  mesh.rotation.x = elapsedTime

  //renderer
  renderer.render(scene, camera)

  //call animate function on every frame
  requestAnimationFrame(amimate)
}

amimate()

// let positionX = mesh.position.x

// const animateOutside = () => {
//   console.log('animateOutside')

//   positionX = mesh.position.x

//   console.log(mesh.position.x)
//   mesh.rotation.x += 0.01
//   mesh.position.x += 0.01
//   mesh.position.z += 0.01
//   requestAnimationFrame(animateOutside)
//   renderer.render(scene, camera)

//   positionX = mesh.position.x
// }

// const animateInside = () => {
//   console.log('animateInside')
//   positionX = mesh.position.x
//   console.log(mesh.position.x)

//   mesh.rotation.x -= 0.01
//   mesh.position.x -= 0.01
//   mesh.position.z -= 0.01
//   requestAnimationFrame(animateInside)
//   renderer.render(scene, camera)

//   positionX = mesh.position.x
// }



// const animation = () => {
//   console.log(mesh.position.x)
//   while (positionX < 0.02) {
//     animateOutside()

//   }

//   while (positionX > 0.01) {
//     animateInside()
//   }
// }

// animation()



import {initScene} from './scene.js';
const canvas = document.getElementById('canvas');
const engine = new BABYLON.Engine(canvas,true);

window.addEventListener("resize", function () {
  engine.resize();
});

(async()=>{
  const scene = new BABYLON.Scene(engine);
  await initScene(scene);
  engine.runRenderLoop(()=>{
    scene.render();
  })
})();
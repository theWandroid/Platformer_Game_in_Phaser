import Phaser from 'phaser'
import PlayScene from './scenes/PlayScene'
import PreloadScene from './scenes/PreloadScene'
import MenuScene from './scenes/MenuScene'


const WIDTH = 1920;
const HEIGHT = 1080;
const BOY_POSITION = {x: WIDTH * 0.1, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BOY_POSITION
}

const Scenes = [PreloadScene, MenuScene, PlayScene];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene)

const config = {

  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: initScenes(),
  scale: {
    mode: Phaser.Scale.FIT
  }
}

new Phaser.Game(config);
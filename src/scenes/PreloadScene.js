import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('clouds', '../../assets/clouds.png');
    this.load.image('snow', '../../assets/snow.png');
    this.load.image('hospital', '../../assets/hospital.png');
    this.load.image('ground', '../../assets/ground.png');
    this.load.spritesheet('player', '../../assets/dude.png', {
      frameWidth: 90, frameHeight: 137, spacing: 5,
    })
  }

  create() {
    this.scene.start('MenuScene');
  }
}

export default PreloadScene;
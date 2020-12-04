
import BaseScene from './BaseScene';


class PlayScene extends BaseScene {
  constructor(config) {
    super('PlayScene', config);
    this.config = config;
    this.player = null;
  }

  create() {
    this.createBG();
    this.createPlayer();
    //this.createPlatforms();
    this.createAnims();
    //this.createPause();
    this.createInputs();
  }
  update() {
    const { left, right, up } = this.cursors;

    if (left.isDown) {
      this.player.setVelocityX(-200);
      this.player.anims.play('left', true);
    } else if (right.isDown) {
      this.player.setVelocityX(200);
      this.player.anims.play('right', true);
    }else if(up.isDown){
      this.player.setVelocityY(-330);
      this.player.anims.play('turn');
    }
    else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

  }

  createBG() {
    this.add.image(0, 0, 'clouds').setOrigin(0);
    this.add.image(0, 0, 'hospital').setOrigin(0);
  }
  createPlayer() {
    this.player = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, 'player').setOrigin(0);
    this.player.body.gravity.y = 600;
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
  }

  createAnims() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }

  /*
  createPlatforms() {

    let platforms = this.physics.add.staticGroup();
    platforms.create(0, 900, 'ground').setOrigin(0);
    this.physics.add.collider(this.player, this.platforms);
  }
*/

  createInputs() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

}
export default PlayScene;
import Phaser from 'phaser';
import { HomeScene } from './scenes/home';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [HomeScene]
};

export class YourGameName extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

const game = new YourGameName(config);

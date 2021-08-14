import 'phaser';
import { environment } from '../enviroments/enviroment';

export class HomeScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'HomeScene'
    });
  }

  init(): void {
    // TODO
  }

  preload(): void {
    // TODO
  }

  create(): void {
    // TODO
    this.add.text(260, 280, `${environment.title} - ${environment.env}`);
  }

  update(): void {
    // TODO
  }
}

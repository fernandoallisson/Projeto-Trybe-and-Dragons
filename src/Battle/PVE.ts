import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, protected enemys: SimpleFighter[] | any) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.enemys.length > 0) {
      this.player.attack(this.enemys[0]);
      if (this.enemys[0].lifePoints <= 0) {
        this.enemys.shift();
      }
      this.enemys.forEach((enemy: any) => enemy.attack(this.player));
    }
    return this.enemys.length <= 0 ? 1 : -1;
  }
}

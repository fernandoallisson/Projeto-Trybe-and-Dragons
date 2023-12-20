import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, protected enemy: Fighter) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.enemy.lifePoints > 0) {
      this.player.attack(this.enemy);
      this.enemy.attack(this.player);
    }
    const response = this.enemy.lifePoints < 0 ? 1 : -1;
    return response;
  }
}
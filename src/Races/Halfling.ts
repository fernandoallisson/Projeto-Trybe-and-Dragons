import Race from './Race';

export default class Halfling extends Race {
  private readonly _maxLife = 60;
  private static _createdRacesInstances = 0;
 
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}
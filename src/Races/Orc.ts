import Race from './Race';

export default class Orc extends Race {
  private readonly _maxLife = 74;
  private static _createdRacesInstances = 0;
 
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}
import Race from './Race';

export default class Dwarf extends Race {
  private readonly _maxLife = 80;
  private static _createdRacesInstances = 0;
 
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}
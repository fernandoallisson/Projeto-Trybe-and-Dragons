import Race from './Race';

export default class Elf extends Race {
  private readonly _maxLife = 99;
  private static _createdRacesInstances = 0;
 
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import SimpleFighter from './Fighter/SimpleFigther';
import Race, { Elf } from './Races';
import randomNumber from './Utils/randomNumber';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strenght: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;
  private _name: string;

  constructor(name: string) {
    const randomNumberConstructor = randomNumber();
    this._name = name;
    this._dexterity = randomNumberConstructor;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strenght = randomNumber();
    this._defense = randomNumber();
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomNumber(),
    };
    this._name = name;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strenght;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }
  
  get name(): string {
    return this._name;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    this._lifePoints = damage > 0 ? this._lifePoints - damage : this._lifePoints - 1;
    this._lifePoints = this._lifePoints <= 0 ? -1 : this._lifePoints;

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strenght);
  }

  levelUp():void {
    this._maxLifePoints += randomNumber();
    this._strenght += randomNumber();
    this._dexterity += randomNumber();
    this._defense += randomNumber();
    this._energy.amount = 10;
    this._maxLifePoints = this._maxLifePoints > this._race.maxLifePoints
      ? this._race.maxLifePoints : this._maxLifePoints;
  }
}
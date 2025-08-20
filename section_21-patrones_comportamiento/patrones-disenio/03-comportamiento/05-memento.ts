/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto, de manera que el objeto
 * pueda ser retaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder volver a él en un
 * * futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

import { COLORS } from '../helpers/colors.ts';

class GameMemento {
  private level: number;
  private health: number;
  private position: string;

  constructor(level: number, health: number, position: string) {
    this.level = level;
    this.health = health;
    this.position = position;
  }

  getLevel() {
    return this.level;
  }

  getHealth() {
    return this.health;
  }

  getPosition() {
    return this.position;
  }
}

class Game {
  private level: number = 1;
  private health: number = 100;
  private position: string = 'inicio';

  constructor() {
    console.log(
      `Jugando en el nivel: ${this.level} 
      salud: ${this.health} 
      posición: ${this.position}`
    );
  }

  save(): GameMemento {
    return new GameMemento(this.level, this.health, this.position);
  }

  play(level: number, health: number, position: string): void {
    this.level = level;
    this.health = health;
    this.position = position;

    console.log(
      `Jugando en el nivel ${this.level} 
      salud: ${this.health} 
      posición: ${this.position}`
    );
  }

  restore(memento: GameMemento): void {
    this.level = memento.getLevel();
    this.health = memento.getHealth();
    this.position = memento.getPosition();

    console.log(
      `\n%cProgreso restaurado
      
      %cRestauración en el nivel ${this.level} 
      salud: ${this.health} 
      posición: ${this.position}`,
      COLORS.yellow,
      COLORS.blue
    );
  }
}

class GameHistory {
  private mementos: GameMemento[] = [];

  push(memento: GameMemento): void {
    this.mementos.push(memento);
  }

  pop(): GameMemento | null {
    return this.mementos.pop() ?? null;
  }
}

/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una familia de algoritmos, los
 * encapsulan y los hace intercambiables.
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede cambiar el tiempo de
 * * ejecución y se quiere delegar la responsabilidad de la implmentacion a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

import { COLORS } from '../helpers/colors.ts';

/**
 * Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios patitos compiten en una
 * carrera y cada uno tiene su propia estrategia de movimiento (por ejemplo: nadar, volar o caminar).
 */

interface MovementStrategy {
  move(): void;
}

// Estrategia #1 - Rápida pero costosa
class SwimFast implements MovementStrategy {
  move(): void {
    console.log('%cEl pato nada rápidamente sobre el agua', COLORS.blue);
  }
}

// Estrategia #2 - No rápida pero no tan costosa
class FlyOverWater implements MovementStrategy {
  move(): void {
    console.log('%cEl pato vuela elegantemente sobre el agua', COLORS.pink);
  }
}

// Estrategia #3 - Lenta y económica
class WalkClumsily implements MovementStrategy {
  move(): void {
    console.log('%cEl pato camina torpemente por la orrilla', COLORS.green);
  }
}

// Consumidor de estrategias
class Duck {
  private name: string;
  private movementStrategy: MovementStrategy;

  constructor(name: string, strategy: MovementStrategy) {
    this.name = name;
    this.movementStrategy = strategy;

    console.log(
      `%c${this.name} %clista para competir`,
      COLORS.green,
      COLORS.white
    );
  }

  performanceMove() {
    console.log(`${this.name} se prepara para moverse...`);

    this.movementStrategy.move();
  }

  setMovementStrategy(strategy: MovementStrategy) {
    this.movementStrategy = strategy;
    console.log(`${this.name} cambió de estrategia.`);
  }
}

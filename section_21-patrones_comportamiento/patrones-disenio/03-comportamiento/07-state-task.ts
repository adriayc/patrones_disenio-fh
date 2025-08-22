/**
 * ! Patrón State
 * Este patrón permite a un objecto cambiar su comportamiento cuando su estado interno cambia.
 *
 * * Es útil cuando un objeto tiene un comportamiento que depende de su estado y debe cambiar
 * * su comportamiento en tiempo de ejecución dependiendo de ese estado.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

import { COLORS } from '../helpers/colors.ts';
import { sleep } from '../helpers/sleep.ts';

/**
 * Objetivo: Implementar el patrón State para simular el funcionamiento de un puerta automatica.
 *  La puerta tiene diferentes estados:
 *   - Cerrada
 *   - Abriéndose
 *   - Abierto
 *   - Cerrándose
 *  Su comportamiento varia dependiendo del estado acutal.
 */

// Interface State
interface State {
  name: string;

  open(): void;
  close(): void;
}

// Clase Context - AutomaticDoor
class AutomaticDoor {
  private state: State;

  constructor() {
    this.state = new Closed(this);
  }

  setState(state: State): void {
    this.state = state;
    console.log(`%cEstado cambiando a: ${this.state.name}`, COLORS.green);
  }

  open(): void {
    this.state.open();
  }

  close(): void {
    this.state.close();
  }

  getStateName(): string {
    return this.state.name;
  }
}

// Estado 1: Cerrado
class Closed implements State {
  public name: string;
  private door: AutomaticDoor;

  open(): void {
    console.log('Abriendo la puerta...');

    // TODO: Implementar lógica para colocar el estado en abriendo la puerta (Opening)
  }

  close(): void {
    console.log('La puerta ya está cerrada.');
  }
}

// Estado 2: Abriéndose
class Opening implements State {
  public name: string;
  private door: AutomaticDoor;

  constructor(door: AutomaticDoor) {
    // TODO: Asignar door y name = Abriendo
    this.afterOpen();
  }

  private async afterOpen() {
    await sleep(3000);

    console.log('La puerta se ha abierto.');
    // TODO: Implementar lógica para abrir la puerta (open)
  }

  open(): void {
    console.log('La puerta ya se está abriendo.');
  }

  close(): void {
    console.log('La puerta no puede cerrarse mientras se abre.');
  }
}

// Estado 3 - Abierto
class Open implements State {
  public name: string;
  private door: AutomaticDoor;

  constructor(door: AutomaticDoor) {
    this.name = 'Abierta';
  }

  open(): void {
    console.log('La puerta ya está abierta.');
  }

  close(): void {
    console.log('Cerrando la puerta...');
    // TODO: Implementar lógica para cerrar la puerta (Closing)
  }
}

// Estado 4 - Cerrándose
class Closing implements State {
  public name: string;
  private door: AutomaticDoor;

  constructor(door: AutomaticDoor) {
    this.door = door;
    this.name = 'Cerrándose';
  }

  open(): void {
    console.log('Dectectando movimiento. Abriendo la puerta nuevamente...');
    // TODO: Implementar lógica para abrir la puerta (Opening)
  }

  close(): void {
    console.log('La puerta se ha cerrado.');
    // TODO: Immplementar lógica para cerrar la puerta (Closed)
  }
}

// Código Cliente para probar el patrón State
async function main() {
  const door = new AutomaticDoor();

  let selectOption: string | null = '3';

  do {
    console.clear();
    console.log(`Estado actual: ${door.getStateName()}`);
    selectOption = prompt(
      `
            1. Abrir puerta
            2. Cerrar puerta
            3. Salir 

            Seleccionar una opción:`
    );

    switch (selectOption) {
      case '1':
        door.open();
        break;
      case '2':
        door.close();
        break;
      case '3':
        console.log('Saliendo del simulado...');
        break;
      default:
        console.log('Opción no válida.');
        break;
    }

    await sleep(2000);
  } while (selectOption !== '3');
}

main();

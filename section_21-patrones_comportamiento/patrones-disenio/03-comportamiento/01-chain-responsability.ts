/**
 * ! Patrón Chain of Responsability
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo
 * de un cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no se sabe de
 * * antemano qué tipo de procesamiento se necesita o en qué orden pero se sabe que se
 * * necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

import { COLORS } from '../helpers/colors.ts';

interface Handler {
  setNext(handler: Handler): Handler;
  handler(request: string): void;
}

abstract class BaseHandler implements Handler {
  private nextHandler?: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handler(request: string): void {
    if (this.nextHandler) {
      this.nextHandler.handler(request);
    }
  }
}

// Soporte básico
class BasicSupport extends BaseHandler {
  override handler(request: string): void {
    if (request === 'básico') {
      console.log(
        'Soporte básico: %cResolviendo problema básico',
        COLORS.green
      );
      return;
    }

    console.log(
      '%cSoporte básico: Pasando el problema a soporte avanzado',
      COLORS.purple
    );
    super.handler(request);
  }
}

class AdvancedSupport extends BaseHandler {
  override handler(request: string): void {
    if (request === 'avanzado') {
      console.log(
        'Soporte avanzado: %cResolviendo problema avanzado',
        COLORS.yellow
      );
      return;
    }

    console.log(
      '%cSoporte avanzado: Pasando el problema a soporte experto',
      COLORS.violet
    );
    super.handler(request);
  }
}

class ExpertSupport extends BaseHandler {
  override handler(request: string): void {
    if (request === 'experto') {
      console.log(
        'Soporte experto: %cResolviendo problema experto',
        COLORS.orange
      );
      return;
    }

    console.log(
      '%cSoporte experto: No hay nada que hacer... bye bye!!!',
      COLORS.red
    );
  }
}

function main() {
  const basicSupport = new BasicSupport();
  const advancedSupport = new AdvancedSupport();
  const expertSupport = new ExpertSupport();

  basicSupport.setNext(advancedSupport).setNext(expertSupport);

  basicSupport.handler('básico');
  basicSupport.handler('avanzado');
  basicSupport.handler('experto');
  basicSupport.handler('nuclear');
}

main();

/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece una relación
 * de uno a muchos entre un objeto, llamado sujeto, y otros objetos, llamados obsevadores,
 * que son notificados y actualizados automáticamente por el sujeto cuando se producen
 * cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén pendientes de lso cambios.
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

import { COLORS } from '../helpers/colors.ts';

interface Observer {
  notify(videoTitle: string): void;
}

class YouTubeChannel {
  private subscribers: Observer[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  subscribe(observer: Observer): void {
    this.subscribers.push(observer);

    console.log(`Nuevo suscriptor al canal %c${this.name}`, COLORS.green);
  }

  unsubscribe(observer: Observer): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);

    console.log(`Un suscriptor se ha dado de baja ${this.name}`);
  }

  uploadVideo(videoTitle: string): void {
    console.log(
      `Canal ${this.name} ha subido un nuevo video %c${videoTitle}`,
      COLORS.green
    );

    for (const subscriber of this.subscribers) {
      subscriber.notify(videoTitle);
    }
  }
}

class subscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  notify(videoTitle: string): void {
    console.log(
      `%c${this.name} %cha sido notificado: %cNuevo video ${videoTitle}`,
      COLORS.blue,
      COLORS.white,
      COLORS.yellow
    );
  }
}

function main() {
  const channel = new YouTubeChannel('Concinado con Adriano');

  const karla = new subscriber('Karla');
  const diana = new subscriber('Diana');
  const diego = new subscriber('Diego');

  channel.subscribe(karla);
  channel.subscribe(diana);

  channel.uploadVideo('Receta de Tamales de Maiz');

  channel.subscribe(diego);

  channel.uploadVideo('Receta de Chuletas de Cerdo');

  channel.unsubscribe(diana);

  channel.uploadVideo('Receta Sopa de Verduras');

  channel.unsubscribe(diego);

  channel.uploadVideo('Receta Carne Asada');

  channel.unsubscribe(karla);

  channel.uploadVideo('Receta Pollo a la Plancha');

  console.log('\n\n');
}

main();

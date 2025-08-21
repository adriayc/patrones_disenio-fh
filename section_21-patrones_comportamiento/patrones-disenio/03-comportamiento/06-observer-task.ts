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

// Interface Observer
interface Observer {
  update(weatherDate: string): void;
}

// Clase Subject - WeatherStation
// TODO: Terminar la implementación
class WeatherStation {
  // observers = [];
  // weatherData = 'Soleado';

  // Agregar un Observer
  subscribe(observer: Observer): void {
    // TODO: añadir observer

    console.log(
      `%cNueva aplicación suscrita al sistema meteorológico.`,
      COLORS.green
    );
  }

  // Eliminar un Observer
  unsubscribe(observer: Observer): void {
    // TODO: eliminar observer

    console.log(`%cUna aplicación se ha dado de baja.`, COLORS.red);
  }

  // Actualizar el clima y notificar a todos los Observers
  setWeather(weatherData: string): void {
    console.log(`\nClima actualizado: %c${weatherData}`, COLORS.blue);

    // TODO: actualizar clima y notificar a todos los Observers con el método notifyObservers
  }

  // Notificar a todos los Observers
  private notifyObservers(): void {
    // TODO: implementar método
    throw new Error('Method not implemented.');
  }
}

// Clase Observer - WeatherApp
class WeatherApp implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Recibir actualización del clima
  update(weatherDate: string): void {
    console.log(
      `%c${this.name} %cha recibido notificación del clima: %c${weatherDate}`,
      COLORS.red,
      COLORS.white,
      COLORS.yellow
    );
  }
}

// Código Cliente para Probar
function main(): void {
  const weatherStation = new WeatherStation();

  // Crear aplicaciones
  const reactWeatherApp = new WeatherApp('React WeatherApp');
  const angularWeatherApp = new WeatherApp('Angular WeatherApp');
  const weatherTrackerApp = new WeatherApp('Weather Tracker App');

  // Suscribir aplicaciones a la estación meteorológica
  weatherStation.subscribe(reactWeatherApp);
  weatherStation.subscribe(angularWeatherApp);

  // Actualizar el clima
  weatherStation.setWeather('Lluvioso');

  // Agregar una nueva aplicación
  weatherStation.subscribe(weatherTrackerApp);
  weatherStation.setWeather('Nublado');

  // Aplicación se da de baja
  weatherStation.unsubscribe(angularWeatherApp);
  weatherStation.setWeather('Tormenta Elétrica');
}

main();

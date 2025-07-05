/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objexto compartidos para soportar
 * eficientemente grandes cantidades de objectos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir la cantidad de
 * * memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

import { COLORS } from '../helpers/colors.ts';

interface Location {
  display(coordinates: { x: number; y: number }): void;
}

// Flyweight
class LocationIcon implements Location {
  private type: string; // hospital, escuela, parque
  private iconImage: string; // imagen del marcador

  constructor(type: string, iconImage: string) {
    this.type = type;
    this.iconImage = iconImage;
  }

  display(coordinates: { x: number; y: number }): void {
    console.log(
      `Coords: ${this.type} en ${coordinates.x}, ${coordinates.y} con ícono %c[${this.iconImage}]`,
      COLORS.green
    );
  }
}

// Fábrica de Flyweight
// {
//     escuela: assets/school.png,
//     hospital: assts/hospital.png,
// }

class LocationFactory {
  private icons: Record<string, LocationIcon> = {};

  // Escuela, hospital, parque, etc
  getLocationIcon(type: string): LocationIcon {
    if (!this.icons[type]) {
      const iconImage = `imagen_de_${type.toLowerCase()}.png`;
      this.icons[type] = new LocationIcon(type, iconImage);
    }

    return this.icons[type];
  }
}

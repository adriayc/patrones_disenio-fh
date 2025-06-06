/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos realacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objectos indivicuales directamente, creamos fábricas que
 * producen un conjunto de objetos realacionados.
 *
 * * Es útil cuando necesitas crear objectos que son parte de una familia y
 * * quieres asegurarte de que estos objetos se compementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from '../helpers/colors.ts';

/**
 * !Instrucciones:
 * 1. Complete las Clases de Productos:
 *      * ElectricCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto elétrico".
 *      * GasCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto de combustión".
 *      * ElectricEngine debe implementar Engine y mostrar el mensaje "Arrancando motor elétrico".
 *      * GasEngine debe implementar Engine y mostrar el mensaje "Arrancando motor de combustión".
 *
 * 2. Complete las Clases de Fábricas:
 *      * ElecticVehicleFactory debe crear un ElectricGar y un ElectricEngine.
 *      * GasVehicleFactory debe crear un GasCar y un GasEngine.
 *
 * 3. Pruebe el Código:
 *      * Ejecuten el código para asegurarse de que cada fábrica produce el tipo correcto de vehiculo y motor.
 */

// 1. Interfaces de Vehicle y Engine
interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

// 2. Clases Concretas de Productos
class ElectricCar {
  // Implementación del método assemble
  // 'Ensamblando un auto eléctrico'
}

class GasCar {
  // Implementación del método assemble
  // 'Ensamblando un auto de combustión'
}

class ElectricEngine {
  // Implementación del método start
  // 'Arrancando motor eléctrico'
}

class GasEngine {
  // Implementación del método start
  // 'Arrancando motor de combustión'
}

// 3. Interfaz de la Fábrica Abstracta
interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// 4. Clases Concretas de Fábricas
class ElectricVehicleFactory implements VehicleFactory {
  // Implementación de los métodos createVehicle y createEngine
}

class GasVehicleFactory implements VehicleFactory {
  // Implementación de los métodos createVehicle y createEngine
}

// 5. Código Cliente
function main(factory: VehicleFactory) {
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

// Pruebas
console.log('Creando vehículo %celétrico:', COLORS.green);
main(new ElectricVehicleFactory());

console.log('\nCreando vehículo de %ccombustión:', COLORS.yellow);
main(new GasVehicleFactory());

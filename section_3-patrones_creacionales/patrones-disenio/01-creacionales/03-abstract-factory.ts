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
 * El propósito del Abstract Factory es crear familias de objetos relacionados
 * (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 * de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando hamburguesa de %cPollo', COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando hamburguesa de %cRes', COLORS.red);
  }
}

class Water implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de %cAgua', COLORS.blue);
  }
}

class Soda implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de %cGaseosa', COLORS.pink);
  }
}

interface RestaurantFactory {
  createHamburger(): Hamburger;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }

  createDrink(): Drink {
    return new Soda();
  }
}

class HealthyFoodRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }

  createDrink(): Drink {
    return new Water();
  }
}

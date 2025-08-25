/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos en estructuras de
 * árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales y a sus composiciones
 * * de manera uniforme, y la estructura de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 */

import { COLORS } from '../helpers/colors.ts';

// 1. Interfaz MenuComponent
// Define el método `showDetails`, que implementarán los ítems y categorias de menú.
interface MenuComponent {
  showDetails(indent?: string): void;
}

// 2. Clase MenuItem
// Representa un item individual del menú, como un platillo o una bebida.
class MenuItem implements MenuComponent {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  showDetails(indent?: string): void {
    console.log(
      `${indent}- ${this.name}: %c$${this.price.toFixed(2)}`,
      COLORS.green
    );
  }
}

// 3. Class MenuCategory
// Representa un categoría de menú que puede contener otros ítems o subcategorias.
class MenuCategory implements MenuCategory {
  private name: string;
  private items: MenuComponent[];
  // private items: MenuComponent[] = [];

  constructor(name: string) {
    this.name = name;
    this.items = [];
  }

  add(item: MenuComponent | MenuComponent[]): void {
    if (Array.isArray(item)) {
      this.items.push(...item); // Agregar un array de items: [1, 2, 3, 4, 5]
      return;
    }
    this.items.push(item); // Agregar un item
  }

  showDetails(indent: string = ''): void {
    console.log(`%c${indent}+ ${this.name}`, COLORS.blue);
    this.items.forEach((item) => item.showDetails(indent + ' '));
  }
}

// 4. Código Cliente para Probar el Composite
function main() {
  // Crear items individuales
  const salad = new MenuItem('Ensalada', 5.99);
  const soup = new MenuItem('Sopa de tomate', 4.99);
  const steak = new MenuItem('Bistec', 15.99);
  const soda = new MenuItem('Refresco', 6.5);
  const dessert = new MenuItem('Pastel de chocolate', 6.5);
  const coffee = new MenuItem('Café', 1.99);
  const tea = new MenuItem('Té', 0.99);

  // Crear categorias de menú y añadir items
  const appetizers = new MenuCategory('Entradas');
  appetizers.add(salad);
  appetizers.add(soup);

  const mainCourse = new MenuCategory('Plato Principal');
  mainCourse.add(steak);

  const beverages = new MenuCategory('Bebidas');

  const hotBeverages = new MenuCategory('Calientes');
  const coldBeverages = new MenuCategory('Frías');

  coldBeverages.add(soda);

  hotBeverages.add(coffee);
  hotBeverages.add(tea);

  beverages.add([coldBeverages, hotBeverages]);

  const desserts = new MenuCategory('Postres');
  desserts.add(dessert);

  // Crear un menú principal que contiene todas las categorías
  const mainMenu = new MenuCategory('Menú Principal');
  mainMenu.add([appetizers, beverages, desserts, mainCourse]);
  // mainMenu.add(mainCourse);
  // mainMenu.add(beverages);
  // mainMenu.add(desserts);

  // Mostrar la estructura completa del menú
  console.log('Menú del Restaurante:');
  mainMenu.showDetails();
}

main();

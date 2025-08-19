/**
 * ! Patrón Iterador
 * Este patrón permite recorrer los elementos de una colección sin exponer la estructura
 * interna de la colección.
 *
 * * Es útil cuando se necesita recorrer una coleccíón de elementos sin importar cómo se
 * * almacena los elementos.
 *
 * https://refactoring.guru/es/design-patterns/iterator
 */

// Clase que representa un Carta de la baraja
class Card {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}

// Clase que representa la colección de Cartas
class CardCollection {
  private cards: Card[] = [];

  addCard(card: Card): void {
    this.cards.push(card);
  }

  // TODO: Implementación del iterador usando Symbol.iterator
  // Symbol.iterator(): IterableIterator<Card>

  // TODO: Implementación del iterator usando Generadores
  // *getCard(): IterableIterator<Card>

  // TODO: Implementar nuestro propio iterator
}

// Código Cliente para probar el interior
function main() {
  const deck = new CardCollection();

  // Agregar algunas cartas a la colección
  deck.addCard(new Card('As de Corazones', 1));
  deck.addCard(new Card('Rey de Corazones', 13));
  deck.addCard(new Card('Reina de Corazones', 12));
  deck.addCard(new Card('Jota de Corazones', 11));

  // Recorrer la colección de orden usando for... of
  console.log('Recorriendo la colección de cartas:');
  for (const card of deck) {
    console.log(`Carta: ${card.name}, Valor: ${card.value}`);
  }
}

main();

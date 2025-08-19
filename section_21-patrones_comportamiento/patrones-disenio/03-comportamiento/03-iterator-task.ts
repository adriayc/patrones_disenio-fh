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

// Interface Iterador
interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
  current(): T | null;
}

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
  *[Symbol.iterator](): IterableIterator<Card> {
    yield* this.cards;
    // for (const card of this.cards) {
    //   yield card;
    // }
  }

  // TODO: Implementación del iterator usando Generadores
  *getCards(): IterableIterator<Card> {
    for (const card of this.cards) {
      yield card;
    }
  }

  // TODO: Implementar nuestro propio iterator
  getLength(): number {
    return this.cards.length;
  }

  getCardAt(index: number): Card | null {
    if (index >= 0 && index < this.cards.length) {
      return this.cards[index];
    }

    return null;
  }

  createIterator(): CardIterator {
    return new CardIterator(this);
  }
}

// Clase que representa al Iterador
class CardIterator implements Iterator<Card> {
  private collection: CardCollection;
  private position: number = 0;

  constructor(collection: CardCollection) {
    this.collection = collection;
  }

  next(): Card | null {
    if (this.hasNext()) {
      return this.collection.getCardAt(this.position++);
    }

    return null;
  }

  hasNext(): boolean {
    return this.position < this.collection.getLength();
  }

  current(): Card | null {
    return this.collection.getCardAt(this.position);
  }
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
  // - Usando Symbol.iterator
  //   for (const card of deck) {
  //     console.log(`Carta: ${card.name}, Valor: ${card.value}`);
  //   }
  // - Usando Generadores
  //   for (const card of deck.getCards()) {
  //     console.log(`Carta: ${card.name}, Value: ${card.name}`);
  //   }
  // - Usando nuestro porpio Iterator
  const iterator = deck.createIterator();

  while (iterator.hasNext()) {
    const card = iterator.next();

    if (card) {
      console.log(`Carta: ${card.name}, Value: ${card.name}`);
    }
  }
}

main();

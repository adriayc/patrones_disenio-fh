/**
 * ! Patrón Iterador
 * Este patrón permite recorrer los elementos de una colección sin exponer la estrucra
 * interna de la colección.
 *
 * * Es útil cuando se necesita recorrer una coleccíón de elementos sin importar cómo
 * * se almacena los elementos.
 *
 * https://refactoring.guru/es/design-patterns/iterator
 */

interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
  current(): T | null;
}

class Pokemon {
  public name: string;
  public type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}

class PokemonCollection {
  private pokemons: Pokemon[] = [];

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  getPokemonAt(index: number): Pokemon | null {
    if (index >= 0 && index < this.pokemons.length) {
      return this.pokemons[index];
    }

    return null;
  }

  getLength(): number {
    return this.pokemons.length;
  }

  // TODO
  createIterator() {
    throw new Error('No implemented.');
  }
}

class PokemonIterator implements Iterator<Pokemon> {}

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

// Clase que representa un Pokemon
class Pokemon {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}

// Clase que representa la colección de Pokemons
class PokemonCollection {
  private pokemons: Pokemon[] = [];

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  // TODO: Implemetación del iterator usando una función generadora
  // [*] Regresa una funcion generadora (o iterator)
  *getPokemons(): IterableIterator<Pokemon> {
    for (const pokemon of this.pokemons) {
      yield pokemon; // El operador yield se utiliza para pausar y reanudar una función de generador.
    }
  }

  // Implementacion del iterator usando un método con Symbol.iterator para haver quue la colección se iterable
  // yield* delega la responsabilidad de la iteración a la colección de Pokemons
  // TODO: *[Symbol.iterator]()
  *[Symbol.iterator](): IterableIterator<Pokemon> {
    yield* this.pokemons;
  }
}

// Código Cliente para probar el iterator con función generadora
function main(): void {
  const pokedex = new PokemonCollection();

  // Agregar Pokemons a la colección
  pokedex.addPokemon(new Pokemon('Pikachu', 'Elétrico'));
  pokedex.addPokemon(new Pokemon('Charmander', 'Fuego'));
  pokedex.addPokemon(new Pokemon('Squirtle', 'Agua'));
  pokedex.addPokemon(new Pokemon('Bulbasaur', 'Planta'));

  // Recorremos la colección usando for... of, gracias a la función generadora
  console.log('Recorriendo la colección de Pokemons:');
  //   for (const pokemon of pokedex.getPokemons()) {
  //     console.log(`Pokémon: ${pokemon.name}, Tipo: ${pokemon.type}`);
  //   }
  for (const pokemon of pokedex) {
    console.log(`Pokémon: ${pokemon.name}, Tipo: ${pokemon.type}`);
  }
}

main();

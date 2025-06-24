/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación, de tal forma
 * que ambas pueden variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

import { COLORS } from '../helpers/colors.ts';

interface Ability {
  user(): void;
}

class SwordAttack implements Ability {
  user(): void {
    console.log('Ataca con una %cespada ferozmente', COLORS.blue);
  }
}

class MagicSpell implements Ability {
  user(): void {
    console.log('Lanza un hechizo %cmágico poderoso', COLORS.green);
  }
}

abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract performAbility(): void;
}

class Warrior extends Character {
  override performAbility(): void {
    console.log('El guerrero está listo para luchar');
    this.ability.user();
  }
}

class Mage extends Character {
  override performAbility(): void {
    console.log('\nEl mago prepara su magia');
    this.ability.user();
  }
}

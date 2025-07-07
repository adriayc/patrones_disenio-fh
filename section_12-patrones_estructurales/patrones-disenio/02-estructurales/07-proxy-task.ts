/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir, se cre un objeto que
 * actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto, por ejemplo, para verificar si
 * * el cliente tiene permiso para acceder a ciertos métodos o propiedades.
 *
 *  https://refactoring.guru/es/design-patterns/proxy
 */

import { COLORS } from '../helpers/colors.ts';

// 1. Interfaz Document
interface Document {
  displayContent(user: User): void;
}

// 2. Clase que representa el Documento Confidencial - ConfidentialDocument
class ConfidentialDocument implements Document {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  displayContent(): void {
    console.log(`Contenido del documento: \n%c${this.content}\n`, COLORS.blue);
  }
}

// 3. Class Proxy - DocumentProxy
class DocumentProxy implements Document {
  private document: ConfidentialDocument;

  // TODO: private mustHaveRoles: string[];

  // TODO: Implementar el constructor de la clase DocumentProxy

  displayContent(user: User): void {
    // TODO: Implementar la lógica para verificar si el usario tiene permisos
    // Sólo si es admin puede ver el contenido
    // Caso contrario, mostrar un mensaje de acceso denegado:
    // EJ: `%cAcceso denegado. ${user.getName()}, no tienes permiso suficiente para ver este documento.`,
  }
}

// 4. Clase que representa al Usuario - User
class User {
  private name: string;
  private role: 'admin' | 'user';

  constructor(name: string, role: 'admin' | 'user') {
    this.name = name;
    this.role = role;
  }

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return this.role;
  }
}

// 5. Código Cliente para probar al Proxy
function main() {
  const confidentialDoc = new ConfidentialDocument(
    'Este es el contenido confidencial del documento.'
  );
  const proxy = new DocumentProxy(confidentialDoc);

  const user1 = new User('Carla', 'user');
  const user2 = new User('Adriano', 'admin');

  console.log('Intento de acceso del usuario 1:');
  proxy.displayContent(user1); // Deberia denegar el acceso

  console.log('\nIntento de acceso del usuario2:');
  proxy.displayContent(user2); //Debería permitir el acceso
}

main();

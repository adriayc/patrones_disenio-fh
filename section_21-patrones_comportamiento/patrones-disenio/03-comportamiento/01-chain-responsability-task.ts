/**
 * ! Patrón Chain of Responsability
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo
 * de un cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no se sabe de
 * * antemano qué tipo de procesamiento se necesita o en qué orden pero se sabe que se
 * * necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

// 1. Interfaz Approver
interface Approver {
  setNext(approver: Approver): Approver;
  approveRequest(amount: number): void;
}

// Clase Abstracta BaseApprover para manejar la cadena
abstract class BaseApprover implements Approver {
  private nextApprover: Approver | null = null;

  setNext(approver: Approver): Approver {
    this.nextApprover = approver;
    return approver;
  }

  // ! Este método debe de ser implementado por las subclases.
  abstract approveRequest(amount: number): void;

  protected next(amount: number): void {
    if (this.nextApprover) {
      this.nextApprover.approveRequest(amount);
      return;
    }

    console.log('Solicitud no puede ser aprovada.');
  }
}

// Clases Concretas de Aprobadores
class Supervisor extends BaseApprover {
  // TODO: Implementar el método approveRequest si el monto es menor o igual a 1000
  // TODO: Si el monto es mayor a 1000, pasar la solicitud al siguiente aprobador

  override approveRequest(amount: number): void {
    throw new Error('Method not implemented.');
  }
}

class Manager extends BaseApprover {
  // TODO: Implementar el método approveRequest si el monto es menor  o igual a 5000
  // TODO: Si el monto es mayor a 5000, pasar la solicitud al siguiente aprobador

  override approveRequest(amount: number): void {
    throw new Error('Method not implemented.');
  }
}

class Director extends BaseApprover {
  // TODO: Implementar el método approveRequest si el monto

  override approveRequest(amount: number): void {
    throw new Error('Method not implemented.');
  }
}

// 4. Código Cliente para probar la cadena de responsabilidades
function main() {
  const supervisor = new Supervisor(); // Supervisor: <= 1000
  const manager = new Manager(); // Manager: <= 5000
  const director = new Director(); // Director puede aprobar todo

  // Configurar la cadena de responsabilidades
  supervisor.setNext(manager).setNext(director);

  // Probar diferentes solicitudes de compra
  console.log('Solicitud de compra de $500:');
  supervisor.approveRequest(500);

  console.log('\nSolicitud de compra de $3000:');
  supervisor.approveRequest(3000);

  console.log('\nSolicitud de compra de $7000:');
  supervisor.approveRequest(7000);
}

main();

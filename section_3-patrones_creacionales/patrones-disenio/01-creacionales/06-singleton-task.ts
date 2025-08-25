/**
 * ! Singleton
 * Es un patrón de diseño creacional que garantiza que una clase tenga una única
 * instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el accceso a una única instancia de una clase,
 * * como por ejemplo, en un objeto de base de datos o en un objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from '../helpers/colors.ts';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Constructor privado para evitar instancias directas
  private constructor() {}

  // Método estático para obtener la instancia única
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log('\n%cConectado a la base de datos', COLORS.blue);
    }
    return DatabaseConnection.instance;
  }

  // Método para conectar a la base de datos
  public connect(): void {
    if (this.connected) {
      console.log('%cLa base de datos ya ha sido conectado', COLORS.red);
      return;
    }

    this.connected = true;
    console.log('%cLa base de datos ha sido conectado', COLORS.green);
  }

  // Método para desconectar de la base de datos
  public disconnect(): void {
    if (this.connected) {
      this.connected = false;
      console.log('%cLa base de datos ha sido desconectado', COLORS.yellow);
      return;
    }

    console.log(
      '%cNo existe una conexion activa a la base de datos',
      COLORS.red
    );
  }
}

// Pruebas
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Debería conectar a la base de datos

  const db2 = DatabaseConnection.getInstance();
  db1.connect(); // Debería mostrar que ya existe una conexión activa

  console.log('Son iguales:', db1 === db2); // Debería mostrar true

  db1.disconnect(); // Debería cerrar la conexión
  db2.disconnect();

  db2.connect(); // Ahora debería conectar de nuevo, ya que se cerró la anterior
}

main();

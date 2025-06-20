/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objectos o fuciones de manera dinámica, es decir, en tiempo
 * * de ejecución y no en tiempo de compilación.
 */

import { COLORS } from '../helpers/colors.ts';

// ! Salida esperada
// ! Colocar colores de log según el nivel
// * [INFO:2024-10-21:07] Aplicación iniciada correctamente.
// * [WARNING:2025-20-21:07] El uso de momoria está listo.
// * [ERROR:2025-10-21:07] Error de conexión a la base de datos.

function formatDate(date: Date): String {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empieza desde 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-$${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Función fábrica que crea un manejador de logs
type LogLevel = 'info' | 'warn' | 'error';

function createLogger(level: LogLevel) {
  // Retornar una función que recibe el "mensaje" como argumento
  // Completar: implementar el logger con formato y color para cada nivel
  return (message: string) => {
    const timestamp = formatDate(new Date());
    const prefix = {
      info: 'INFO',
      warn: 'WARNING',
      error: 'ERROR',
    };

    const logColor = {
      info: COLORS.blue,
      warn: COLORS.yellow,
      error: COLORS.red,
    };
    return console.log(
      `%c[${prefix[level]}:${timestamp}] ${message}`,
      logColor[level]
    );
  };
}

// Ejemplo de uso
function main() {
  const infoLogger = createLogger('info');
  const warnLogger = createLogger('warn');
  const errorLogger = createLogger('error');

  infoLogger('Aplicación inciada correctamente.');
  warnLogger('El uso de memoria está alto.');
  errorLogger('Error de conexión a la base de dato.');
}

main();

/**
 * ! Patrón Adapter
 * Permite que objetos con interfaces incompatibles trabajen juntos, también es muy util
 * para utilizar librerias de terceros en nuestra aplicación sin depender directamente
 * de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que necesitamos
 * * o cuando queremos crear una capa de abstracción para una librería de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

import { COLORS } from '../helpers/colors.ts';

// 1. Interfaz PaymentProcessor
interface PaymentProcessor {
  processorPayment(amount: number): void;
}

// 2. Clases de Servicios de Pago Externos
// Estas clases simulan los servicios externos de PyPal, Stripe y MercadoPago

class PayPalService {
  sendPayment(amount: number): void {
    console.log(`Procesando pago de $${amount} con %cPaypal`, COLORS.blue);
  }
}

class StripeService {
  makeCharge(amount: number): void {
    console.log(`Procesando pago de $${amount} con %cStripe`, COLORS.purple);
  }
}

class MercadoPagoService {
  pay(amount: number): void {
    console.log(
      `Procesando pago de $${amount} con %cMercadoPago`,
      COLORS.yellow
    );
  }
}

// 3. Clases Adaptadoras

// Adaptador para PayPal
class PayPalAdapter {
  // TODO: Implementar la interfaz PaymentProcessor
}

class StripeAdapter {
  // TODO: Implementar la interfaz PaymentProcessor
}

class MercadoPagoAdapter {
  // TODO: Implementar la interfaz PaymentProcessor
}

// 4. Código Cliente para probar el Adapter

function main() {
  const paymentAmount = 100;

  // TODO: Agregar los adaptadores para los servicios de pago
  const paypalProcessor: PaymentProcessor = new PayPalAdapter();
  const stripeProcessor: PaymentProcessor = new StripeAdapter();
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter();

  // Procesar pagos con los diferentes servicios
  // Los 3 procesadores de pago trabajan exactamente igual después de adaptarlos
  console.log('Usando PayPal:');
  paypalProcessor.processorPayment(paymentAmount);

  console.log('\nUsando Stripe:');
  stripeProcessor.processorPayment(paymentAmount);

  console.log('\nUsando MercadoPago:');
  mercadoPagoProcessor.processorPayment(paymentAmount);
}

main();

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
class PayPalAdapter implements PaymentProcessor {
  private payPalService: PayPalService;

  constructor(service: PayPalService) {
    this.payPalService = service;
  }

  processorPayment(amount: number): void {
    this.payPalService.sendPayment(amount);
  }
}

class StripeAdapter implements PaymentProcessor {
  private stripeService: StripeService;

  constructor(service: StripeService) {
    this.stripeService = service;
  }

  processorPayment(amount: number): void {
    this.stripeService.makeCharge(amount);
  }
}

class MercadoPagoAdapter implements PaymentProcessor {
  private mercadoPagoService: MercadoPagoService = new MercadoPagoService();

  constructor(service: MercadoPagoService) {
    this.mercadoPagoService = service;
  }

  processorPayment(amount: number): void {
    this.mercadoPagoService.pay(amount);
  }
}

// 4. Código Cliente para probar el Adapter

function main() {
  const paymentAmount = 100;

  // TODO: Agregar los adaptadores para los servicios de pago
  const paypalProcessor: PaymentProcessor = new PayPalAdapter(
    new PayPalService()
  );
  const stripeProcessor: PaymentProcessor = new StripeAdapter(
    new StripeService()
  );
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter(
    new MercadoPagoService()
  );

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

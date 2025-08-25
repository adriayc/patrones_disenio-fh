# PATRONES DE DISEÑO: SOLUCIONES PRÁCTICAS Y EFICIENTES

> **Author:** Fernando Herrera

## Instalaciones recomendadas

- [Visual Studio Code](https://code.visualstudio.com/)
- [Deno](https://deno.com/)

```sh
$ curl -fsSL https://deno.land/install.sh | sh
$ npm install -g deno
$ deno -v
```

- [Bun](https://bun.sh/) (Opcional)
- [Git](https://git-scm.com/)

```sh
$ git config --global user.name "Tu nombre"
$ git config --global user.email "Tu correo"
```

Extensiones de VSCode

- Error Lens
- Deno
- Better Comments

Temas de VSCode

- Tokyo Night (Theme)
- Bearded Icons (Icons)

## Inicializar un nuevo projecto con Deno

```sh
$ deno init my-project
$ cd my-project
```

Ejecutar el projecto

```sh
# Run the  program
$ deno main.ts
$ deno --watch main.ts

# Run the program and watch for file changes
$ deno task dev

# Run the tests
$ deno test
```

## Patrones de diseño

Soluciones probadas a problemas comunes.

### ¿Qué son Patrones de diseño?

Son soluciones reutilizables y probadas que ayudan a resolver problemas comunes.

### Miremos un ejemplo

`Doblar un camiseta`

Tener en mente, que los patrones de diseño son soluciones probadas a problemas comunes.

### Necesidad

Si te enfrentas a un problema constantemente en tu vida, posiblemente desarrollarás una técnica para sobre pasarlo fácilmente.

Esto es un patrón.

### Soluciones probadas

1. Si hay poco tráfico, es una excelente opción económica.
2. Con tráfico moderado, es fluido, hay baja probabilidad de choques frontales y es más seguro.
3. El tráfico no se detiene, mayor volumen de movimiento vehicular, probabilidad de choques frontales casi nula. (Recomendado!)

### Patrón Estrategia

Múltiples métoddos para resolver un mismo problema, y se elige dinámicamente según el contexto

### Sin patrones

Puede que nuestra solución no sea la más eficiente o efectiva, pero es una solucion.

### Con patrones

1.  SOLUCIONES PROBADAS

    Permite evitar errores conocidos.

2.  COMUNICACION EFECTIVA

    Establece un lenguaje común entre desarrolladores.

3.  CALIDAD DE CÓDIGO

    Resuleven el problema con un código más limpio y efectivo.

4.  FACILITA APRENDIZAJE

    Sirven de guía y ayuda a comprender conceptos.

5.  ESTANDARIZACIÓN

    Al aplicar patrones conocidos, aplicamos consitencia en el código.

6.  NO REINVENTAS LA RUEDA

    Ayuda a enfocarte en el problema sin tener que planificar la estrategia de cero.

### Clasificación

De los patrones de diseño.

- **Creacionales**
- **Estructurales**
- **Comportamiento**

_NOTE: Es posible que tu apliques patrones comunes sin darte cuenta._

1. **Creacionales**
   Ayuda a crear objetos de manera eficiente y flexible, ocultando los detalles de instanciación.

   - Singleton
   - Factory Method

2. **Estructurales**
   Definen cómo los objetos interactúan y se comunican para cumplir tareas complejas.

   - Observer
   - Strategy

3. **Comportamiento**
   Enfocados en cómo componer clases y objetos para formar estructuras más grandes y reutilizables.

   - Adapter
   - Decorator

### No hay un número finito

Un patrón es una solución válida y probada para un problema común.

**_Tu puedes inventar tus propios patrones a tus necesidades_**

### Ejemplo

`Ruta hacia casa`

Sabemos que el punto mas corto entre dos puntos es una línea recta.

Pero o siempre es la más rápida.

### En futuras clases

Vamos a cubrir 24 patrones de diseño.

## Patrones Creacionales

**_Creación de objetos de forma flexible._**

Resuelven problemas relacionados con:

- ¿Cómo crear objetos de manera eficiente?
- Ocultar la lógica de instanciación.
- Reducir el acoplamiento de clases.

En general el objetivo es:

- Mejorar la flexibilidad al cambiar el proceso de creación.
- Promueve el principio de responsabilidad única.

Existen varios tipos de patrones creacionales:

- Factory Method
- Abstract Factory
- Builder
- Prototype
- Factory Function
- Inmutabilidad con copia
- Singleton

_NOTA: Todos ayuda con la creacion de objetos._

**Beneficios**

- Reducción de código duplicado.
- Mayor claridad en el proceso de creación de objetos.
- Alineación con principio SOLID.

## Patrones Estructurales

**_Explican cómo construir objetos y estructuras más grandes._**

Existen varios tipos de patrones creacionales:

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

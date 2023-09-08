# ctd-esp-fe3-final
Examen Final de Frontend VI

![ci](https://github.com/DH-Esp-Frontend/ctd-esp-fe3-final/actions/workflows/ci.yml/badge.svg)
![cov](https://github.com/DH-Esp-Frontend/ctd-esp-fe3-final/actions/workflows/coverage.yml/badge.svg)

## Indice
* [Requisitos](#requisitos)
  * [Condiciones mínimas de aprobación](#condiciones-mínimas-de-aprobación)
  * [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
* [Funcionalidades](#funcionalidades)
* [Desarrollo](#desarrollo)
* [Entrega](#entrega)
  * [Fecha de Entrega](#fecha-de-entrega)
  * [Formato de Entrega](#formato-de-entrega)


## Requisitos

Es indispensable clonar este proyecto en un repositorio privado, para poder trabajar de forma *individual*. No se aceptarán proyectos que se hayan realizado sin partir de este template. Para eso deberás crear un repositorio con el nombre "ctd-esp-fe3-final" en tu cuenta de Github y luego seguir los siguientes pasos en tu terminal

```
# clona el repositorio del final en tu computadora
git clone https://github.com/DH-Esp-Frontend/ctd-esp-fe3-final 

# ingresa al directorio del final
cd ctd-esp-fe3-final

# elimina los links al repositorio de DH
git remote remove origin

# Agrega el link al repositorio de tu cuenta de github, reemplaza <tuusuario> por tu cuenta
git remote add origin https://github.com/<tuusuario>/ctd-esp-fe3-final

# Sube el template inicial a tu repositorio de github
git push -u origin main
```
No olvides agregar los permisos a las cuentas mencionadas en el [Formato de Entrega](#formato-de-entrega) antes de la [Fecha de Entrega](#fecha-de-entrega)!


### Condiciones mínimas de aprobación

Las siguientes condiciones son requisitos mínimos necesarios para la aprobación del final:

* **Cumplir con todas las funcionalidades obligatorias**
* Solo se podrán utilizar las librerías que se detallan en este README. Ver [Dependencias](docs/desarrollo.md#dependencias) y [Dependencias de Desarrollo](docs/desarrollo.md#dependencias-de-desarrollo)
* No se considerará realizada cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas.
* Deberá ser desarrollada utilizando Typescript como lenguaje.
* Deberá contar con tests unitarios escritos para la página de checkout, tal como se indica en la consigna número 4. Para ello deberá emplearse Jest y React Testing Library. Además, se deberá utilizar MSW o alguna otra librería para interceptar los requests y mockear una respuesta.
* Se espera que el proyecto cuente con un coverage de al menos 50% como condición mínima de aprobación. Pero a tener en cuenta, que la página de checkout (y sus componentes asociados), deberán contar con al menos 90%.
* Se espera que la página de Checkout, contenga los flujos de validación necesarios, para un correcto submit del formulario.
* En los casos en que se requiera dar estilos a componentes, deberá realizarse utilizando la librería Material UI. Los estilos dinámicos también deberán manejarse mediante esta librería.
* Se espera el uso correcto de SSG y SSR para al menos 4 de las 6 páginas.


### Aspectos que modifican la valoración final de la nota

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su implementación sea correcta:

**TypeScript**
* Será tenido en cuenta el correcto uso de TypeScript para el tipado de los componentes y todas las funciones que desarrollen lógica reutilizable.

**Next.JS**
* Se valorará el correcto uso de Static Site Rendering (junto con ISR) y Server Side Rendering a lo largo de las seis (6) páginas del proyecto.

**Validaciones**
* Se valorará el agregado de validaciones de flujos alternativos al normal y el manejo de errores en las distintas funcionalidades implementadas.

**React Hook Form**
* Se valorará el correcto uso de React Hook Form y el uso de las validación nativas que posee.

**Material UI**
* Se valorará la utilización de componentes avanzados para el diseño de cada una de las páginas.

**Testing unitario y coverage**
* Se valorará el correcto uso del testing unitario y el incremento del porcentaje de cobertura de código (coverage) más allá del 50%.

**Buenas Prácticas**
* Se prestará especial atención al uso de buenas prácticas, principios SOLID, reutilización de componentes y funcionalidades comunes, y renderizado dinámico.

## Funcionalidades

Ver [Funcionalidades](docs/funcionalidades.md).
    
## Desarrollo

Ver [Desarrollo](docs/desarrollo.md).

## Entrega

### Fecha de Entrega

Solo se admitirán entregas recibidas hasta el cierre de la clase 16, clase de Evaluación Final. 

### Formato de Entrega

Se aceptará la entrega mediante la submisión de dos URLs 

* URL de un repositorio de Github Privado, que haya compatido acceso al profesor a cargo de la comisión.

* URL del Vercel donde el proyecto se encuentre desplegado y funcionando para su evaluación.

El link al Google Form para la submisión será enviado por el profesor a cargo de la comisión.

Mucha suerte y éxitos! 


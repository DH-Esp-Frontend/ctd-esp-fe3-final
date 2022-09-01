## Desarrollo

## Indice
* [Iniciando la App](#iniciando-la-app)
* [Dependencias](#dependencias)
* [Dependencias de Desarrollo](#dependencias-de-desarrollo)
* [Componentes de UI](#componentes-de-ui)

## Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run start`

## Dependencias

Se utilizará la version de React 18.0.2 y Next.js 12.2.5

Solo se podrán instalar las siguientes dependencias:
* Typescript
* Next.js
* React-credit-cards

Nota: Se sugiere no utilizar Redux ni React-Router por la complejidad que pueden alcanzar en una aplicación con Next.js.

## Dependencias de Desarrollo

Se podrán hacer uso de las siguientes dependencias adicionales para desarrollo (devDependencies), pero las mismas *no* modificaran la nota en forma positiva, ni son requisitos para la aprobación. Solo se brinda la posibilidad de usarlas, para aquel que sabe lo que esta haciendo y se siente cómodo con ellas.

* ESLint
    * Esta herramienta fue utilizada en clase en Frontend V. La misma se encuentra configurada pero si lo desean, pueden realizar modificaciones a un estilo que se adapte mas a su gusto personal.

* Jest y Testing Library
    * El uso de Testing es requerido para verificar las funcionalidades.

* Storybook
  * Storybook se encuentra configurado y listo para funcionar con Next.js y Material UI. Su uso es alentado pero no obligatorio para desarrollar los componentes que serán utilizados en las distintas páginas.

## Componentes de UI

El proyecto cuenta con algunos componentes ya desarrollados, de opcional utilización. La finalidad de los mismos es facilitar el desarrollo,
ya que ellos se encuentran correctamente estileados, tipados y testeados.

Lista de componentes:
* [src/componentes/layout/encabezado.componente.jsx](src/componentes/layout/encabezado.componente.jsx) - Encabezado requerido para cada una de las páginas. Facilita la navegación

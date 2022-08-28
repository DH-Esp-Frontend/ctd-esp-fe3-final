# ctd-esp-fe3-final
Examen Final de Frontend VI

## Indice
* [Requisitos](#requisitos)
  * [Condiciones mínimas de aprobación](#condiciones-mínimas-de-aprobación)
  * [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
* [Funcionalidades](#funcionalidades)
  * [Funcionalidades obligatorias](#funcionalidades-obligatorias)
  * [Funcionalidades extras](#funcionalidades-extras)
  * [Resultado final](#resultado-final)
* [Desarrollo](#desarrollo)
  * [Iniciando la App](#iniciando-la-app)
  * [Dependencias](#dependencias)
  * [Dependencias de Desarrollo](#dependencias-de-desarrollo)
  * [Componentes de UI](#componentes-de-ui)
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
git remove rm origin

# Agrega el link al repositorio de tu cuenta de github, reemplaza <tuusuario> por tu cuenta
git remote add origin https://github.com/<tuusuario>/ctd-esp-fe3-final

# Sube el template inicial a tu repositorio de github
git push -u origin main
```
No olvides agregar los permisos a las cuentas mencionadas en el [Formato de Entrega](#formato-de-entrega) antes de la [Fecha de Entrega](#fecha-de-entrega)!


### Condiciones mínimas de aprobación

Las siguientes condiciones son requisitos mínimos necesarios para la aprobación del final:

* **Cumplir con todas las funcionalidades obligatorias**
* Solo se podrán utilizar las librerías que se detallan en este README. Ver [Dependencias](#dependencias) y [Dependencias de Desarrollo](#dependencias-de-desarrollo)
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

### Funcionalidades obligatorias

Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del final y es fundamental que funcionen correctamente.
 
* La aplicación deberá contar con dos páginas:

  1 - La página de inicio que debe contar con:

          * Panel de filtros:
            * Contendrá un input en donde el usuario pueda ingresar cualquier texto que desee para hacer un filtro sobre los personajes.
            * Si el usuario borra el texto ingresado, se deberá mostrar el estado inicial, es decir la búsqueda sin filtro.
            * Se deberá incluir un boton de "Limpiar filtros", el cual deberá borrar el texto dentro del input y mostrar el estado inicial, es decir la búsqueda sin filtro.

          * Listado de personajes
            * Deberá mostrar los personajes, que estarán representados por tarjetas con información sobre cada uno de ellos.
            * Como máximo se deben mostrar en pantalla 20 tarjetas de personajes por página.
            * Se deberá poder marcar y desmarcar a cada personaje como favorito desde su tarjeta individual, teniendo que persistir ese estado en la aplicación.
            * Se deberá poder diferenciar si un personaje se encuentra marcado como favorito o no.

  2 - La página de favoritos que deberá cumplir con los siguientes requisitos:

            *  Todos los personaje marcados como favoritos, deberán aparecer dentro del listado de favoritos en la segunda página de la aplicación.
            *  Si el usuario desmarca un personaje como favorito el mismo deberá desaparecer del listado de favoritos.
            *  Un personaje que haya sido desmarcado de los favoritos, podrá ser marcado nuevamente desde la pantalla de inicio y deberá aparecer en el listado otra vez.
    

### Funcionalidades extras

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su funcionamiento sea correcto:

    * La página de favoritos:
      * Podrá contar con un botón de "Eliminar todos", que deberá desmarcar todos los personajes del listado de favoritos y los mismos no deberán aparecer marcados como favoritos en la página principal.

    * Realización de una tercer página de vista de cada personaje:
    Al hacer click sobre un personaje deberá redirigirnos a está página.
        * Va a requerir de la invocación de la API de [Episodios](https://rickandmortyapi.com/documentation/#get-multiple-episodes) de Rick and Morty.
        * Dentro de la vista de cada personaje:
           * Se mostrará un listado de los episodios en los cuales aparece.
           * También podríamos indicar si el personaje está marcado como favorito o no, y junto con la posibilidad de marcarlo o desmarcarlo.

### Resultado final

    Te dejamos un video como ejemplo de cómo debería funcionar tu aplicación, en la carpeta public
    
## Desarrollo

### Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run start`

### Dependencias

Se utilizara la version de React 17.0.2, junto con la version 5 de React Scripts. React-Router ya se encuentra instalado y configurado para la navegación.

Solo se podrán instalar las siguientes dependencias:
* Redux (incluida @reduxjs/toolkit)
* Typescript
* Thunk
* Saga (Si no queremos usar Thunk)

**NOTA: El uso de React Query y de la API de Context (React) no esta permitido**

### Dependencias de Desarrollo

Se podrán hacer uso de las siguientes dependencias adicionales para desarrollo (devDependencies), pero las mismas *no* modificaran la nota en forma positiva, ni son requisitos para la aprobación. Solo se brinda la posibilidad de usarlas, para aquel que sabe lo que esta haciendo y se siente cómodo con ellas.

* Redux Devtools Extension
  * Esta herramienta fue utilizada en clase, para visualizar el estado de Redux. Puede ser útil para debuggear y solucionar algunos problemas de nuestro código. 
  
* Prop-Types
  * Esta herramienta fue utilizada en clase, para validar el tipo de las propiedades en tiempo de ejecución. Puede ser para evitar algunos problemas de nuestro código.
  
* ESLint
  * Esta herramienta NO fue utilizada en clase, y se verá en Frontend V. Pero si se encuentran cómodos utilizandola, se encuentra permitida la configuración de eslint. 
  
* Jest y Testing Library
  * El uso de Testing esta permitido para verificar las funcionalidades. Testing es un tema de Frontend V, pero se abre la posibilidad de entregar el código final con casos de prueba. 

### Componentes de UI

El proyecto cuenta con componentes desarrollados en JavaScript, que **solo** deberán ser convertidos y tipados a TypeScript si son importados y utilizados.
La finalidad de los mismos es facilitar el desarrollo, otorgando componentes que se encuentran correctamente estileados.

Lista de componentes:
* [src/componentes/layout/encabezado.componente.jsx](src/componentes/layout/encabezado.componente.jsx) - Encabezado requerido para cada una de las páginas. Facilita la navegación

## Entrega

### Fecha de Entrega

Solo se admitirán entregas recibidas hasta el cierre de la clase 24, clase de Evaluación Final. 

### Formato de Entrega

Se aceptará la entrega mediante la submisión de la URL de un repositorio de Github Privado, que haya compatido acceso a las siguientes cuentas: 
* Camada 1 - Profesor: Tomás de Priede - Cuenta de Github [@tomiito](https://github.com/tomiito)

El link al Google Form para la submisión será enviado por el profesor a cargo de la comisión.

Mucha suerte y éxitos! 


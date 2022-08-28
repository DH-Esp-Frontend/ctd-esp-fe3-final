## Funcionalidades

## Indice
* [Funcionalidades obligatorias](#funcionalidades-obligatorias)
  * [Página 1: Inicio (Home)](#pgina-1-pgina-de-inicio-home)
  * [Página 2: Detalle del Cómic (Comic)](#pgina-2-detalle-del-cmic-comic)
  * [Página 3: Detalle del Personaje (Character)](#pgina-3-detalle-del-personaje-character)
  * [Página 4: Compra (Checkout)](#pgina-4-compra-checkout)
  * [Página 5: Orden Confirmada (Confirmation)](#pgina-5-orden-confirmada)
  * [Página 6: Preguntas frecuentes (FAQ)](#pgina-6-preguntas-frecuentes-faq)
* [Funcionalidades extras](#funcionalidades-extras-y-opcionales)
  * [Opcional 1: Tarjeta de Crédito](#opcional-1-tarjeta-de-crdito)
  * [Opcional 2: Comics asociados al personaje](#opcional-2-comics-asociados-al-personaje)
  * [Opcional 3: Compra de 1 Click](#opcional-3-compra-de-1-click)
* [Resultado final](#resultado-final)

## Funcionalidades obligatorias

Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del final y es fundamental que funcionen correctamente.

**La aplicación deberá contar con seis (6) páginas: Inicio, Comic, Personaje, Checkout, Orden confirmada y Faqs**

### Página 1: Inicio (Home)

### Página 2: Detalle del Cómic (Comic)

### Página 3: Detalle del Personaje (Character)

### Página 4: Compra (Checkout)

### Página 5: Orden confirmada

### Página 6: Preguntas frecuentes (FAQ)

## Funcionalidades extras y opcionales

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su funcionamiento sea correcto.

### Opcional 1: Tarjeta de Crédito

La [Página 4: Compra (Checkout)](#pgina-4-compra-checkout) dispone de un formulario dividido en 3 secciones. 
La tercera sección dispone de los campos de tarjeta de crédito. Para mejorar la experiencia de usuario, se permite la utilización 
de la librería [react-credit-cards](https://github.com/amaroteam/react-credit-cards), la cual deberá integrarse al uso de React Hook Form.

El requisito dispone de lograr mostrar una tarjeta que se actualize dinámicamente mientras el usuario ingresa los datos de la misma, para mejorar la UX. 

### Opcional 2: Comics asociados al personaje

La [página de Detalle del Personaje](#pgina-3-detalle-del-personaje-character), podrá disponer de una sección titulada **Otros comics de "nombre del personaje"**
* Ej: Otros cómics de Spiderman, Otros cómics de Wolverine

Esta sección, deberá estar listada por debajo de los datos principales del personaje, y deberá mostrar en un formato agradable al usuario, un listado de hasta 6 elementos, 
re-utilizando los componentes de tarjeta de Comics, asociados al personaje. Para ello se puede utilizar la api
```/v1/public/characters/{characterId}/comics```

Estos componentes deben seguir la misma regla que los comics de la [página de Inicio](#pgina-1-inicio-home), es decir no poseer validación de stock.



### Opcional 3: Compra de 1 Click

La [página de Inicio](#pgina-1-inicio-home), podrá disponer de un botón "Compra rápida" para cada una de los cómics mostrados en la grilla.
Si se decide realizar esta funcionalidad, el botón "Compra rápida" siempre debera estar habilitado, es decir, no debe haber
ningún control de stock previo.

Al presionar este botón, se debera invocar a una api (que se deberá construir) y podrán suceder alguno de los dos flujos siguientes:
* Si el comic tiene stock, se deberá redirigir a la [página 4 de compra](#pgina-4-compra-checkout), tal como sucede en la pagina 2 del detalle de comic.
* Si el comic no tiene stock, se deberá redirigir a la [página 2 de detalle de comic](#pgina-2-detalle-del-cmic-comic) que mostrara la información relevante junto con el botón "Sin stock" 

_Nota: Si bien mostrar la disponibilidad en la pantalla de inicio puede ser una ventaja, en este caso es un requisito obligatorio
si se desarrolla esta funcionalidad, que el stock solo se evalúe luego de presionar el botón comprar en la pantalla de inicio.
Esta lógica no debe interferir con la lógica de pre-chequeo de la página 2._

## Resultado final

Te dejamos un video como ejemplo de cómo debería funcionar tu aplicación, en la carpeta public
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
* [Requisitos de Diseño](#requisitos-obligatorios-de-diseo)
  * [Requisito 1: Material UI](#requisito-1-material-ui)
  * [Requisito 2: Layouts](#requisito-2-layouts)
  * [Requisito 3: Adaptabilidad (Responsive)](#requisito-3-adaptabilidad-responsive)
* [Resultado final](#resultado-final)

## Funcionalidades obligatorias

Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del final y es fundamental que funcionen correctamente.

**La aplicación deberá contar con seis (6) páginas: Inicio, Comic, Personaje, Checkout, Orden confirmada y Faqs**

### Página 1: Inicio (Home)

En esta página se deberá mostrar un listado en forma de grilla de los cómics de Marvel disponibles para su visualización detallada y para su compra. 

Se deberá tener en cuenta lo siguiente:
* Deberá ser la página de inicio de la web `/`.
* La grilla deberá mostrar como máximo 12 cómics por página.
* La grilla deberá soportar algún tipo de paginación simple. Se puede utilizar botones de `Anterior y Siguiente` o `carga infinita (Endless loading)`
* Cada cómic deberá contener `imagen` y `nombre`, junto con dos botones `Comprar` y `Ver detalle`.
* Permitir que todo el contenido junto con los resultados de la primer página, sean indexable por los buscadores.
* Esta página debera utilizar el [Layout General](#layout-general)
* Esta página permite la funcionalidad [Opcional 3: Compra de 1 Click](#opcional-3-compra-de-1-click)

### Página 2: Detalle del Cómic (Comic)

En esta página se deberá mostrar un detalle de un cómic seleccionado junto al precio y stock del mismo. 

Se deberá tener en cuenta lo siguiente:
* Deberá estar en la ruta `/comics/[id]`.
* La página deberá indicar al menos la siguiente información:
  * Nombre del comic
  * Descripción del comic
  * Imagen principal
  * Precio
  * Precio anterior
  * Botón de compra: en función de la disponibilidad de stock
    * Si hay stock, el botón debe aparecer habilitado y ser funcional
    * Si no hay stock, el botón debe estar deshabilitado y en gris, con el mensaje: Sin stock disponible 
  * Lista de personajes asociados al cómic, con links a la página de cada personaje
* Permitir que el contenido sea indexable por los buscadores.
* Esta página debera utilizar el [Layout General](#layout-general)

### Página 3: Detalle del Personaje (Character)

En esta página se deberá mostrar un detalle de un personaje individual de Marvel. 

Se deberá tener en cuenta lo siguiente:
* Deberá estar en la ruta `/personajes/[id]`.
* La página deberá indicar al menos la siguiente información:
  * Nombre del personaje
  * Imagen principal
  * Descripción o biografía del personaje
* Permitir que el contenido sea indexable por los buscadores.
* Esta página debera utilizar el [Layout General](#layout-general)
* Esta página permite la funcionalidad [Opcional 2: Comics asociados al personaje](#opcional-2-comics-asociados-al-personaje)

### Página 4: Compra (Checkout)

Al seleccionar el botón comprar en la página de detalle de cómic, se deberá navegar a la página de compra (checkout). 


Se deberá tener en cuenta lo siguiente:
* Deberá estar en la ruta `/checkout`.
* La página deberá disponer de un formulario dividido en 3 secciones o pasos:
  * Datos Personales
  * Dirección de entrega
  * Datos del pago
* La sección de datos personales deberá contener los siguientes campos `obligatorios`:
  * Nombre
  * Apellido
  * Email (el mismo deberá utilizar cualquier regla correcta de validación de emails)
* La sección de dirección de entrega deberá contener los siguientes campos:
  * Dirección `(requerido)`
  * Departamento, piso, etc `(opcional)`
  * Ciudad `(requerido)`
  * Provincia `(requerido)`
  * Código postal `(requerido)`
* Finalmente, la sección de pago deberá disponer de los siguientes campos `obligatorios`:
  * Número de tarjeta
  * Nombre como aparece en la tarjeta
  * Fecha de expiración
  * Código de seguridad `(secreto estilo contraseña ***)`
* El formulario deberá estar construido utilizando React Hook Form y Material UI
* El componente de Mui deberá ser el [Stepper](https://mui.com/material-ui/react-stepper/)
* Envío (submit) del formulario
  * Se deberá utilizar la api de compra que ya se encuentra desarrollada en el repositorio. [POST /api/checkout](/pages/api/checkout.route.ts)
  * Si el envío es correcto, se debe redirigir al usuario a la [Página 5: Orden Confirmada (Confirmation)](#pgina-5-orden-confirmada) 
  * Se deberá validar correctamente los errores de la api, e indicar el mismo al usuario por medio del componente [Snackbar](https://mui.com/material-ui/react-snackbar/)
    * Tarjeta sin fondos disponibles
    * Tarjeta sin autorización. Comuníquese con su banco e intente nuevamente.
    * Datos de tarjeta incorrecta
    * Dirección de entrega incorrecta
    * Error de servidor. Intente nuevamente
* Se deberá indicar con un panel de información, que indique el `nombre`, `imagen` y `precio` del cómic que se está comprando, para que el usuario esté seguro de que la acción que está realizando.
* Se deberá contar con los test unitarios que prueben las validaciones y deberá alcanzar un `coverage del 90%`
* Ten en cuenta, lo que puede suceder si se ingresa a este sitio directamente por URL. Quizá puedas redireccionar al Home en este caso.
* **No precisa** ser indexable por los motores de búsqueda.
* Esta página debera utilizar el [Layout de Compra](#layout-de-compra)
* Esta página permite la funcionalidad [Opcional 1: Tarjeta de Crédito](#opcional-1-tarjeta-de-crdito)

### Página 5: Orden confirmada

Al realizar una compra satisfactoria, se deberá mostrar la pantalla de **Orden Confirmada**.

Se deberá tener en cuenta lo siguiente:
* Deberá estar en la ruta `/confirmacion-compra`.
* Mostrar una sección superior verde con el mensaje `Que disfrutes tu compra`
* Deberá disponer de la información del comic (Nombre e imagen principal) de forma destacada y grande.
* Deberá mostrar una sección inferior, con los datos personales, la dirección de entrega y el precio pagado por el cómic.
* Ten en cuenta, lo que puede suceder si se ingresa a este sitio directamente por URL. Quizá puedas redireccionar al Home en este caso.
* **No precisa** ser indexable por los motores de búsqueda.
* Esta página debera utilizar el [Layout de Compra](#layout-de-compra)

Mostrar una sección verde con el mensaje “Que disfrutes tu compra”, junto a la información del cómic (nombre e imagen) en grande,
Una sección inferior, con los datos personales, la dirección de entrega, y el precio pagado por el cómic.
Esta página deberá utilizar el Layout de compra, que contiene un encabezado y un pie de página bien simple, con el objetivo de no distraer al usuario del proceso de compra.



### Página 6: Preguntas frecuentes (FAQ)

El encabezado general dispone de un link navegable hacia la página de preguntas frecuentes.

Se deberá tener en cuenta lo siguiente:
 * Deberá estar en la ruta `/preguntas-frecuentes`.
 * Utilizar el componente [Acordeón (Accordion)](https://mui.com/material-ui/react-accordion/) de Material UI para mostrar las preguntas y respuestas
 * Cargar la información de las preguntas y respuestas del JSON de faqs con su título y descripción.
 * Permitir que todo el contenido sea indexable por los buscadores.
 * Esta página debera utilizar el [Layout General](#layout-general)


## Funcionalidades extras y opcionales

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su funcionamiento sea correcto.

### Opcional 1: Tarjeta de Crédito

La [Página 4: Compra (Checkout)](#pgina-4-compra-checkout) dispone de un formulario dividido en 3 secciones. 
La tercera sección dispone de los campos de tarjeta de crédito. Para mejorar la experiencia de usuario, se permite la utilización 
de la librería [react-credit-cards](https://github.com/amaroteam/react-credit-cards), la cual deberá integrarse al uso de React Hook Form.

El requisito dispone de lograr mostrar una tarjeta que se actualize dinámicamente mientras el usuario ingresa los datos de la misma, para mejorar la UX. 

### Opcional 2: Comics asociados al personaje

La [Página 3: Detalle del Personaje (Character)](#pgina-3-detalle-del-personaje-character), podrá disponer de una sección titulada **Otros comics de "nombre del personaje"**
* Ej: Otros cómics de Spiderman, Otros cómics de Wolverine

Esta sección deberá estar listada por debajo de los datos principales del personaje, y deberá mostrar en un formato agradable al usuario un listado de hasta 6 elementos, 
re-utilizando los componentes de tarjeta de Comics asociados al personaje. Para ello se puede utilizar la api
```/v1/public/characters/{characterId}/comics```

Estos componentes deben seguir la misma regla que los comics de la [Página 1: Inicio (Home)](#pgina-1-inicio-home), es decir no poseer validación de stock.



### Opcional 3: Compra de 1 Click

La [Página 1: Inicio (Home)](#pgina-1-inicio-home), podrá disponer de un botón "Compra rápida" para cada una de los cómics mostrados en la grilla.
Si se decide realizar esta funcionalidad, el botón "Compra rápida" siempre debera estar habilitado, es decir, no debe haber
ningún control de stock previo.

Al presionar este botón, se debera invocar a una api (que se deberá construir) y podrán suceder alguno de los dos flujos siguientes:
* Si el comic tiene stock, se deberá redirigir a la [Página 4: Compra (Checkout)](#pgina-4-compra-checkout), tal como sucede en la pagina 2 del detalle de comic.
* Si el comic no tiene stock, se deberá redirigir a la [Página 2: Detalle del Cómic (Comic)](#pgina-2-detalle-del-cmic-comic) que mostrara la información relevante junto con el botón "Sin stock" 

_Nota: Si bien mostrar la disponibilidad en la pantalla de inicio puede ser una ventaja, en este caso es un requisito obligatorio
si se desarrolla esta funcionalidad, que el stock solo se evalúe luego de presionar el botón comprar en la pantalla de inicio.
Esta lógica no debe interferir con la lógica de pre-chequeo de la página 2._

## Requisitos Obligatorios de Diseño

### Requisito 1: Material UI

Se deberá hacer especial atención en la utilización de Material UI y la librería [Mui](https://mui.com/material-ui/) para el desarrollo de la interfaz web.
No se podrá utilizar otra librería excepto [react-credit-cards](https://github.com/amaroteam/react-credit-cards) para el desarrollo de la funcionalidad [Opcional 1: Tarjeta de Crédito](#opcional-1-tarjeta-de-crdito)

La creación de componentes personalizados que se apoyen en el uso de Mui se encuentra alentado y permitido.

### Requisito 2: Layouts

La aplicación dispone de dos Layouts (o formatos pre-establecidos de estilos y componentes) que deberán ser utilizados en las funcionalidades obligatorias.
Cada página deberá obligatoriamente utilizar uno y solo uno de ellos, según la funcionalidad lo describa. Estos Layouts van a contener un encabezado (Header)
y un pie de página (Footer) adecuados a la funcionalidad.

### Layout General

Este Layout, debera ser utilizado en las siguientes páginas:
* [Página 1: Inicio (Home)](#pgina-1-pgina-de-inicio-home)
* [Página 2: Detalle del Cómic (Comic)](#pgina-2-detalle-del-cmic-comic)
* [Página 3: Detalle del Personaje (Character)](#pgina-3-detalle-del-personaje-character)
* [Página 6: Preguntas frecuentes (FAQ)](#pgina-6-preguntas-frecuentes-faq)

El mismo contiene un encabezado (Header) con links navegables que deberán ser ajustados con sus correspondientes rutas, y
un pie de página que no requiere de modificación alguna.

Archivo: [components/layouts/layout-general.tsx](components/layouts/layout-general.tsx)

### Layout de Compra

Este Layout, debera ser utilizado en las siguientes páginas:
* [Página 4: Compra (Checkout)](#pgina-4-compra-checkout)
* [Página 5: Orden Confirmada (Confirmation)](#pgina-5-orden-confirmada)

El mismo contiene un encabezado (Header) simple y un pie de página que no requiere de modificación alguna. Este Layout 
tiene la finalidad de no distraer al usuario de la experiencia de compra.

Archivo: [components/layouts/layout-checkout.tsx](components/layouts/layout-checkout.tsx)

### Requisito 3: Adaptabilidad (Responsive)

La aplicación deberá adaptarse al formato celular y al formato de escritorio. Para ello, tanto ambos Layouts, 
junto a las estructuras y componentes de ayuda, cuentan con esta funcionalidad ya integrada. Si bien, el uso de los Layouts 
es obligatorio, no lo es el de estructuras y componentes de ayuda pre-desarrollados. Si se decide no utilizar estos últimos, 
deberán asegurarse que sus propios componentes sean Adaptables a ambos formatos (Responsive).

## Resultado final

Te dejamos un video como ejemplo de cómo debería funcionar tu aplicación, en la carpeta public
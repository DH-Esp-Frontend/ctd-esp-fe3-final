# Desarrollo

## Indice
* [Iniciando la App](#iniciando-la-app)
* [Dependencias](#dependencias)
* [Dependencias de Desarrollo](#dependencias-de-desarrollo)
* [Setup de la API de Marvel](#setup-de-la-api-de-marvel)
* [Recomendaciones a Seguir](#recomendaciones-a-seguir)

## Iniciando la App

Instalamos las dependencias

`npm install`

Podemos iniciar nuestra aplicación con el comando

`npm run dev`

## Dependencias

Se utilizará la version de React 18.0.2 y Next.js 12.2.5

Solo se podrán instalar las siguientes dependencias:
* Typescript
* Next.js
* React Hook Form
* Yup
* React-credit-cards


Nota: Se sugiere no utilizar Redux ni React-Router por la complejidad que pueden alcanzar en una aplicación con Next.js.

## Dependencias de Desarrollo

Se podrán hacer uso de las siguientes dependencias adicionales para desarrollo (devDependencies), pero las mismas *no* modificaran la nota en forma positiva, ni son requisitos para la aprobación. Solo se brinda la posibilidad de usarlas, para aquel que sabe lo que esta haciendo y se siente cómodo con ellas.

* ESLint
    * Esta herramienta fue utilizada en clase en Frontend V. La misma se encuentra configurada pero si lo desean, pueden realizar modificaciones a un estilo que se adapte mas a su gusto personal.

* Jest y Testing Library
    * El uso de Testing es requerido para verificar las funcionalidades y alcanzar el coverage definido.

* Storybook
  * Storybook se encuentra configurado y listo para funcionar con Next.js y Material UI. Su uso es alentado pero no obligatorio para desarrollar los componentes que serán utilizados en las distintas páginas.

## Setup de la API de Marvel

Para obtener las API Keys de Marvel debemos ingresar a [Marvel Developers](https://developer.marvel.com/account)
y crear nuestra cuenta. Al hacerlo nos dará una Public Key y una Private Key que deberemos configurar
en nuestro archivo .env.local

Primero copiemos el ejemplo corriendo en nuestra terminal
`cp .env.local.sample .env.local`

Luego abrimos el archivo [.env.local](.env.local) y ingresamos las API Keys obtenidas anteriormente

### Despliegue en Vercel

Cuando despleguemos nuestra aplicación en Vercel, deberemos configurar las Environment Variables para que nuestra aplicacion
pueda conectarse con la API de Marvel, ya que Vercel, ignorará nuestro `.env.local`

Tener en cuenta que deberemos configurar las 3 variables que existen en nuestro `.env.local` para que pueda funcionar correctamente

## Recomendaciones a Seguir

El siguiente listado pretender ser una guía para desarrollar de forma efectiva este final, pero no por eso, es requisito obligatorio su correcto seguimiento.

### Setup inicial
1. Clonar el proyecto en nuestra computadora
   - Luego instalar las dependencias
   - Ejecutar los `test` y el `coverage` para comprobar que todo funciona
   - Ejecutar el comando `dev` para probar la aplicación
   - Ejecutar el comando `storybook` para comprobar que las stories renderizan correctamente
2. Seguir el [Setup de la API de Marvel](#setup-de-la-api-de-marvel)
3. Subirlo `push` a nuestro repositorio personal
   - Eso activará el CI de Github actions, donde se ejecutarán los tests y el coverage
4. Al tener nuestro repositorio subido, podemos proceder al [Despliegue en Vercel](#despliegue-en-vercel)
5. Con la aplicación funcionando en todas sus variantes de forma local y el despliegue podemos proceder a comenzar con el desarrollo

### Comenzando

No todas las features tienen la misma dificultad, por lo que te recomendamos seguir el siguiente orden
para que puedas ir cumpliendo etapas y ganar confianza (y `ownership`) en este proyecto.

1. Comenzar con [Página 6: Preguntas frecuentes (FAQ)](/docs/funcionalidades.md#pgina-6-preguntas-frecuentes-faq)
  - La Página de las FAQs deberia ser la más simple de las seis.
    - Si te animás a Storybook, podes crear un componente Faqs junto con su story, para visualizarlo
    - El mismo deberia recibir un array de Faqs, un objeto que deberiamos tipar
    - Renderizar por cada FAQ un item del `accordion`
    - Con el componente listo, ya podemos proceder a utilizarlo dentro de las página
  - Obteniendo el array de faqs del JSON, podemos proceder a importar nuestro componente y enviarle esa data, y ya deberíamos tener la primer página.
  - Deberiamos resolver cuál es el mejor tipo de renderización para esta página para asegurarnos que el contenido sea indexable por los buscadores. Recordá que siempre puedes utilizar el Chrome Inspector para verificarlo.
  - Finalmente, si bien no es obligatorio, este es un componente simple para testear, para mantener alto nuestro coverage y dar por cerrada esta función.
  - Subimos nuestro contenido y verificamos que funcione correctamente en Vercel, antes de pasar a la próxima etapa.
  - Listo, ya tenemos 1 de 6! no te olvides de pushear estos cambios, y si estas usando una estrategia de branching, de mergear este branch con main antes de continuar. 
2. Luego continuar con [Página 1: Inicio (Home)](#pgina-1-pgina-de-inicio-home)

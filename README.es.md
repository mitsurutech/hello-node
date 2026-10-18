# Aplicación Node.js «Hola mundo»: despliega una aplicación web Node desde GitHub

[English](README.md) | [Français](README.fr.md) | [日本語](README.ja.md) | [Español](README.es.md)

Una aplicación web Node.js de «Hola mundo». Despliégala gratis desde su dirección de GitHub con la función
[desplegar una aplicación web desde GitHub](https://mitsurutech.co.uk/es/apps) de MitsuruTech: sin cuenta y sin instalar
nada. Es lo bastante pequeña para ser una primera prueba de despliegue en `learntools.dev`, y los pasos
están en la [guía del manual para desplegar aplicaciones Python, Node, Go y Java desde GitHub](https://mitsurutech.co.uk/es/help/deploy-app).

    Language        Node
    Build           npm ci
    Start           npm start

Son los valores por defecto de la plataforma; aquí no hace falta cambiar nada.

Dos cosas que conviene copiar en tu propio proyecto:

- **Lee `process.env.PORT`.** La plataforma elige el puerto y te lo dice; un servidor en su
  puerto favorito no responde a nada.
- **Escucha en `0.0.0.0`, no en `localhost`.** El proxy llega a tu aplicación desde fuera de su
  contenedor.

**`package-lock.json` está incluido en el repositorio y tiene que estarlo**, incluso sin dependencias. `npm ci`
se niega a ejecutarse sin uno: *«can only install with an existing package-lock.json»*. Así, un
proyecto que nunca ha ejecutado `npm install` falla al compilar con un mensaje sobre archivos de bloqueo
y no sobre nada de lo que has escrito. Genera uno con `npm install` y súbelo al repositorio.

## Ejecutarla tú mismo

    npm start

## Licencia

Esta obra está bajo licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Puedes compartirla y adaptarla para aprender y enseñar, si citas a Mitsuru Technologies Ltd, no la usas comercialmente y compartes lo que hagas con ella bajo la misma licencia. El texto completo está en el archivo `LICENSE`.

## Acerca de

Hecho por [Mitsuru Technologies](https://mitsurutech.co.uk/es) para la
[plataforma de aprendizaje MitsuruTech](https://mitsurutech.co.uk/es/learning): Python, Java, Go, Node, SQL y
Linux en el navegador para escuelas y centros, con laboratorios de contenedores, aplicaciones web desplegadas desde GitHub y
cuestionarios que se califican solos. Prueba código sin cuenta en el
[entorno de pruebas](https://mitsurutech.co.uk/es/playground).

¿Das clase? Mira [el precio](https://mitsurutech.co.uk/es/pricing) o [crea una cuenta de centro](https://mitsurutech.co.uk/es/signup).

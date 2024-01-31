# Newsletter Subscription App

Este proyecto front-end, desarrollado con Angular CLI, proporciona una interfaz para que los usuarios gestionen sus suscripciones a categorías de boletines informativos. Los usuarios pueden suscribirse a categorías específicas, eliminar sus suscripciones y gestionar su participación en la recepción de correos electrónicos.

## Ejecución con Docker

Este proyecto incluye un archivo Dockerfile para facilitar la creación de un contenedor.
```bash
docker build -t newsletter-front .
docker run -d -p 4202:80 newsletter-front
```

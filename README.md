# Newsletter Subscription App

Este proyecto front-end, desarrollado con Angular CLI, proporciona una interfaz para que los usuarios gestionen sus suscripciones a categorías de boletines informativos. Los usuarios pueden suscribirse a categorías específicas, eliminar sus suscripciones y gestionar su participación en la recepción de correos electrónicos.

## Ejecución con Docker

Este proyecto incluye un archivo Dockerfile para facilitar la creación de un contenedor.
```bash
docker build -t newsletter-subscription-frontend .
docker run -p 4200:4200 --env-file .env newsletter-subscription-frontend

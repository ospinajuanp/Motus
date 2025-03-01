# [Ingles](./README.md)
# [Español­](./README.es.md)

# Library Motus JS

Una biblioteca ligera para la detección de gestos táctiles en la web.

## Descripción

Motus JS es una librería JavaScript pequeña (menos de - kB minificada) y sin dependencias externas, diseñada para detectar gestos básicos. Su enfoque es ser simple y especializada en reconocer interacciones comunes, permitiéndote reaccionar a ellas de forma sencilla.

## Características

- **Ligera y sin dependencias:**  
  Integra fácilmente en cualquier proyecto web sin necesidad de frameworks adicionales.

- **Detección de gestos básicos:**  
  - **Tap:** Toque rápido sobre un elemento (similar a un clic).  
  - **Swipe:** Deslizamiento en cualquier dirección (izquierda, derecha, arriba, abajo).  
  - **Long press:** Presionar y mantener durante un período prolongado.

- **API simple:**  
  motus ejecuta un callback cada vez que detecta un gesto, pasando un objeto descriptivo del evento.

## Instalación

### Con npm

```bash
npm install motus

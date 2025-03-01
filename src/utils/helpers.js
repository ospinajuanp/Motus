// src/utils/helpers.js

/**
 * calculateDistance
 *
 * Calcula la distancia euclidiana entre dos puntos (x1, y1) y (x2, y2).
 * Útil para evaluar la magnitud de movimientos entre eventos táctiles.
 *
 * @param {number} x1 - Coordenada X del primer punto.
 * @param {number} y1 - Coordenada Y del primer punto.
 * @param {number} x2 - Coordenada X del segundo punto.
 * @param {number} y2 - Coordenada Y del segundo punto.
 * @returns {number} La distancia entre los dos puntos.
 */
export function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * getTouchCoordinates
 *
 * Extrae las coordenadas de la primera posición del toque de un evento táctil.
 * Esto facilita el manejo de los datos de posición en los eventos 'touchstart' y 'touchend'.
 *
 * @param {TouchEvent} event - El evento táctil.
 * @returns {Object} Un objeto con propiedades 'x' e 'y' correspondientes a las coordenadas del toque.
 */
export function getTouchCoordinates(event) {
    if (event.changedTouches && event.changedTouches.length > 0) {
    const touch = event.changedTouches[0];
    return {
        x: touch.pageX,
        y: touch.pageY
    };
    }
    return { x: 0, y: 0 };
}

/**
 * throttle
 *
 * Función para limitar la frecuencia de ejecución de una función.
 * Muy útil para optimizar eventos de alta frecuencia como 'resize' o 'scroll'.
 *
 * @param {Function} func - Función a la que se aplicará el throttle.
 * @param {number} delay - Tiempo en milisegundos durante el cual la función no se volverá a ejecutar.
 * @returns {Function} Una versión de la función 'func' que solo se ejecutará una vez cada 'delay' milisegundos.
 */
export function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
        lastCall = now;
        return func(...args);
    }
    };
}
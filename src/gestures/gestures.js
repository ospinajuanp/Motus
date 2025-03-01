// src/gestures/gestures.js

import detectTap from './tap';
import detectSwipe from './swipe';
import detectLongPress from './longPress';

class GestureManager {
    /**
     * @param {HTMLElement} element - Elemento DOM donde se detectarán los gestos.
     * @param {Object} options - Objeto de configuración con callbacks opcionales.
     */
    constructor(element, options = {}) {
        this.element = element || document;
        // Asigna callbacks por defecto que simplemente imprimen el objeto del gesto
        this.options = {
        onTap: options.onTap || ((event) => { console.log(event); }),
        onSwipe: options.onSwipe || ((event) => { console.log(event); }),
        onLongPress: options.onLongPress || ((event) => { console.log(event); })
        };
        this.init();
    }

    init() {
        // Se inicializan cada uno de los detectores de gestos usando la función correspondiente
        detectTap(this.element, this.options.onTap);
        detectSwipe(this.element, this.options.onSwipe);
        detectLongPress(this.element, this.options.onLongPress);
    }
}

export default GestureManager;

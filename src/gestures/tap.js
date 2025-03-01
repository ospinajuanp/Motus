// src/gestures/tap.js

function detectTap(element, callback) {
    let touchStartTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    const thresholdTime = 300; // Tiempo máximo (ms) para considerar un tap
    const thresholdDistance = 10; // Distancia máxima (px) permitida
  
    element.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];
      touchStartTime = Date.now();
      touchStartX = touch.pageX;
      touchStartY = touch.pageY;
    }, false);
  
    element.addEventListener('touchend', (event) => {
      const touch = event.changedTouches[0];
      const timeDiff = Date.now() - touchStartTime;
      const deltaX = Math.abs(touch.pageX - touchStartX);
      const deltaY = Math.abs(touch.pageY - touchStartY);
  
      if (timeDiff < thresholdTime && deltaX < thresholdDistance && deltaY < thresholdDistance) {
        // Devuelve las coordenadas del toque
        callback({
          type: 'tap',
          x: touch.pageX,
          y: touch.pageY
        });
      }
    }, false);
  }
  
  export default detectTap;
  
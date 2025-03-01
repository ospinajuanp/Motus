// src/gestures/swipe.js

function detectSwipe(element, callback) {
    let touchStartX = 0;
    let touchStartY = 0;
    const thresholdDistance = 30; // Distancia mínima para considerar un swipe
  
    element.addEventListener('touchstart', (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.pageX;
      touchStartY = touch.pageY;
    }, false);
  
    element.addEventListener('touchend', (event) => {
      const touch = event.changedTouches[0];
      const touchEndX = touch.pageX;
      const touchEndY = touch.pageY;
  
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      let direction = null;
      // Calcula la distancia total
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > thresholdDistance) {
          direction = deltaX > 0 ? 'right' : 'left';
        }
      } else {
        if (Math.abs(deltaY) > thresholdDistance) {
          direction = deltaY > 0 ? 'down' : 'up';
        }
      }
  
      if (direction) {
        callback({
          type: 'swipe',
          direction: direction,
          distance: distance
        });
      }
    }, false);
  }
  
  export default detectSwipe;
  
// src/gestures/longPress.js

function detectLongPress(element, callback) {
    let timer = null;
    let startTime = 0;
    const thresholdTime = 500; // Tiempo mínimo (ms) para considerar un long press
    let moved = false;
  
    const startTimer = (event) => {
      moved = false;
      startTime = Date.now();
      timer = setTimeout(() => {
        const duration = Date.now() - startTime;
        callback({
          type: 'longpress',
          duration: duration
        });
      }, thresholdTime);
    };
  
    const cancelTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  
    element.addEventListener('touchstart', (event) => {
      startTimer(event);
    }, false);
  
    element.addEventListener('touchmove', (event) => {
      moved = true;
      cancelTimer();
    }, false);
  
    element.addEventListener('touchend', (event) => {
      if (moved) {
        cancelTimer();
      }
      cancelTimer();
    }, false);
  
    element.addEventListener('touchcancel', (event) => {
      cancelTimer();
    }, false);
  }
  
  export default detectLongPress;
  
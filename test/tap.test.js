// __tests__/tap.test.js
import detectTap from '../src/gestures/tap.js';

describe('detectTap', () => {
  let element;
  let callback;

  beforeEach(() => {
    // Crea un elemento simulado para testear
    element = document.createElement('div');
    document.body.appendChild(element);
    callback = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('debería detectar un tap y ejecutar el callback con las coordenadas correctas', () => {
    detectTap(element, callback);

    // Simula el touchstart
    const touchStartEvent = new Event('touchstart');
    touchStartEvent.changedTouches = [{
      pageX: 150,
      pageY: 300
    }];
    element.dispatchEvent(touchStartEvent);

    // Espera un tiempo corto y simula el touchend
    const touchEndEvent = new Event('touchend');
    touchEndEvent.changedTouches = [{
      pageX: 150,
      pageY: 300
    }];
    element.dispatchEvent(touchEndEvent);

    expect(callback).toHaveBeenCalledWith({
      type: 'tap',
      x: 150,
      y: 300
    });
  });
});

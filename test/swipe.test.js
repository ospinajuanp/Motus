// __tests__/swipe.test.js
import detectSwipe from '../src/gestures/swipe.js';

describe('detectSwipe', () => {
  let element;
  let callback;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
    callback = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('debería detectar un swipe a la izquierda y ejecutar el callback con la dirección y distancia', () => {
    detectSwipe(element, callback);

    const touchStartEvent = new Event('touchstart');
    touchStartEvent.changedTouches = [{
      pageX: 200,
      pageY: 300
    }];
    element.dispatchEvent(touchStartEvent);

    const touchEndEvent = new Event('touchend');
    touchEndEvent.changedTouches = [{
      pageX: 120,
      pageY: 300
    }];
    element.dispatchEvent(touchEndEvent);

    expect(callback).toHaveBeenCalled();
    const result = callback.mock.calls[0][0];
    expect(result.type).toBe('swipe');
    expect(result.direction).toBe('left');
    // Verifica que la distancia sea aproximadamente la esperada (80 en este ejemplo)
    expect(result.distance).toBeGreaterThanOrEqual(80);
  });
});

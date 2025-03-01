// __tests__/longPress.test.js
import detectLongPress from '../src/gestures/longPress.js';

describe('detectLongPress', () => {
  let element;
  let callback;

  beforeEach(() => {
    jest.useFakeTimers();
    element = document.createElement('div');
    document.body.appendChild(element);
    callback = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
    jest.useRealTimers();
  });

  it('debería detectar un long press y ejecutar el callback con la duración', () => {
    detectLongPress(element, callback);

    const touchStartEvent = new Event('touchstart');
    touchStartEvent.changedTouches = [{
      pageX: 100,
      pageY: 100
    }];
    element.dispatchEvent(touchStartEvent);

    // Avanza el tiempo más allá del umbral (por ejemplo, 600 ms si el umbral es 500 ms)
    jest.advanceTimersByTime(600);

    expect(callback).toHaveBeenCalled();
    const result = callback.mock.calls[0][0];
    expect(result.type).toBe('longpress');
    // Verifica que la duración sea mayor o igual a 500 ms (o la lógica definida)
    expect(result.duration).toBeGreaterThanOrEqual(500);
  });
});

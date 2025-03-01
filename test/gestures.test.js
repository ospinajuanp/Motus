// __tests__/gestureManager.test.js
import GestureManager from '../src/gestures/gestures';

describe('GestureManager', () => {
  let element;
  let tapCallback, swipeCallback, longPressCallback;

  beforeEach(() => {
    jest.useFakeTimers();
    element = document.createElement('div');
    document.body.appendChild(element);
    tapCallback = jest.fn();
    swipeCallback = jest.fn();
    longPressCallback = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
    jest.useRealTimers();
  });

  it('debería configurar los detectores con callbacks personalizados', () => {
    new GestureManager(element, {
      onTap: tapCallback,
      onSwipe: swipeCallback,
      onLongPress: longPressCallback
    });

    // Simula un tap
    const touchStart = new Event('touchstart');
    touchStart.changedTouches = [{ pageX: 150, pageY: 300 }];
    element.dispatchEvent(touchStart);

    const touchEnd = new Event('touchend');
    touchEnd.changedTouches = [{ pageX: 150, pageY: 300 }];
    element.dispatchEvent(touchEnd);

    expect(tapCallback).toHaveBeenCalled();

    // Puedes simular swipe y long press de forma similar.
  });
});

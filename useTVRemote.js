/**
 * 🎮 useTVRemote — Universal Smart TV D-Pad Remote Hook & Navigation Engine
 * --------------------------------------------------------------------------
 * Maps standard D-Pad keydown events (Arrow keys: 38/40/37/39, Enter/OK: 13, Back/Escape/Return: 8/27/10009)
 * to application navigation logic while seamlessly coexisting with mouse, air-mouse,
 * pointer, and touch handlers.
 */

export function normalizeTVRemoteEvent(e) {
  const key = e.key || '';
  const code = e.keyCode || e.which || 0;

  // --- D-PAD UP ---
  if (
    key === 'ArrowUp' || key === 'Up' || key === 'UIKeyInputUpArrow' || key === 'UpArrow' || key === 'KEY_UP' ||
    code === 38 || code === 19 || code === 29460 || code === 103 || code === 1
  ) {
    return 'UP';
  }

  // --- D-PAD DOWN ---
  if (
    key === 'ArrowDown' || key === 'Down' || key === 'UIKeyInputDownArrow' || key === 'DownArrow' || key === 'KEY_DOWN' ||
    code === 40 || code === 20 || code === 29461 || code === 108 || code === 2
  ) {
    return 'DOWN';
  }

  // --- D-PAD LEFT ---
  if (
    key === 'ArrowLeft' || key === 'Left' || key === 'UIKeyInputLeftArrow' || key === 'LeftArrow' || key === 'KEY_LEFT' ||
    code === 37 || code === 21 || code === 29462 || code === 105 || code === 3
  ) {
    return 'LEFT';
  }

  // --- D-PAD RIGHT ---
  if (
    key === 'ArrowRight' || key === 'Right' || key === 'UIKeyInputRightArrow' || key === 'RightArrow' || key === 'KEY_RIGHT' ||
    code === 39 || code === 22 || code === 29463 || code === 106 || code === 4
  ) {
    return 'RIGHT';
  }

  // --- OK / SELECT / ENTER / CENTER ---
  if (
    key === 'Enter' || key === 'Select' || key === 'Accept' || key === 'OK' || key === 'Ok' || key === ' ' || key === 'Space' || key === 'Spacebar' ||
    key === 'HeadsetHook' || key === 'MediaPlayPause' || key === 'MediaPlay' || key === 'MediaSelect' || key === 'KEY_ENTER' || key === 'KEY_OK' ||
    code === 13 || code === 23 || code === 66 || code === 32 || code === 1536 || code === 29443 || code === 102 || code === 179 || code === 256
  ) {
    return 'OK';
  }

  // --- BACK / RETURN / ESCAPE / EXIT ---
  if (
    key === 'Escape' || key === 'Backspace' || key === 'GoBack' || key === 'Back' || key === 'BrowserBack' || key === 'XF86Back' ||
    key === 'Exit' || key === 'HistoryBack' || key === 'KEY_BACK' || key === 'KEY_EXIT' ||
    code === 27 || code === 8 || code === 4 || code === 10009 || code === 10182 || code === 461 || code === 166 || code === 29464 || code === 10071
  ) {
    return 'BACK';
  }

  // --- COLOR KEYS ---
  if (key === 'ColorF0Red' || key === 'Red' || code === 403) return 'COLOR_RED';
  if (key === 'ColorF1Green' || key === 'Green' || code === 404) return 'COLOR_GREEN';
  if (key === 'ColorF2Yellow' || key === 'Yellow' || code === 405) return 'COLOR_YELLOW';
  if (key === 'ColorF3Blue' || key === 'Blue' || code === 406) return 'COLOR_BLUE';

  return null;
}

/**
 * 🎮 useTVRemote Hook
 *
 * @param {Object} [options]
 * @param {Function} [options.onUp] Callback when D-Pad Up is pressed
 * @param {Function} [options.onDown] Callback when D-Pad Down is pressed
 * @param {Function} [options.onLeft] Callback when D-Pad Left is pressed
 * @param {Function} [options.onRight] Callback when D-Pad Right is pressed
 * @param {Function} [options.onSelect] Callback when Enter / OK is pressed
 * @param {Function} [options.onBack] Callback when Back / Return is pressed
 * @param {Function} [options.onAction] Universal callback (action, event) => void
 * @param {boolean} [options.enabled=true] Whether the listener is active
 * @param {EventTarget} [options.target=window] Event target (defaults to window)
 * @param {boolean} [options.preventDefault=true] Prevent default scrolling
 * @param {boolean} [options.stopPropagation=true] Stop event propagation
 * @param {boolean} [options.allowInInputs=false] Intercept in inputs/textareas
 * @returns {Object} TV remote hook controller
 */
export function useTVRemote(options = {}) {
  if (typeof window !== 'undefined' && typeof window.useTVRemote === 'function') {
    return window.useTVRemote(options);
  }

  const opts = Object.assign({
    enabled: true,
    target: (typeof window !== 'undefined' ? window : null),
    preventDefault: true,
    stopPropagation: true,
    allowInInputs: false
  }, options);

  let isActive = !!opts.enabled;

  function handleKey(e) {
    if (!isActive) return;

    if (!opts.allowInInputs && typeof document !== 'undefined') {
      const activeTag = document.activeElement && document.activeElement.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || (document.activeElement && document.activeElement.isContentEditable)) {
        if (e.key === 'Escape' || e.keyCode === 27) {
          document.activeElement.blur();
        } else {
          return;
        }
      }
    }

    const action = normalizeTVRemoteEvent(e);
    if (!action) return;

    if (opts.preventDefault) e.preventDefault();
    if (opts.stopPropagation) e.stopPropagation();

    let handled = false;
    if (typeof opts.onAction === 'function') {
      const res = opts.onAction(action, e);
      if (res === false || res === true) handled = (res === false);
    }

    if (!handled) {
      if (action === 'UP' && typeof opts.onUp === 'function') {
        if (opts.onUp(e) === false) handled = true;
      } else if (action === 'DOWN' && typeof opts.onDown === 'function') {
        if (opts.onDown(e) === false) handled = true;
      } else if (action === 'LEFT' && typeof opts.onLeft === 'function') {
        if (opts.onLeft(e) === false) handled = true;
      } else if (action === 'RIGHT' && typeof opts.onRight === 'function') {
        if (opts.onRight(e) === false) handled = true;
      } else if (action === 'OK' && typeof opts.onSelect === 'function') {
        if (opts.onSelect(e) === false) handled = true;
      } else if (action === 'BACK' && typeof opts.onBack === 'function') {
        if (opts.onBack(e) === false) handled = true;
      }
    }
  }

  const target = opts.target || (typeof window !== 'undefined' ? window : null);
  if (target && target.addEventListener) {
    target.addEventListener('keydown', handleKey, { capture: true, passive: false });
  }

  return {
    enable: () => { isActive = true; },
    disable: () => { isActive = false; },
    isEnabled: () => isActive,
    destroy: () => {
      isActive = false;
      if (target && target.removeEventListener) {
        target.removeEventListener('keydown', handleKey, { capture: true });
      }
    },
    unbind: () => {
      isActive = false;
      if (target && target.removeEventListener) {
        target.removeEventListener('keydown', handleKey, { capture: true });
      }
    }
  };
}

if (typeof window !== 'undefined') {
  if (!window.useTVRemote) {
    window.useTVRemote = useTVRemote;
  }
}

export default useTVRemote;

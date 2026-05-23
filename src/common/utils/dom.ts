/**
 * Format the number to use up to 4 characters and a decimal point but only with reasonable precision.
 */
export function formatNumber(n: number): string {
  switch (true) {
    case n >= 100000: {
      // 100k, 101k…
      return `${Math.floor(n / 1000)}k`;
    }
    case n >= 10000: {
      // 10k, 10.1k… 99.9k
      // remove .0
      const fixed = (Math.floor(n / 100) / 10).toFixed(1);
      return `${fixed.replace('.0', '')}k`;
    }
    case n >= 10: {
      // 10…9999
      return String(Math.round(n));
    }
    default: {
      // 0…9.9
      const fixed = n.toFixed(1);
      return fixed.replace('.0', '');
    }
  }
}

// for (const x of [
//   0, 1.5, 7, 9.9, 9.99, 10, 10.2, 999, 1234, 9999, 10000, 10001, 10099, 10100, 23456, 98999, 99000,
//   99900, 99990, 99999, 100000, 100001, 100010, 100100, 100900, 100999, 101000,
// ]) {
//   console.log(String(x).padStart(10, ' '), formatCurrencyNumber(x));
// }

export function fillOrHide(
  el: Element,
  value: number | string,
  formatFn: (v: number) => string = formatNumber,
) {
  el.querySelector('.value')!.textContent = typeof value === 'string' ? value : formatFn(value);
  el.classList.toggle('hidden', !value);

  return Boolean(value);
}

export function toggleHidden(el: Element, value: number | boolean) {
  el.classList.toggle('hidden', Boolean(value));
}

export function makeEl(
  parent: Element | undefined,
  nodeName = 'div',
  className: string,
  content = '',
) {
  const el = document.createElement(nodeName);
  el.className = className;
  el.textContent = content;
  parent?.append(el);
  return el;
}

export function exposeGlobalWindowProp(propName: string, value: unknown, overwrite = false) {
  if (propName in window && !overwrite) {
    console.error(new Error('prop already exposed'));
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[propName] = value;
  }
}

export function getEl<T extends Element = HTMLElement>(selector: string, c?: new () => T): T {
  const retval = document.querySelector<T>(selector);
  if (!retval) {
    throw new Error(`cannot get element by selector "${selector}"`);
  }
  if (c && !(retval instanceof c)) {
    throw new Error(`found element by selector "${selector}" but not the right instance`);
  }

  return retval;
}

let _nextId = 0;
export function nextId(): string {
  _nextId += 1;
  return `_id_${_nextId}`;
}

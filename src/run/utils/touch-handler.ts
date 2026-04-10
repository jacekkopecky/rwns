export class TouchHandler {
  private lastTouchFraction: number | null = null;
  private speedUp: number;
  private enabled = true;

  constructor(
    private el: HTMLElement,

    private opts: {
      speedUp?: number;
      onMoveBy?(deltaX: number): void;
    },
  ) {
    el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    el.addEventListener('touchend', this.handleTouchEnd, { passive: true });
    el.addEventListener('touchmove', this.handleTouchMove, { passive: true });
    this.speedUp = opts.speedUp ?? 1;
  }

  handleTouchStart = (e: TouchEvent) => {
    this.lastTouchFraction = this.getTouchFraction(e);
  };

  handleTouchEnd = (e: TouchEvent) => {
    this.lastTouchFraction = this.getTouchFraction(e);
  };

  handleTouchMove = (e: TouchEvent) => {
    if (!this.enabled) return;
    const touchFraction = this.getTouchFraction(e);
    if (touchFraction != null && this.lastTouchFraction != null) {
      const delta = (touchFraction - this.lastTouchFraction) * this.speedUp;
      if (delta) {
        this.opts.onMoveBy?.(delta);
      }

      this.lastTouchFraction = touchFraction;
    }
  };

  toggle = (value?: boolean) => {
    this.enabled = value ?? !this.enabled;
  };

  shutdown = () => {
    this.el.removeEventListener('touchstart', this.handleTouchStart);
    this.el.removeEventListener('touchend', this.handleTouchEnd);
    this.el.removeEventListener('touchmove', this.handleTouchMove);
  };

  private getTouchFraction = (e: TouchEvent) => {
    const t = e.touches[0];
    return t ? t.clientX / this.el.clientWidth : null;
  };
}

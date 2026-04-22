export class TouchHandler {
  private lastPosition: number | null = null;
  private speedUp: number;
  private enabled = true;
  private isActive = false;

  constructor(
    private el: HTMLElement,

    private opts: {
      speedUp?: number;
      onMoveBy?(deltaX: number): void;
    },
  ) {
    el.addEventListener('touchstart', this.handleStart, { passive: true });
    el.addEventListener('touchend', this.handleEnd, { passive: true });
    el.addEventListener('touchmove', this.handleMove, { passive: true });
    el.addEventListener('mousedown', this.handleStart, { passive: true });
    el.addEventListener('mouseup', this.handleEnd, { passive: true });
    el.addEventListener('mouseleave', this.handleEnd, { passive: true });
    el.addEventListener('mousemove', this.handleMove, { passive: true });
    this.speedUp = opts.speedUp ?? 1;
  }

  private handleStart = (e: TouchEvent | MouseEvent) => {
    this.lastPosition = this.getPositionFraction(e);
    this.isActive = true;
  };

  private handleEnd = () => {
    this.lastPosition = null;
    this.isActive = false;
  };

  private handleMove = (e: TouchEvent | MouseEvent) => {
    if (!this.enabled || !this.isActive) return;

    const position = this.getPositionFraction(e);
    if (position != null && this.lastPosition != null) {
      const delta = (position - this.lastPosition) * this.speedUp;
      if (delta) {
        this.opts.onMoveBy?.(delta);
      }

      this.lastPosition = position;
    }
  };

  toggle = (value?: boolean) => {
    this.enabled = value ?? !this.enabled;
  };

  shutdown = () => {
    this.el.removeEventListener('touchstart', this.handleStart);
    this.el.removeEventListener('touchend', this.handleEnd);
    this.el.removeEventListener('touchmove', this.handleMove);
    this.el.removeEventListener('mousedown', this.handleStart);
    this.el.removeEventListener('mouseup', this.handleEnd);
    this.el.removeEventListener('mouseleave', this.handleEnd);
    this.el.removeEventListener('mousemove', this.handleMove);
  };

  private getPositionFraction = (e: TouchEvent | MouseEvent) => {
    const clientX = e instanceof TouchEvent ? e.touches[0]?.clientX : e.clientX;

    if (clientX != null) {
      return clientX / this.el.clientWidth;
    } else {
      return null;
    }
  };
}

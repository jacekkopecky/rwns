import { Vector2, Box2, Vector3 } from 'three';

// adapted from THREE.JS Box2.js

const _vector = new Vector2();

/**
 * Represents a circle in 2D space.
 */
export class Circle {
  constructor(
    private center = new Vector2(0, 0),
    public radius = 0,
  ) {}

  getCenter(target: Vector2) {
    return target.copy(this.center);
  }

  getRadius() {
    return this.radius;
  }

  set(ctr: Vector2, r: number) {
    this.center.copy(ctr);
    this.radius = r;

    return this;
  }

  clone() {
    return new Circle().copy(this);
  }

  copy(circle: Circle) {
    this.center.copy(circle.center);
    this.radius = circle.radius;

    return this;
  }

  makeEmpty() {
    this.radius = 0;

    return this;
  }

  isEmpty() {
    return this.radius <= 0;
  }

  getSize(target: Vector2) {
    return target.set(this.radius * 2, this.radius * 2);
  }

  expandByScalar(scalar: number) {
    this.radius += scalar;
    return this;
  }

  containsPoint(point: Vector2) {
    return point.distanceTo(this.center) <= this.radius;
  }

  intersectsBox(box: Box2) {
    box.clampPoint(this.center, _vector);
    return this.containsPoint(_vector);
  }

  intersectsCircle(circle: Circle) {
    return this.center.distanceTo(circle.center) < this.radius + circle.radius;
  }

  translate(offset: Vector2) {
    this.center.add(offset);
    return this;
  }

  translateXZ(offset: Vector3) {
    this.center.x += offset.x;
    this.center.y += offset.z;
    return this;
  }

  getNewBoundingBox() {
    return this.getBoundingBox(new Box2());
  }

  getBoundingBox(target: Box2) {
    target.min.x = this.center.x - this.radius;
    target.min.y = this.center.y - this.radius;
    target.max.x = this.center.x + this.radius;
    target.max.y = this.center.y + this.radius;

    return target;
  }

  min = {
    self: this as Circle,
    get x() {
      return this.self.center.x - this.self.radius;
    },
    get y() {
      return this.self.center.y - this.self.radius;
    },
  };

  max = {
    self: this as Circle,
    get x() {
      return this.self.center.x + this.self.radius;
    },
    get y() {
      return this.self.center.y + this.self.radius;
    },
  };
}

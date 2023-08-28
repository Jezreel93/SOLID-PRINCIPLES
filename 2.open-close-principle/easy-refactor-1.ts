// Without OCP
/**
 
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

class AreaCalculator {
    calculateArea(rectangle: Rectangle): number {
        return rectangle.width * rectangle.height;
    }
}

-----------------------------------------------------

Now, suppose you need to add support for calculating the area of circles. Without the OCP, you'd modify the AreaCalculator class, like this:

class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
}

class AreaCalculator {
    calculateArea(shape: any): number {
        if (shape instanceof Rectangle) {
            return shape.width * shape.height;
        } else if (shape instanceof Circle) {
            return 3.14159 * shape.radius * shape.radius;
        }
    }
}

*/

// With OCP - Method 1

// class Rectangle {
//   width: number;
//   height: number;
//
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
// }
//
// class Circle {
//   radius: number;
//
//   constructor(radius: number) {
//     this.radius = radius;
//   }
// }
//
// interface ShapeAreaCalculator {
//   calculateArea(): number;
// }
//
// class CircleAreaCalculator implements ShapeAreaCalculator {
//   constructor(private circle: Circle) {
//     this.circle = circle;
//   }
//
//   calculateArea(): number {
//     return 3.14159 * this.circle.radius * this.circle.radius;
//   }
// }
//
// class RectangleAreaCalculator implements ShapeAreaCalculator {
//   constructor(private rectangle: Rectangle) {
//     this.rectangle = rectangle;
//   }
//
//   calculateArea(): number {
//     return this.rectangle.width * this.rectangle.height;
//   }
// }
//
// class ShapeAreaCalculator {
//   static calculateArea(shape: ShapeAreaCalculator): number {
//     return shape.calculateArea();
//   }
// }
//
// const rectangle = new Rectangle(10, 20);
// const rectangleArea = new RectangleAreaCalculator(rectangle);
//
//
// const circle = new Circle(10);
// const circleArea = new CircleAreaCalculator(circle);
//
// console.log(`Rectangle area: ${ShapeAreaCalculator.calculateArea(rectangleArea)}`);
//
// console.log(`Circle area: ${ShapeAreaCalculator.calculateArea(circleArea)}`);

// With OCP - Method 2

interface ShapeAreaCalculator {
  calculateArea(): number;
}

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return 3.14159 * this.radius * this.radius;
  }
}

class ShapeAreaCalculator {
    static calculateArea(shape: ShapeAreaCalculator): number {
        return shape.calculateArea();
    }
}

const rectangle = new Rectangle(10, 20);
const circle = new Circle(10);

console.log(`Rectangle area: ${ShapeAreaCalculator.calculateArea(rectangle)}`);
console.log(`Circle area: ${ShapeAreaCalculator.calculateArea(circle)}`);


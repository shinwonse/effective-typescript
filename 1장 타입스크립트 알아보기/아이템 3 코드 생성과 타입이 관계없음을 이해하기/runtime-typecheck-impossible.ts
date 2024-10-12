interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  // TS2693: Rectangle only refers to a type, but is being used as a value here.
  if (shape instanceof Rectangle) {
    // TS2339: Property height does not exist on type Shape
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

/**
 * instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없습니다.
 * 따라서 앞의 코드에서 다루고 있는 shape 타입을 명확하게 하려면, 런타임에 타입 정보를 유지하는 방법이 필요합니다.
 */

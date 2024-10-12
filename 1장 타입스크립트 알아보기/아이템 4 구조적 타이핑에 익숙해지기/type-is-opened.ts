interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

function calculateLength(v: Vector3D) {
  let length = 0;

  for (const axis of Object.keys(v)) {
    /**
     * Vector3D의 선언에 따르면 x,y,z는 number 타입일 것으로 예샹됩니다. 그런데 타입스크립트는 오류를 체크합니다.
     * 그 이유는 v는 사실 어떤 속성이든 가질 수 있기 때문입니다. 그래서 axis의 타입은 string이 될 수도 있습니다.
     */
    const coord = v[axis];

    length += Math.abs(coord);
  }
}

/**
 * 그래서 그냥 아래와 같이 모든 속성을 각각 더하는 구현이 낫습니다.
 */
function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

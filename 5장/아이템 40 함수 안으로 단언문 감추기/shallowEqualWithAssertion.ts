declare function shallowObjectEqual<T extends object>(a: T, b: T): boolean;
function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
  for (const [k, aVal] of Object.entries(a)) {
    if (!(k in b) || aVal !== (b as any)[k]) {
      return false;
    }
  }
  return Object.keys(a).length === Object.keys(b).length;
}

/**
 * b as any 타입 단언문은 안전하며(k in b 체크를 했으므로) 결국 정확한 타입으로 정의되고 제대로 구현된 함수가 됩니다.
 * 객체가 같은지 체크하기 위해 객체 순회와 단언문이 코드에 직접 들어가는 것보다, 앞의 코드처럼 별도의 함수로
 * 분리해 내는 것이 훨씬 좋은 설계입니다.
 */

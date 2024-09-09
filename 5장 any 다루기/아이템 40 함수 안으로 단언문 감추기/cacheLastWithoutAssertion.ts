declare function cacheLast<T extends Function>(fn: T): T;
declare function shallowEqual<T>(a: T, b: T): boolean;

function cacheLast<T extends Function>(fn: T): T {
  let lastArgs: any[] | null = null;
  let lastResult: any;

  return function(...args: any[]) {
    if (!lastArgs || !shallowEqual(lastArgs, args)) {
      lastResult = fn(...args);
      lastArgs = args;
    }
    return lastResult;
  }
}

/*
* Returned expression type (...args: any[]) => any is not assignable to type T
* 타입스크립트는 반환문에 있는 함수와 원본 함수 T 타입이 어떤 관련이 있는지 알지 못하기 때문에 오류가 발생했습니다.
* 그러나 결과적으로 원본 함수 T 타입과 동일한 매개변수로 호출되고 반환값 역시 예상한 결과가 되기 때문에,
* 타입 단언문을 추가해서 오류를 제거하는 것이 큰 문제가 되지는 않습니다.
*/

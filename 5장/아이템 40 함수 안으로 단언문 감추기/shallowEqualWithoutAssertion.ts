declare function shallowObjectEqual<T extends object>(a: T, b: T): boolean;
function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
  for (const [k, aVal] of Object.entries(a)) {
    if (!(k in b) || aVal !== b[k]) {
      return false;
    }
  }
  return Object.keys(a).length === Object.keys(b).length;
}

/**
 * {} 형식에 인덱스 시그니처가 없으므로 요소에 암시적으로 any 형식이 있습니다.
 */

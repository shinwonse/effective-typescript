function f1() {
  const x: any = expressionReturningFoo(); // 이렇게 하지 맙시다.
  processBar(x);
}

function f2() {
  const x = expressionReturningFoo();
  processBar(x as any); // 이게 낫습니다.
}

/**
 * 함수에서 any를 반환하면 그 영향력은 프로젝트 전반에 전염병처럼 퍼지게 됩니다.
 * 반면 any의 사용 범위를 좁게 제한하는 f2 함수를 사용한다면 any 타입이 함수 바깥으로 영향을 미치지 않습니다.
 */

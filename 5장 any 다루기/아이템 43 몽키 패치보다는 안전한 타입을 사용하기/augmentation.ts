interface Document {
  /** 몽키 패치의 속(genus) 또는 종(species) */
  monkey: string;
}

document.monkey = 'Tamarin';

/**
 * 보강을 사용한 방법이 any로 다언하는 것보다 나은 점은 다음과 같습니다.
 * - 타입이 더 안전합니다. 타입 체커는 오타나 잘못된 타입의 할당을 오류로 표시합니다.
 * - 속성에 주석을 붙일 수 있습니다.
 * - 속성에 자동완성을 사용할 수 있습니다.
 * - 몽키 패치가 어떤 부분에 적용되었는지 정확한 기록이 남습니다.
 */

// 그리고 모듈의 관점에서, 제대로 동작하게 하려면 global 선언을 추가해야 합니다.

export {};
declare global {
  interface Document {
    monkey: string;
  }
}

document.monkey = 'Tamarin';

/**
 * 보강을 사용할 때 주의해야 할 점은 모듈 영역과 관련이 있습니다. 보강은 전역적으로 적용되기 때문에,
 * 코드의 다른 부분이나 라이브러리로부터 분리할 수 없습니다.
 * 그리고 애플리케이션이 실행되는 동안 속성을 할당하면 실행 시점에서 보강을 적용할 방법이 없습니다.
 */

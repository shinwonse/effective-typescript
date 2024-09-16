interface MonkeyDocument extends Document {
  monkey: string;
}

(document as MonkeyDocument).monkey = 'Tamarin';

/**
 * Document 타입을 건드리지 않고 별도로 확장하는 새로운 타입을 도입했기 때문에 모듈 영역 문제를 해결합니다.
 * 따라서 몽키 패치된 속성을 참조하는 경우에만 단언문을 사용하거나 새로운 변수를 도입하면 됩니다.
 */

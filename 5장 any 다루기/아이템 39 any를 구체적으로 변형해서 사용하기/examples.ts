
/**
 * 함수 내의 array.length 타입이 체크됩니다.
 * 함수의 반환 타입이 any 대신 number로 추론됩니다.
 * 함수 호출될 때 매개변수가 배열인지 체크됩니다.
 */

function getLengthBad(array: any) { // 이렇게 하지 맙시다!
  return array.length;
}

function getLength(array: any[]) { // 이렇게 합시다!
  return array.length;
}

/**
 * 함수의 매개변수가 객체지만 값을 알 수 없다면 다음과 같이 {[key: string]: any}로 타입을 지정합니다.
 * 혹은 모든 비기본형 타입을 포함하는 object 타입을 사용할 수도 있습니다.
 * object 타입은 객체의 키를 열거할 수는 있지만 속성에 접근할 수 없다는 점에서 {[key: string]: any}와 다릅니다.
 */

function hasTwelveLetterKey(o: {[key: string]: any}) {
  for (const key in o) {
    if (key.length === 12) {
      return true;
    }
  }
  return false;
}

## 아이템 3. 코드 생성과 타입이 관계 없음을 이해하기
- 코드 생성은 타입 시스템과 무관합니다. 타입스크립트 타입은 런타임 동작이나 성능에 영향을 주지 않습니다.
- 타입 오류가 존재하더라도 코드 생성(컴파일)은 가능합니다.
- 타입스크립트 타입은 런타임에 사용할 수 없습니다. 런타임에 타입을 지정하려면, 타입 정보 유지를 위한 별도의 방법이 필요합니다. 일반적으로는 태그된 유니온과 속성 체크 방법을 사용합니다. 또는 클래스 같이 타입스크립트 타입과 런타임 값, 둘 다 제공하는 방법이 있습니다.

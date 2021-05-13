// 상수 값인 PI값 정의
const PI = 3.14;
// PI 값 이용하여 원의 넓이 구하는 함수 작성
const getCircleArea = (r) => r * r * PI;
const getSquareArea = (d) => d * d;

// // 1. 한꺼번에 내보내기
// // commonJS의 Node.js 환경이므로 Node.js 표준에서 따르는 키워드 사용
// module.exports = {
//   // 객체를 통해 여러값을 한번에 내보내기
//   // 키이름과 할당값 같으면 값 생략 가능 (키 : 할당값)
//   PI,
//   getCircleArea,
//   getSquareArea
// };

// 2. exports 활용해 개별적으로 내보내 보자~
exports.PI = PI;
exports.getCircleArea = getCircleArea;
exports.getSquareArea = getSquareArea;

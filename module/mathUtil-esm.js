// 상수 값인 PI값 정의
const PI = 3.14;
// PI 값 이용하여 원의 넓이 구하는 함수 작성
const getCircleArea = (r) => r * r * PI;

// 내보내기
export { PI, getCircleArea };

// default로 내보내기
export default { PI, getCircleArea };

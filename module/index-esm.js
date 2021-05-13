/*
  1. 원의 넓이를 구하는 공식
  2. PI 정의
  3. 공식을 통해 결과 얻기
*/

// 다른 파일의 모듈 가져오기
import { getCircleArea } from './mathUtil-esm';

// default로 내보낸 것 가져올 때
import mathUtil from './mathUtil-esm';

// 함수 이용해 결과 확인
const result = getCircleArea(2);

// default로 내보냈을 때
const result = mathUtil.getCircleArea(2);
console.log(result);

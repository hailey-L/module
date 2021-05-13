/*
  1. 원의 넓이를 구하는 공식
  2. PI 정의
  3. 공식을 통해 결과 얻기
*/

// 다른 파일의 모듈 가져오기
// 모듈 객체로 다뤄질 수 있기 때문에 객체에 이름을 작성하고 require 키워드로 모듈 가져오기
// node.js환경에선 모듈의 확장자 기본적으로 *.js 이므로 확장자 생략 가능
const mathUtil = require('./mathUtil');

// PI값 필요없으므로 함수만 가져와 보자
const { getCircleArea } = require('./mathUtil');

// 함수 이용해 결과 확인
const result = getCircleArea(2);
console.log(result);

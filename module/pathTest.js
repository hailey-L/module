const path = require('path');
// path - 파일경로 쉽게 조작할 수 있도록 도와줌
console.log(__dirname);

// 파라미터 마다 문자열 값 넣어주면 그 사이에 / 적용시켜서 경로 조합해줌
const pathTest = path.resolve(__dirname, 'abc');
console.log(pathTest);

// __dirname - C:\Users\xjsdh\Desktop\module
// 'abc' - C:\Users\xjsdh\Desktop\module\abc

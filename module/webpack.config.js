// __dirname:이것 사용하는 경로의 절대경로 담음, path module:
const path = require('path');

module.exports = {
  entry: './src/index.js',
  // output 번들 파일 이름과, 생성되는 파일 경로 작성(절대경로로 설정)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  mode: 'development', //'production', 'none'
};

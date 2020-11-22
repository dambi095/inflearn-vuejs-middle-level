
// 구 버전 브라우저 중에서는 ES6의 기능을 지원하지 않는 경우가 많다. 
// 이를 해결하기 위해서는 transpiling이 필요하다.
// Babel은 ES6의 문법을 각 브라우저의 호환 가능한 ES5로 변환하는 컴파일러다!!!

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

<template>
    <div id="app">
      <div id="header">
          <h1 class="header-title">
            <a href="">Begin</a>
          </h1>
          <div class="header-nav">
                <ul>
                  <li class="menu"><a href="#">summary</a></li>
                  <li class="menu"><a href="#">code</a></li>
                  <li class="menu"><a href="#">sample</a></li>
                  <li class="menu"><a href="#">sample</a></li>
                </ul>
          </div>
          <div class="header-test">
              <a href=""><span>+</span></a>
          </div>
      </div>

      <div id="container" style="display:inline-block">
          <div class="container-title" style="display:inline-block; line-height: 50px; margin-top: 40px;" >
              <p class="date"> Thursday, 10th </p><span class="btn">Dec</span>
              <h2 class="title" >TODAY <span>is</span></h2>
              <p>라라라라라랄ㄹ라ㄹ</p>
          </div>
          

          <div class="container-content" style="float:right">
            가운데
            <TodoHeader></TodoHeader>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
            <TodoFooter></TodoFooter>
          </div>
      </div>

      <div id="footer">footer</div>
    </div>
</template>

<script>
// # 특정 컴포넌트에서 다른 위치에 있는 컴포넌트의 내용을 불러올 때(ES6 import 구문)
// import 불러온 파일의 내용이 담길 객체 from '불러올 파일 위치';

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// import '.'

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용 (import 객체)
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }

}
</script>

<style>

</style>
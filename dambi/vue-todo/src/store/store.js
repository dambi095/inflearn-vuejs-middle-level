import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

// use는 vue의 plugin이라는 기능
// global scope로 사용하고 싶을 때 사용
Vue.use(Vuex)


export const store = new Vuex.Store({
    /* 
        state: 여러 컴포넌트에 공유되는 데이터
        getters: 연산된 state 값을 접근하는 속성
        mutations: state값을 변경하는 이벤트 로직
        actions: 비동기 처리 로직을 선언하는 메서드  
    */
    modules: { // 모듈화 
        todoApp
    }
})
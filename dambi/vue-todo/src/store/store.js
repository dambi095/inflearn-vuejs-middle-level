import Vue from 'vue'
import Vuex from 'vuex'

// use는 vue의 plugin이라는 기능
// global scope로 사용하고 싶을 때 사용
Vue.use(Vuex)

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}


export const store = new Vuex.Store({
    /* 
        state: 여러 컴포넌트에 공유되는 데이터
        getters: 연산된 state 값을 접근하는 속성
        mutations: state값을 변경하는 이벤트 로직
        actions: 비동기 처리 로직을 선언하는 메서드  
    */
    state: {
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    // state 는 공통 state 이기 때문에 어떤 컴포넌트에서 변경했는지 알 수 가없다. 
    // 이러한 부분때문에 mutation을 이용해서 state를 변경할 경우 vue 개발자 도구를 통해서 확인 할 수 있기 때문! 
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            // 로컬 스토리지 데이터 갱신쓰
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
})
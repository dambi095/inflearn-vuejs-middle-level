// state 는 공통 state 이기 때문에 어떤 컴포넌트에서 변경했는지 알 수 가없다. 
// 이러한 부분때문에 mutation을 이용해서 state를 변경할 경우 vue 개발자 도구를 통해서 확인 할 수 있기 때문! 
const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // 로컬 스토리지 데이터 갱신쓰
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems}
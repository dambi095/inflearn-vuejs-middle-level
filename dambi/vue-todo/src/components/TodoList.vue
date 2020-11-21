<template>
  <div>
      <ul>
        <li v-for='(todoItem, index) in todoItems' :key='todoItem.item' class='shadow'>
            <i class='fas fa-check checkBtn' @click='toggleComplete(todoItem)' 
                :class='{checkBtnCompleted: todoItem.completed}'>
            </i>
            <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span class='removeBtn' @click='removeTodo(todoItem, index)'>
                <i class='fas fa-trash-alt'></i>
            </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            // JS의 배열 API! 특정인덱스에서 하나 지우고 새로운 배열을 반환..
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(todoItem) {
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    },
    // 인스턴스가 생성되자마자 호출되는 lifeCycle
    created: function() {
        if(localStorage.length > 0){
            for(let i=0; i < localStorage.length; i++){
                // console.log(localStorage.key(i));
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                 this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));   
                }
            }
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
<template>
 <div class="inputBox shadow">
    <input type="text" v-model='newTodoItem'>
    <!-- <button @click="addTodo">add</button> -->
    <span class="addContainer" @click='addTodo' v-on:keyup.enter='addTodo'>
       <i class="far fa-plus addBtn"></i>
    </span>
 </div>
</template>

<script>
export default {
  data: function() {
      return {
          newTodoItem: ''
      }
  },
  methods: {
      addTodo: function() {
          if(this.newTodoItem !== '') {
            // 여기서의 this 는 TodoInput 컴포넌트를 지칭하기 때문에 데이터 접근이 가능하다.
            let obj = {completed: false, item: this.newTodoItem};
            localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
            this.clearInput();
          }
      },
      clearInput: function() {
        this.newTodoItem= '';
      }
  }
}
</script>

<style scoped>
input:foucs {
    outline: none;
}
.inputBox {
    background: white;
    line-height: 50px;
    border-radius: 5px;
    height: 50px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}
</style>
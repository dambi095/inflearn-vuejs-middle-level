<template>
  <div class='inputBox shadow'>
    <input type='text' v-model='newTodoItem'  @keypress.enter='addTodo'/>
    <span class='addContainer' @click='addTodo'>
      <i class="far fa-plus addBtn"/>
    </span>

    <Modal v-if='showModal' @close='showModal = false'>
      <!-- slot을 이용하면 재정의를 할 수 있다 -->
      <h3 slot='header'>
        경고!
        <i class='fas fa-times closeModalBtn' @click='showModal = false'/>
      </h3>
      <div slot='body'>아무것도 입력하지 않으셨습니다.</div>
    </Modal>
  </div>
</template>

<script>
import Modal from'./common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // 여기서의 this 는 TodoInput 컴포넌트를 지칭하기 때문에 데이터 접근이 가능하다.
        // this.$emit('addTodoItem', this.newTodoItem);
       const text = this.newTodoItem.trim();
       this.$store.commit('addOneItem', text); //mutation 동작~
       this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }, 
  components: {
    // TodoInput 컴포넌트의의 하위 컴포넌트들
    Modal
  }
};
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
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}

</style>
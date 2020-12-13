<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in storedTodoItems" :key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" @click="toggleComplete({todoItem, index})"
          :class="{checkBtnCompleted: todoItem.completed}"
        />
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt" />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
// 헬퍼함수
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    // 암묵적으로 인자들을 사용시 같이 넘기구있당
    ...mapMutations({
      // removeTodo 가 클릭되면 removeOneItem 실행
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),
  }, 
  computed: {
    ...mapGetters(['storedTodoItems'])
  }
};
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

/* 리스트 아이템 애니메이션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
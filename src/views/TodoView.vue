<template>
  <div>
    <h1>Create a Todo</h1>
    <div class="field-container">
      <input
        type="text"
        placeholder="Add your task"
        autofocus
        v-model="todo"
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">
        <i
          class="fa-solid fa-plus"
          style="color: #ffffff; font-size: 1.05rem"
        ></i>
      </button>
    </div>
    <div class="list-container">
      <div v-if="list.length" style="text-align: left">
        <button
          :style="!allChecked ? 'background: #36a373;' : ''"
          class="checkBtn"
        >
          <label for="toggleCheckAll" style="display: flex; padding-right: 15px">
            <input
              type="checkbox"
              name="toggleCheckAll"
              id="toggleCheckAll"
              @click="toggleCheckAll()"
              v-model="allChecked"
              style="margin: 0 10px 0 15px; cursor: pointer"
            />
            {{ allChecked ? "Uncheck" : "Check" }} all tasks
          </label>
        </button>
      </div>
      <div class="task-container" v-if="list.length">
        <div v-for="(item, index) in list" :key="index" class="task">
          <p
            @click="toggleCheck(index)"
            :class="{ unchecked: true, checked: item.checked }"
            tabindex="0"
            @keyup.enter="toggleCheck(index)"
          >
            {{ item.todo }}
          </p>
          <div><button @click="deleteTodo(index)">del</button></div>
        </div>
      </div>
      <div class="task-container" v-else>It's pretty lonely in here 😢</div>
      <div v-if="allChecked && list.length" style="margin-block: 2rem">
        You've completed all tasks 🎉
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import Joy from "../assets/Joyous-chime.ogg";
import partyHorn from "../assets/Party-horn.ogg";

export default {
  data() {
    return {
      todo: ref(""),
      list: reactive([]),
      allChecked: false,
    };
  },
  methods: {
    addTodo() {
      if (this.todo.trim()) {
        this.list.push({ todo: this.todo, checked: false });
      }

      if (this.todo.trim()) this.updateCheckStatus();
      this.todo = "";
    },

    toggleCheck(index) {
      if (!this.list[index].checked) {
        let audio = new Audio(Joy);
        audio.volume = 0.6;
        audio.play();
      }

      this.list[index].checked = !this.list[index].checked;
      this.updateCheckStatus();
    },

    deleteTodo(index) {
      this.list.splice(index, 1);
      if (!this.allChecked) this.updateCheckStatus();
    },

    updateCheckStatus() {
      this.allChecked = this.list.every((item) => item.checked === true);
      if (this.allChecked) {
        setTimeout(() => {
          if (this.allChecked) {
            let sound = new Audio((partyHorn));
            sound.play();
          }
        }, 1200);
      }
    },

    toggleCheckAll() {
      if (!this.allChecked) {
        this.list = this.list.map((item) => {
          return { ...item, checked: true };
        });

        let audio = new Audio(Joy);
        audio.volume = 0.6;
        audio.play();

        this.updateCheckStatus();
      } 
      
      else {
        this.list = this.list.map((item) => {
          return { ...item, checked: false };
        });
        this.updateCheckStatus();
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap");

body,
#app {
  min-height: 100vh;
}
.field-container {
  width: 35%;
  margin-inline: auto;
  display: flex;
  border-radius: 5px;
}
h1 {
  font-family: Outfit;
}
input {
  flex: 1;
  width: 100%;
  caret-color: #41b883;
  padding: 7px 1rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #aaa;
  border-right: none;
  outline: none;
  font-size: 1rem;
  font-family: rubik;
}
.field-container:focus-within {
  outline: 1px solid #41b883;
}
.field-container:focus-within input {
  border-color: #41b883;
}
::placeholder {
  font-family: rubik;
  font-size: 0.9rem;
}
button {
  padding-inline: 1rem;
  border: 1px solid transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: none;
  outline: none;
  background: #41b883;
  color: white;
  font-size: 1.1rem;
  transition-duration: 0.3s;
  cursor: pointer;
}
button:hover,
button:focus {
  filter: brightness(0.87);
}
.list-container {
  width: 35%;
  margin: 2rem auto 0;
}
.list-container .checkBtn {
  border-radius: 3px;
  font-size: 0.9rem;
  font-family: Outfit;
  transition-duration: 0.2s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 0;
}
.list-container .checkBtn label {
  padding-block: 7px;
  cursor: pointer;
}
.list-container .checkBtn:focus-visible,
.list-container .checkBtn:hover {
  filter: none !important;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 6px 4px, rgba(0, 0, 0, 0.09) 0px 9px 8px,
    rgba(0, 0, 0, 0.09) 0px 10px 17px;
}
.list-container .checkBtn:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px !important;
}
.list-container .checkBtn:focus {
  filter: unset;
}
.task-container {
  margin-top: 2rem;
}
.task-container .task {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  transition-duration: 0.4s;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}
.task-container .task::after {
  content: "";
  width: 4rem;
  height: 100%;
  background: linear-gradient(to right, transparent, white);
  position: absolute;
  right: 3.5rem;
  pointer-events: none;
}
.task-container .task:hover,
.task-container .task:focus-within {
  box-shadow: #32325d40 0px 6px 12px -2px, #00000040 0px 3px 7px -3px;
}
.task-container .task p {
  margin: 0;
  text-align: left;
  padding: 0.8rem 1rem;
  flex-grow: 1;
  width: 100%;
  overflow: scroll;
  scrollbar-width: none;
  cursor: pointer;
  transition-duration: 0.3s;
}
.task-container .task p::selection {
  background: #41b88333;
  color: unset;
}
.task-container .task p::-webkit-scrollbar {
  display: none;
}
.task-container .task button {
  border-radius: 5px !important;
  height: 100%;
  border-radius: unset !important;
  transition-duration: 0.2s;
}
.task-container .task button:hover,
.task-container .task button:focus-visible {
  background: #ee6767;
  filter: unset;
}
.task-container .task button:focus {
  filter: unset;
}
.checked {
  text-decoration: line-through !important;
  color: gray;
}
.unchecked {
  text-decoration: none;
}
@media screen and (max-width: 1250px) {
  .list-container,
  .field-container {
    width: 55%;
  }
}
@media screen and (max-width: 550px) {
  .list-container,
  .field-container {
    width: 85%;
  }
}
@media screen and (max-width: 450px) {
  h1 {
    font-size: 1.7rem;
    margin-block: 2rem;
  }
}
</style>

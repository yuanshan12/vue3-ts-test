<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{num}}</p>
    <button @click="say('张三')">点击说话</button>
    <button @click="greeter(person)">接口</button>
  </div>
</template>
<script lang='ts'>
// import {Options, Vue} from 'vue-class-component'
import {ref, reactive, defineComponent} from 'vue'
export default {
  setup () {
    const num = ref(0)

    function say (name: string) {
      alert(name)
    }

    // 接口

    interface Person {
      name: string,
      age: number
    }

    function greeter (person: Person) {
      alert(`my name is ${person.name}, i'm ${person.age} years old`)
    }

    const person = reactive({
      name: '任云飞',
      hobby: 'coding',
      age: 18,
    })

    return {num, say, greeter, person}
  }
}
</script>>

<template>
  <div class="home">
    <div>{{title}}</div>
    <button @click="setTitle('setTitle')">setTitle</button>
    <button @click="nextTickSetTitle('nextTickSetTitle')">nextTickSetTitle</button>

    <input type="text" v-show="flag" ref='ipt'>
    <button @click="changes"> changes </button>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {defineComponent, computed, onMounted, onUpdated, onUnmounted, reactive, ref} from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'hello world',
  props: {},
  setup(props, context) {
    const store = useStore();
    const flag = ref(false)
    const title = computed(() => store.state.title)

    const setTitle = (nextTitle: string): void => {
      store.commit('setTitle', nextTitle);
    };
    const nextTickSetTitle = async (nextTitle: string): Promise<void> => {
      await store.dispatch('nextTickSetTitle', nextTitle)
    };

    function changes () {
      flag.value = true
      console.log(context)
      // context.refs.focus()
    }
    function say(name: string) {
      // ???
    }

    onMounted(() => {
      console.log('onMounted')
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
      setTitle,
      nextTickSetTitle,
      title,
    }
  },
})
</script>

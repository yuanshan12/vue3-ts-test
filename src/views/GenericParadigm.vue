<template>
  <div>
      <h2>泛型</h2>
  </div>
</template>

<script lang='ts'>
export default {
    steup() {
        function fx <T> (val: T): T {
            return val
        }
        let re = fx('ss')
        console.log(re)
    }
}
</script>

<style>

</style>
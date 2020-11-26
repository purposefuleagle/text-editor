<template lang="pug">
  .size-font
    v-btn.mr-1(
      @click="decreaseFont")
      font-awesome-icon(
        size="1x"
        icon="minus")
    v-btn.mr-1(
      @click="increaseFont")
      font-awesome-icon(
        size="1x"
          icon="plus")
</template>

<script>
export default {
  name: 'SizeFont',

  methods: {
    decreaseFont () {
      console.log('Font decrease')
    },

    increaseFont () {
      console.log('Font increase')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

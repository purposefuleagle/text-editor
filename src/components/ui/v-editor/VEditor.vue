<template lang="pug">
  .v-editor
    v-toolbar.mb-2
      v-btn.mr-1(
        @click="onClick")
        font-awesome-icon(
          size="1x"
          icon="minus")
      v-btn.mr-1(
        @click="onClick")
        font-awesome-icon(
          size="1x"
            icon="plus")
      v-btn.mr-1(
        @click="onClick")
        font-awesome-icon(
          size="1x"
          icon="bold")
      v-btn.mr-1(
        @click="onClick")
        font-awesome-icon(
          size="1x"
          icon="italic")
      v-btn.mr-1(
        @click="onClick")
        font-awesome-icon(
          size="1x"
          icon="strikethrough")
      v-btn.mr-1(
        @click="onClick")
        font-awesome-icon(
          size="1x"
          icon="underline")
      v-btn.mr-1(
        @click="onClick")
        font-awesome-icon(
          size="1x"
          icon="font")
      v-btn(
        @click="onClick")
        font-awesome-icon(
          size="1x"
          icon="highlighter")
    v-text-editor(@input="updateText")
</template>

<script>
// import ColorFont from '@/components/common/color-font/ColorFont'
// import FillFont from '@/components/common/fill-font/FillFont'
// import SizeFont from '@/components/common/size-font/SizeFont'

export default {
  name: 'VEditor',

  data: () => ({
    selectedText: '',
    content: ''
  }),

  methods: {
    onClick () {
      console.log('click')
    },

    updateText (content) {
      this.content = content
    }
    // handlerMouse (e) {
    //   console.log(e)
    //   console.log('mouse select')
    // },
  }
}
</script>

<style lang="scss" scoped>
  .v-editor {
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 20rem);
  }
</style>

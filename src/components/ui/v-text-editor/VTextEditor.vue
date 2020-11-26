<template lang="pug">
  .v-text-editor
    v-card
      .v-text-editor__content(
        ref="text-editor"
        @mouseup="handlerMouse"
        @input="emitChange"
        contenteditable="true")
</template>

<script>
export default {
  name: 'VTextEditor',

  mounted () {
    // this.setDefaultSeparator()
    // this.getCursorPosition()
    document.execCommand('defaultParagraphSeparator', false, 'p')
  },

  methods: {
    handlerMouse (e) {
      // const textEditor = this.$refs['text-editor']
      const selection = document.getSelection()
      let parentElement
      if (selection.rangeCount) {
        parentElement = selection.getRangeAt(0).commonAncestorContainer
        if (parentElement.nodeType !== 1) {
          parentElement = parentElement.parentNode.nodeName
        }
      }
      // console.log(`selection: ${selection}, parent: ${parentElement}`)
      this.$emit('mouseup', selection)
    },

    // setDefaultSeparator () {
    //   // const textEditor = this.$refs['text-editor']
    //   document.onselectionchange = function () {
    //     const selection = document.getSelection()
    //     let cloned
    //     for (let i = 0; i < selection.rangeCount; i++) {
    //       cloned.append(selection.getRangeAt(i).cloneContents())
    //     }
    //     console.log(cloned)
    //   }
    //   document.execCommand('defaultParagraphSeparator', false, 'p')
    // },

    // getCursorPosition () {
    //   const textEditor = this.$refs['text-editor']
    //   const selection = document.getSelection()
    //   const range = new Range()
    //   range.setStart(textEditor, 0)
    //   range.setEnd(selection.anchorNode, selection.anchorOffset)
    //   console.log(selection)
    //   console.log(range.toString().length)
    //   return range.toString().length
    // },

    // getCursorPosition () {
    //   const textEditor = this.$refs['text-editor']
    // },

    setBoldColor () {
      document.execCommand()
    },

    emitChange (e) {
      // this.$emit('input', e.target.textContent)
      this.$emit('input', e.target.innerText)
    }

    // handlerKey (e) {
    //   const textEditor = this.$refs['text-editor']
    //   if (e.keyCode === 13) {
    //     const newElement = document.createElement('p')
    //     textEditor.appendChild(newElement)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
  .v-text-editor {
    max-width: 80rem;
    min-width: 20rem;
    width: 100%;

    &__content {
      min-height: 30rem;
      font-size: 1.7rem;

      &:focus {
        outline: none;
      }
    }
  }
</style>

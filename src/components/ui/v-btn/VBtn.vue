<template lang="pug">
  button.v-btn(
    :class="classes"
    @click="onClick")
    span.v-btn__content
      slot
</template>

<script>
export default {
  name: 'VBtn',

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'v-btn--active': this.active
      }
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/sass/abstracts/_variables.scss';

  .v-btn {
    position: relative;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    transition: .3s;
    border-radius: .4rem;
    min-width: 3.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: $color-blue-lighten-1;

    &:hover {
      color: $color-blue-lighten-2;
      background-color: rgba($color-black, 0.05);
    }

    &:focus {
      outline: none;
      box-shadow:
        0 0 0 .2rem rgba($color-black, 0.1),
        0 0 .6rem .3rem rgba($color-black, 0.1);
    }

    &--active {
      color: $color-blue;
    }

    &__content {
      display: inline-flex;
      align-items: center;
    }
  }
</style>

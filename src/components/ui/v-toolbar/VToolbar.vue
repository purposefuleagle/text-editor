<template lang="pug">
  .v-toolbar
    v-card
      .v-toolbar__wrapper
        slot
</template>

<script>
export default {
  name: 'VToolbar'
}
</script>

<style lang="scss" scoped>
  @import '@/sass/abstracts/_variables.scss';
  .v-toolbar {
    max-width: 80rem;
    min-width: 20rem;
    width: 100%;
    font-size: 1.5rem;

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
</style>

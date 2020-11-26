<template lang="pug" functional>
  .v-card
    slot
</template>

<script>
export default {
  name: 'VCard'
}
</script>

<style lang="scss" scoped>
  @import '@/sass/abstracts/_variables.scss';

  .v-card {
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: 0 0 .6rem rgba($color-black, .2);
    border-radius: .5rem;
    background-color: $color-white;
  }
</style>

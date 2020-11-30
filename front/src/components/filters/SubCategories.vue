<template>
  <div v-on:click="clicked">
    {{ name }}
  </div>
</template>

<script>
export default {
    name: 'SubCategories',
    props: {
      name: String,
    }
}
</script>

<style>
</style>
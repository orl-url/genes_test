<script setup>
const props = defineProps({
  options: Array,
})

const selected = defineModel()
</script>

<template>
  <select v-model="selected" class="dropdown_menu">
    <option v-for="option in props.options" :value="option">{{ option.value }}</option>
  </select>
</template>

<style scoped>
.dropdown_menu {
  background-color: white;
  color: grey;
  border: 1px grey solid;
  border-radius: 5px;
}
</style>
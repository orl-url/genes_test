<script setup>
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: 'Press'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showPreloader: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['click'])

const isButtonDisabled = computed(() => {
  return props.disabled ? "button_disabled" : "button_activated"
})

const isPreloaderShowed = computed(() => {
  return props.showPreloader ? "spinner" : ""
})
</script>

<template>
  <div :class="{preloader: isPreloaderShowed}"
       class="button_container">
    <button class="button"
            :class="[isButtonDisabled, isPreloaderShowed]"
            :disabled="props.disabled"
            @click="emits('click')">
      <span :class="{ display_none: isPreloaderShowed}">{{ props.title }}</span>
    </button>
  </div>
</template>

<style scoped>
.button_container {
  width: inherit;
  max-width: 10%;
  min-width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
}

.button {
  font-weight: 700;
  border-radius: 5px;
  height: 100%;
  margin: auto;
}

.button_disabled {
  background-color: white;
  color: black;
  border: 1px #d7d7d7 solid;
}

.button_activated {
  color: white;
  background-color: #2275e3;
  cursor: pointer;
}

.display_none {
  display: none;
}


.preloader {
  border: 1px #d7d7d7 solid;
  border-radius: 5px;
}

.spinner {
  aspect-ratio: 1/1;
  border: 5px solid white;
  border-top-color: #2275e3;
  border-left-color: #2275e3;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  height: 85%;
  padding: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.button_container:active {
  scale: 105%;
}

</style>

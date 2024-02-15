<script setup>
import FormView from "./views/FormView.vue";
import {onMounted} from "vue";
import AuthService from "./services/auth-service.js";
import {useAuthStore} from "./stores/AuthStore.js";

const authStore = useAuthStore()

onMounted(async () => {
  const response = await AuthService.getToken()
  authStore.token = response.data.access_token
  authStore.base_domain = response.data.base_domain
})
</script> 

<template>
  <form-view/>
</template>

<style scoped>
</style>

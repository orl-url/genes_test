import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
    const token = ref('')
    const base_domain = ref('')

    return {
        token,
        base_domain
    };
})
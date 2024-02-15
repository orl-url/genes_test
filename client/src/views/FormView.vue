<script setup>
import Button from "../components/Button.vue";
import {computed, ref, watch} from "vue";
import Submenu from "../components/DropdownMenu.vue";
import LeadsService from "../services/leads-service.js";
import ContactsService from "../services/contacts-service.js";
import CompaniesService from "../services/companies-service.js";

const createdEntities = ref([])
const options = [
  {key: "none", value: 'Не выбрано'},
  {key: "leads", value: 'Сделка'},
  {key: "contacts", value: 'Контакт'},
  {key: "companies", value: 'Компания'}
]

const firstOption = options[0]
const selected = ref(firstOption)
const btnDisabled = ref(true)
const showBtnPreloader = ref(false)

const selectedFirstOption = computed(() => {
  return selected.value.key === firstOption.key
})

watch(selected, () => {
  btnDisabled.value = selectedFirstOption.value;
})

function activateBtn() {
  btnDisabled.value = false
  showBtnPreloader.value = false;
}

function disableBtn() {
  btnDisabled.value = true
  showBtnPreloader.value = true;
}

async function addEntity(entityName) {
  disableBtn()
  const entity = await createEntity(entityName)
  createdEntities.value.unshift(entity)
  activateBtn()
}

async function createEntity(entityName) {
  const sendEntity = async () => {
    switch (entityName.key) {
      case 'leads': {
        return await LeadsService.createLead();
      }
      case 'contacts': {
        return await ContactsService.createContact();
      }
      case 'companies': {
        return await CompaniesService.createCompany();
      }
    }
  }
  return formatEntity(await sendEntity(), entityName)
}

function formatEntity(response, entity) {
  return {
    name: entity.value,
    id: response.data._embedded[entity.key][0].id
  };
}
</script>

<template>
  <div class="container">
    <section class="select">
      <Submenu v-model="selected" :options="options"/>
      <Button title="Сохранить"
              :disabled="btnDisabled"
              :showPreloader="showBtnPreloader"
              @click="addEntity(selected)"/>
    </section>

    <section class="display">
      <div>
        <p>Name</p>
        <p v-for="entity in createdEntities">{{ entity.name }}</p>
      </div>
      <div>
        <p>Id</p>
        <p v-for="entity in createdEntities">{{ entity.id }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 40vw;
  height: 60vh;
  border: 2px grey solid;
  border-radius: 5%;
}

.dropdown_menu {
  width: calc(100% - 150px);
  height: 50px;
}

.select {
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 5%;
  padding-top: 20px;
  height: auto;
}

.display {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  height: 80%;
  overflow-y: scroll;
}
</style>
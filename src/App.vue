<template>
  <header class="appHeader">
    <AppButton
      v-if="route.name !== 'home'"
      @click="router.push({ name: 'home' })"
    >
      <i class="material-icons"> arrow_back_ios </i> Home
    </AppButton>
    <div class="appHeader__actions">
      <AppButton
        v-if="route.name === 'risk'"
        variant="secondary"
        @click="router.push({ path: `/risk/${$route.params.id}/edit` })"
      >
        <i class="material-icons">edit</i> Edit
      </AppButton>
      <AppButton
        v-if="route.name === 'risk'"
        variant="error"
        :style="{ 'margin-left': '0.5rem' }"
        @click="removeRisk"
      >
        <i class="material-icons">delete</i> Remove
      </AppButton>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import { useRiskStore } from '@/stores/risk';
import AppButton from './components/AppButton.vue';
import { onMounted } from 'vue';

const router = useRouter();
const route = useRoute();
const store = useRiskStore();

function removeRisk() {
  store.removeRisk(route.params.id as string);
  router.push({ name: 'home' });
}

onMounted(() => {
  store.fetchRisks();
});
</script>

<style scoped>
.appHeader {
  display: flex;
}

.appHeader__actions {
  margin-left: auto;
  display: flex;
}
</style>

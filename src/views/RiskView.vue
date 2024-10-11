<template>
  <main class="riskview">
    <AppHeading>{{ riskDetails?.title }}</AppHeading>
    <section class="riskview__section">
      <h2 class="riskview__heading">Overview</h2>
      <p class="riskview__overview">{{ riskDetails?.overview }}</p>
    </section>
    <section class="riskview__section">
      <h2 class="riskview__heading">Description</h2>
      <p class="riskview__description">{{ riskDetails?.description }}</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppHeading from '@/components/AppHeading.vue';
import { useRoute } from 'vue-router';
import { useRiskStore } from '@/stores/risk';
import type { Risk } from '@/types/risk';

const route = useRoute();
const store = useRiskStore();

const riskDetails = store.getRisk(Number(route.params.id)) as Risk;
</script>

<style scoped>
.riskview__section {
  max-width: 50rem;
  margin: 0 auto 2rem;
}

.riskview__heading {
  font-weight: 500;
}
</style>

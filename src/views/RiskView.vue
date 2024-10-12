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
import { computed } from 'vue';

const route = useRoute();
const store = useRiskStore();

const riskDetails = computed(() => store.getRisk(route.params.id as string));
</script>

<style scoped>
.riskview {
  margin-top: 1rem;
}

.riskview__section {
  max-width: 50rem;
  margin: 0 auto 2rem;
}

.riskview__heading {
  font-weight: 500;
}
</style>

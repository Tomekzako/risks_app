<template>
  <div class="riskedit">
    <AppHeading>Edit security risk vulnerability</AppHeading>
    <AppForm type="edit" :risk="riskDetails" @submit="submitForm" />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
import AppHeading from '@/components/AppHeading.vue';
import AppForm from '@/components/AppForm.vue';
import { useRiskStore } from '@/stores/risk';
import type { Risk } from '@/types/risk';

const router = useRouter();
const route = useRoute();
const store = useRiskStore();

const riskDetails = computed(() => store.getRisk(route.params.id as string));

async function submitForm(riskData: Risk) {
  await store.editRisk(riskData);
  router.push({ name: 'risk', params: { id: riskData.id } });
}
</script>

<style scoped></style>

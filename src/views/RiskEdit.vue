<template>
  <div class="riskedit">
    <AppHeading>Edit security risk vulnerability</AppHeading>
    <AppForm
      type="edit"
      :risk="store.getRisk(Number($route.params.id))"
      @submit="submitForm"
    />
  </div>
</template>

<script setup lang="ts">
import AppHeading from '@/components/AppHeading.vue';
import AppForm from '@/components/AppForm.vue';
import { useRiskStore } from '@/stores/risk';
import { useRouter } from 'vue-router';
import type { Risk } from '@/types/risk';
import AppButton from '@/components/AppButton.vue';

const router = useRouter();
const store = useRiskStore();

function submitForm(riskData: Risk) {
  store.editRisk(riskData);
  router.push({ name: 'risk', params: { id: riskData.id } });
}
</script>

<style scoped></style>

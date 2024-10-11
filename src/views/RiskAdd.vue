<template>
  <div class="riskform">
    <AppHeading>Create security risk vulnerability</AppHeading>
    <AppForm type="add" @submit="submitForm" />
  </div>
</template>

<script setup lang="ts">
import AppForm from '@/components/AppForm.vue';
import AppHeading from '@/components/AppHeading.vue';
import { useRiskStore } from '@/stores/risk';
import { useRouter } from 'vue-router';
import type { Risk } from '@/types/risk';

const router = useRouter();
const store = useRiskStore();

function submitForm(riskData: Risk) {
  store.createRisk(riskData);
  router.push({ name: 'home' });
}
</script>

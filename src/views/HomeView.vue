<template>
  <main>
    <AppHeading>Top Web Application Security Risks</AppHeading>
    <AppButton variant="secondary" @click="router.push({ name: 'risk-add' })">
      <i class="material-icons">add</i>
      Create Risk
    </AppButton>
    <p v-if="!riskList">There are no security risks created.</p>
    <RiskItem v-for="(risk, i) in riskList" :key="i" :risk="risk" />
  </main>
</template>

<script setup lang="ts">
import RiskItem from '../components/RiskItem.vue';
import AppHeading from '../components/AppHeading.vue';
import AppButton from '../components/AppButton.vue';
import { useRiskStore } from '@/stores/risk';
import { useRouter } from 'vue-router';

const router = useRouter();
const { riskList } = useRiskStore();
</script>

<style scoped></style>

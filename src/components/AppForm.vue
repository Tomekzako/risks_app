<template>
  <div class="riskform">
    <form @submit.prevent="submitForm" class="riskform__form">
      <AppInput v-model="riskData.title" name="title" required />
      <AppTextarea v-model="riskData.overview" name="overview" />
      <AppTextarea
        v-model="riskData.description"
        name="description"
        :maxLength="1200"
        :rows="10"
        required
      />
      <AppButton
        class="riskform__button"
        type="submit"
        variant="secondary"
        :is-disabled="!formIsValid"
        :style="{ 'margin-bottom': '0.5rem' }"
        >{{ type === 'add' ? 'Create' : 'Save' }} Risk</AppButton
      >
      <AppButton @click="cancelEdition">Cancel</AppButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRiskStore } from '@/stores/risk';
import { useRouter } from 'vue-router';
import { ref, computed, watch, reactive } from 'vue';
import AppTextarea from '@/components/AppTextarea.vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import type { Risk } from '@/types/risk';

const props = defineProps<{
  type: 'add' | 'edit';
  risk?: Risk;
}>();

const emit = defineEmits<{
  (e: 'submit', value: Risk): void;
}>();

const router = useRouter();
const store = useRiskStore();

let riskData = reactive(
  props.risk
    ? { ...props.risk }
    : {
        title: '',
        overview: '',
        description: '',
        id: Date.now().toString(),
      }
);

const formIsValid = computed(() => {
  return riskData.title && riskData.description;
});

watch(
  () => props.risk,
  () => {
    if (props.risk) {
      riskData = { ...props.risk };
    }
  }
);

function submitForm() {
  emit('submit', { ...riskData });
}

function cancelEdition() {
  props.type === 'add' ? router.push({ name: 'home' }) : router.back();
}
</script>

<style scoped>
.riskform {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.riskform__heading {
  margin-bottom: 1rem;
}

.riskform__form {
  background: white;
  padding: 1.5rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.riskform__button {
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .riskform__form {
    width: 30rem;
  }
}
</style>

<template>
  <div class="riskform">
    <form @submit.prevent="submitForm" class="riskform__form">
      <AppInput v-model="title" name="title" required />
      <AppTextarea v-model="overview" name="overview" />
      <AppTextarea
        v-model="description"
        name="description"
        :maxLength="1000"
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
import { ref, computed } from 'vue';
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

const title = ref(props.risk?.title ?? '');
const overview = ref(props.risk?.overview ?? '');
const description = ref(props.risk?.description ?? '');
const id = ref(props.risk?.id ?? Date.now());

function submitForm() {
  const formData = {
    id: id.value,
    title: title.value,
    overview: overview.value,
    description: description.value,
  } as Risk;

  emit('submit', formData);
}

function cancelEdition() {
  props.type === 'add' ? router.push({ name: 'home' }) : router.back();
}

const formIsValid = computed(() => {
  return title.value && description.value;
});
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
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 30rem;
}

.riskform__button {
  margin-top: 1.5rem;
}
</style>

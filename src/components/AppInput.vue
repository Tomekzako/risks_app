<template>
  <label :for="name">{{ capitalizeWord(name) }}{{ required ? '*' : '' }}</label>
  <input
    type="text"
    class="appInput"
    :id="name"
    :value="modelValue"
    @input="onInput"
  />
  <p v-if="required && !modelValue" class="appInput__required">
    * This field is required
  </p>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { capitalizeWord } from '@/utils/capitalize-word';

defineProps<{
  modelValue?: string;
  required?: boolean;
  name: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (e: Event) =>
  emit('update:modelValue', (e.target as HTMLInputElement).value);
</script>

<style scoped>
.appInput {
  border: 1px solid var(--c-grey);
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Inter', sans-serif;
  color: var(--c-black);
  width: 100%;
}

.appInput__required {
  font-size: 0.75rem;
  color: var(--c-grey-dark);
}
</style>

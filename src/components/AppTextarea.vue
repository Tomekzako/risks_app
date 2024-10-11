<template>
  <div class="appTextarea">
    <label :for="name"
      >{{ capitalizeWord(name) }}{{ required ? '*' : '' }}</label
    >
    <div class="appTextarea__wrapper">
      <textarea
        type="text"
        class="appTextarea__textarea"
        :maxlength="maxLength"
        :rows="rows"
        :id="name"
        :value="modelValue"
        @input="onInput"
      />
      <span class="appTextarea__counter">
        {{ modelValue?.length }} / {{ maxLength }}
      </span>
    </div>
    <p v-if="required && !modelValue" class="appTextarea__required">
      * This field is required
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, computed } from 'vue';
import { capitalizeWord } from '@/utils/capitalize-word';

const props = withDefaults(
  defineProps<{
    name: string;
    maxLength?: number;
    rows?: number;
    modelValue?: string;
    required?: boolean;
  }>(),
  {
    maxLength: 300,
    rows: 6,
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (e: Event) =>
  emit('update:modelValue', (e.target as HTMLInputElement).value);

const capitalized = computed(
  () => props.name.charAt(0).toUpperCase() + props.name.slice(1)
);
</script>

<style scoped>
.appTextarea {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}

.appTextarea__wrapper {
  position: relative;
  display: flex;
}

.appTextarea__textarea {
  border: 1px solid var(--c-grey);
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Inter', sans-serif;
  color: var(--c-black);
  width: 100%;
}

.appTextarea__counter {
  position: absolute;
  bottom: -1.2rem;
  right: 0;
  color: var(--c-grey-dark);
  font-size: 0.75rem;
}

.appTextarea__required {
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: var(--c-grey-dark);
}
</style>

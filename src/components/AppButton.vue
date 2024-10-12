<template>
  <button
    class="appButton"
    :disabled="isDisabled"
    :class="[{ 'appButton--disabled': isDisabled }, `appButton--${variant}`]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    isDisabled?: boolean;
    variant?: 'primary' | 'secondary' | 'error';
  }>(),
  {
    variant: 'primary',
  }
);
</script>

<style>
.appButton {
  color: var(--c-white);
  padding: 0.5rem 1rem;
  letter-spacing: 0.3px;
  height: 2rem;
  border: 0;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
}

.appButton--primary {
  background: var(--c-primary);
}

.appButton--primary:hover {
  background: var(--c-primary-dark);
}

.appButton--secondary {
  background: var(--c-secondary);
}

.appButton--secondary:hover {
  background-color: var(--c-secondary-dark);
}

.appButton--error {
  background: var(--c-error);
}

.appButton--error:hover {
  background: var(--c-error-dark);
}

.appButton--disabled {
  cursor: unset;
  background-color: var(--c-grey-soft);
}
.appButton--disabled:hover {
  background-color: var(--c-grey-soft);
}

.appButton .material-icons {
  font-size: 0.75rem;
  font-weight: bold;
  margin-right: 0.25rem;
}
</style>

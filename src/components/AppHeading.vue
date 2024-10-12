<template>
  <h1 class="appHeading">
    <slot />
  </h1>
</template>

<style scoped>
.appHeading {
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 600;
  color: var(--c-black);
  margin: 1rem 0;
  text-align: center;
}

@media (min-width: 768px) {
  .appHeading {
    font-size: 2rem;
    margin: 1.5rem 0;
  }
}
</style>

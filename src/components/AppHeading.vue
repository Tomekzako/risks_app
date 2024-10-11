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
  color: #1a1a1a;
  margin-bottom: 1rem;
  text-align: center;
}

@media (min-width: 768px) {
  .appHeading {
    font-size: 2rem;
    margin: 1.5rem 0;
  }
}
</style>

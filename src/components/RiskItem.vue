<template>
  <div
    class="risk"
    @click="router.push({ name: 'risk', params: { id: risk.id } })"
  >
    <div class="risk__header">
      <h3 class="risk__header--heading">{{ risk.title }}</h3>
      <div class="risk__header--icons">
        <i
          class="material-icons risk__header--icon risk__header--icon-edit"
          @click.stop="router.push({ path: `/risk/${risk.id}/edit` })"
        >
          edit
        </i>
        <i
          class="material-icons risk__header--icon risk__header--icon-delete"
          @click.stop="store.removeRisk(risk.id)"
        >
          delete
        </i>
      </div>
    </div>
    <p class="risk__overview">{{ risk.overview }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useRiskStore } from '@/stores/risk';
import type { Risk } from '@/types/risk';

const router = useRouter();
const store = useRiskStore();

defineProps<{
  risk: Risk;
}>();
</script>

<style scoped>
.risk {
  padding: 1rem 1.5rem;
  background: #fff;
  margin-top: 1rem;
  border-radius: 0.25rem;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0);
  cursor: pointer;
  position: relative;
}

.risk:hover {
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.08);
}

.risk__header {
  display: flex;
  align-items: center;
}

.risk__header--heading {
  font-weight: bold;
}

.risk__header--icons {
  margin-left: auto;
}

.risk__header--icon {
  margin-left: 4px;
}

.risk__header--icon-edit {
  color: #22c55e;
}

.risk__header--icon-edit:hover {
  color: #16a34a;
}

.risk__header--icon-delete {
  color: #dc2626;
}

.risk__header--icon-delete:hover {
  color: #b91c1c;
}
</style>

<script setup>
import IconLink from './IconLink.vue'

defineProps({
  link: { type: Object, required: true },
})
</script>

<template>
  <a
    class="card"
    :href="link.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="card__icon">
      <IconLink :name="link.icon" />
    </span>
    <span class="card__body">
      <span class="card__label">{{ link.label }}</span>
      <span v-if="link.description" class="card__desc">{{
        link.description
      }}</span>
    </span>
    <svg
      class="card__arrow"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.15rem;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-sm);
  backdrop-filter: blur(8px);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.card:hover {
  transform: translateY(-2px);
  border-color: rgba(124, 92, 255, 0.5);
  background: rgba(255, 255, 255, 0.07);
}

.card__icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--accent-grad);
  color: #fff;
}

.card__body {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.card__label {
  font-weight: 600;
}

.card__desc {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.card__arrow {
  margin-left: auto;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: transform 0.18s ease, color 0.18s ease;
}

.card:hover .card__arrow {
  color: var(--text);
  transform: translate(2px, -2px);
}
</style>

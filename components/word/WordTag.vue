<template>
  <div>
    <NuxtLink :to="`/${word}`">
      {{ word }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
  padding: 0.25rem 0.75rem 0.1rem 0.75rem;
  margin: 0 0.25rem;
  border: 1px solid #000;
  border-radius: 10rem;
  letter-spacing: 0.06rem;
}
</style>

<template>
  <div class="wrapper">
    <main>
      <Nuxt />
      <TheNav />
    </main>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  @media (min-width: $breakpoint-pc) {
    justify-content: center;
  }
}
main {
  display: block;
  max-width: $word-max-width;
  @media (min-width: $breakpoint-pc) {
    display: grid;
    max-width: none;
    grid-template-columns: minmax(0, $word-max-width) $nav-width;
    column-gap: 5rem;
  }
}
</style>

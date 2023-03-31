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
  justify-content: center;
}
main {
  display: grid;
  grid-template-columns: minmax(0, $word-width-pc) $nav-width-pc;
}
</style>

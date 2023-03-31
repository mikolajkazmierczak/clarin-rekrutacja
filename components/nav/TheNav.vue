<template>
  <nav>
    <ul>
      <li v-for="(word, i) in words.list" :key="i">
        <NavItem :word="word" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["words"]),
  },
};
</script>

<style scoped lang="scss">
nav {
  position: sticky;
  top: 0;
  overflow-y: scroll;
  padding: 2rem;
  height: 100vh;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

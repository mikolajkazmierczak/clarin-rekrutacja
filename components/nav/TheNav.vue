<template>
  <div>
    <div :class="{ open: isOpen }" class="bg"></div>
    <nav :class="{ open: isOpen }">
      <ul>
        <li v-for="(word, i) in words.list" :key="i">
          <NavItem :word="word" @navigate="isOpen = false" />
        </li>
      </ul>
    </nav>
    <button @click="isOpen = !isOpen">
      <i class="ri-menu-line" v-if="!isOpen" />
      <i class="ri-close-line" v-if="isOpen" />
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["words"]),
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;
  padding: 2rem;
  padding-bottom: 5rem;
  height: 100vh;
  width: $nav-width;
  transform: translateX(100%);
  transition: transform 200ms;
  &.open {
    transform: translateX(0);
  }
  @media (min-width: $breakpoint-pc) {
    position: sticky;
    width: unset;
    transform: translateX(0);
  }
}

.bg {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  transition: opacity 200ms;
  &.open {
    opacity: 1;
    pointer-events: auto;
  }
  @media (min-width: $breakpoint-pc) {
    display: none;
  }
}

button {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  display: grid;
  place-items: center;
  border: solid 2px $secondary;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  font-size: 2rem;
  color: $secondary;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: $secondary;
  }
  @media (min-width: $breakpoint-pc) {
    display: none;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

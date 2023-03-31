<template>
  <a
    class="link"
    :class="{
      'link--active': this.isActive,
      animate: isAnimated,
    }"
    :href="`/${word}`"
    @click.prevent="navigate"
  >
    {{ word }}
  </a>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.word === this.$route.params.word;
    },
  },
  data: () => ({
    isAnimated: false,
  }),
  methods: {
    navigate() {
      if (!this.isActive) {
        this.$router.push(`/${this.word}`);
        this.$emit("navigate");
        // animate only once
        if (!this.isAnimated) {
          this.isAnimated = true;
          setTimeout(() => {
            this.isAnimated = false;
          }, 1000);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.link {
  display: block;
  padding: 0.8rem 1rem;
  border: 1px solid $primary;
  border-radius: 10rem;
  background-color: #fff;
  transition: background-color 500ms cubic-bezier(0.29, 0.02, 0.97, 0.22);
}
.link:hover,
.link--active {
  transition: background-color 0ms cubic-bezier(0.06, 0.93, 0.07, 0.97);
  background-color: $primary;
  color: #fff;
}

.animate {
  animation: click 1s;
}
@keyframes click {
  50% {
    transform: scale(1.1);
    background-color: $highlight;
  }
}
</style>

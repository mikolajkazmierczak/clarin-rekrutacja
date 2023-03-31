<template>
  <div class="content">
    <h1 class="title">{{ words.current.word.toUpperCase() }}</h1>
    <div class="phonetics">
      <WordPhonetics :phonetics="words.current.phonetics" />
    </div>
    <div class="meanings">
      <div
        class="meanings__item"
        v-for="({ partOfSpeech, definitions }, i) in words.current.meanings"
        :key="i"
      >
        <WordMeaning :partOfSpeech="partOfSpeech" :definitions="definitions" />
      </div>
    </div>
  </div>
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
.content {
  padding: 5rem 1.5rem;
}
.title {
  font-size: 2.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.phonetics {
  margin-bottom: 1rem;
}
</style>

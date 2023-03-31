<template>
  <div>
    <h2 class="pos">{{ partOfSpeech.toUpperCase() }}</h2>
    <div class="definitions">
      <div
        class="definitions__item"
        v-for="({ definition, example, synonyms, antonyms }, i) in definitions"
        :key="i"
      >
        <WordDefinition
          :definition="definition"
          :example="example"
          :synonyms="synonyms"
          :antonyms="antonyms"
        />
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    partOfSpeech: {
      type: String,
      required: true,
    },
    definitions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.pos {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border: solid 2px $secondary;
  border-radius: 10rem;
  padding: 0.35rem 1rem;
  color: $secondary;
}
.definitions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
}
</style>

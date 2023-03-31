<template>
  <div>
    <p class="definition">
      {{ definition || "[definition not defined]" }}
    </p>
    <div class="info" v-if="example">
      <h3 class="info__title">Example:</h3>
      <p class="info__text">{{ example }}</p>
    </div>
    <div class="info" v-if="synonyms.length">
      <h3 class="info__title">Synonyms:</h3>
      <div class="info__tags">
        <div v-for="(synonym, i) in synonyms" :key="i">
          <WordTag :word="synonym" />
        </div>
      </div>
    </div>
    <div class="info" v-if="antonyms.length">
      <h3 class="info__title">Antonyms:</h3>
      <div class="info__tags">
        <div v-for="(antonym, i) in antonyms" :key="i">
          <WordTag :word="antonym" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    definition: {
      type: String,
      required: true,
    },
    example: {
      type: String,
      required: false,
    },
    synonyms: {
      type: Array,
      required: false,
    },
    antonyms: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped lang="scss">
* {
  overflow-wrap: break-word;
}
.definition {
  margin-bottom: 1rem;
  font-weight: 700;
  font-style: italic;
}
.info {
  margin-bottom: 1rem;
}
.info__title {
  font-weight: 200;
  margin-bottom: 0.5rem;
  color: $secondary;
}
.info__text {
  padding-left: 2rem;
}
.info__tags {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.25rem;
  gap: 0.5rem;
}
</style>

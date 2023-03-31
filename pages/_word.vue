<template>
  <TheWord />
</template>

<script>
export default {
  head() {
    return {
      title: `${this.word} | DictionarApp`,
    };
  },

  async asyncData({ params, error, store }) {
    const { word } = params;
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const resData = await res.json();
      const wordData = resData[0]; // the res json is a list with one item
      store.commit("words/setCurrent", wordData);
      return { word };
    } catch (e) {
      return error(e);
    }
  },
};
</script>

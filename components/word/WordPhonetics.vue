<template>
  <div>
    <span class="title">PHONETICS:</span>
    <div class="phonetics">
      <div class="phonetics__item" v-for="(phonetic, i) in phonetics" :key="i">
        <span class="phonetics__item__text">{{ phonetic.text }}</span>
        <button @click="() => playAudio(phonetic.audio)" v-if="phonetic.audio">
          <i class="ri-volume-up-fill" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    phonetics: {
      type: Array,
      required: true,
    },
    audio: {
      type: String,
      required: false,
    },
  },
  methods: {
    playAudio(url) {
      const audio = new Audio(url);
      audio.play();
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 0.8rem;
  font-weight: bold;
  opacity: 0.3;
  letter-spacing: -0.5px;
}
.phonetics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-items: flex-end;
}
.phonetics__item {
  font-size: 1.2rem;
  margin: 0.5rem;
}
.phonetics__item * {
  color: $secondary;
}
.phonetics__item__text {
  margin-right: 0.5rem;
}
</style>

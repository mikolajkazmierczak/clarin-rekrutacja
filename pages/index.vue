<script>
export default {
  middleware({ redirect, store }) {
    const firstWord = store.state.words.list[0];
    return redirect(`/${firstWord}`);
  },
};
</script>

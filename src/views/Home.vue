<template>
  <div class="home">
    <h1>SKY WHEEL</h1>
    <div v-html="ctx"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  beforeCreate() {
    this.$http.get(this.$api.index).then(res => {
      this.$nextTick(() => {
        this.ctx = res;
      });
    });
  },
  data() {
    return {
      ctx: ''
    };
  }
};
</script>

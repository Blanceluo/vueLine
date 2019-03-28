<template>
  <div class="home">
    <div v-html="ctx"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  beforeCreate() {
    this.$http.get('/index').then((res) => {
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

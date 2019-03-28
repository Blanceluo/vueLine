<template>
  <div class="home">
    <h1>SKY WHEEL</h1>
    <div v-html="ctx"></div>
    <iframe
      style="display:none;"
      frameborder="no"
      border="0" marginwidth="0" marginheight="0"
      width=330 height=86
      src="//music.163.com/outchain/player?type=2&id=3932159&auto=1&height=66">
    </iframe>
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

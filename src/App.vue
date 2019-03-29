<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view/>
    <iframe
      frameborder="no"
      border="0" marginwidth="0" marginheight="0"
      width=330 height=86
      src="//music.163.com/outchain/player?type=2&id=3932159&auto=1&height=66">
    </iframe>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

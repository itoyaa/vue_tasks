<template>
  <div id="app" class="app">
    <div class="nav">
      <ul>
        <li><router-link to="/task21">Task 2.1</router-link></li>
        <li><router-link to="/task22">Task 2.2</router-link></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

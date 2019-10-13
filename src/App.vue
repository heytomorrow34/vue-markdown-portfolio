<template>
  <div id="app">
    <header>
      <navbar>
        <ul class="navbar">
          <li>
            <router-link class="navlink" to="/home">Work</router-link>
          </li>
          <li>
            <router-link class="navlink" to="/about">About</router-link>
          </li>
        </ul>
      </navbar>
      <div class="introduction">
        <h2>Your Name Here</h2>
        <div>Hello! I am a description where you can introduce yourself briefly to anyone coming to your page!</div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.introduction {
  text-align: left;
}
.navbar {
  list-style-type: none;
  overflow: hidden;

}
.navbar li {
  float: right;
  padding: 0px 10px 0px 10px;
}
.navlink {
  text-decoration: none;
}
</style>

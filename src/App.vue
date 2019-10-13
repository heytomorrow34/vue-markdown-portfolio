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
        <h2>Tracie Thompson</h2>
        <div>Hello! I'm a Chicago-based Industrial and Graphic designer with a passion for research, education, and experimentation</div>
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

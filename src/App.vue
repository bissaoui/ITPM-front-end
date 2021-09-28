<template>
  <div id="nav">
    <Nav />
    <!--  
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
    -->
  </div>
  <router-view />
  <Footer />
</template>
<script>
import Nav from "@/components/include/Nav.vue";
import Footer from "@/components/include/Footer.vue";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div class="mm fs-1">
    <div class="c404">404</div>
    <div class="pn text-secondary">Page non trouvée</div>
    <div class="text-secondary">
      Nous sommes désolés mais la page que vous recherchez n'existe pas
    </div>
    <div class="imgg">
    
    </div>
  </div>
</template>
<style scoped>
.mm {
  width: 80%;
  margin: auto;
  margin-bottom: 30px;
  padding-top: 2%;
  background-color: rgb(255, 255, 255);
}
.c404 {
  font-size: 100px;
  color: rgb(31, 31, 134);
  font-family: "Courier New", Courier, monospace;
}
.pn {
  font-size: 70px;
}
.imgg{
  background-image: url("../assets/image/not.gif");
  height: 600px;
  background-repeat: no-repeat;
  background-position-x: center;

}
</style>
<script lang="ts">
export default {
  name: "NotFound",
};
</script>
<template>
  <div class="home">
    <div class="presentation">
      <div class="content shadow">
        <div class="text-center tw mb-5" s>
          <div style="">Royaume Du Maroc</div>
          <div>Département De La Pêche Maritim</div>
          <div>Institut De Technologie Des Pêches Maritimes De Safi</div>
        </div>
      </div>
    </div>
    <div class="actualite shadow mb-5" s></div>
  </div>
</template>
<style>
.presentation {
  background-image: url("../assets/image/Ecole.jpg");
  width: 80%;
  margin: auto;
  height: 370px;
  background-position-y: 10%;
  background-size: cover;
  z-index: 0;
}
.content {
  background-color: rgba(0, 0, 0, 0.41);
  z-index: 1;
  width: 100%;
  height: 370px;
}
.tw:first-child {
  padding-top: 6%;
}
.tw {
  color: white;
  font-family: "Bahnschrift";
  font-size: 41px;
  font-weight: bold;
  justify-content: center; /* align horizontal */
  align-items: center;
}

@media (max-width: 1223px) {
  .tw:first-child {
    padding-top: 12%;
  }
  .tw {
    font-size: 35px;
  }
}

@media (max-width: 1045px) {
  .tw:first-child {
    padding-top: 16%;
  }
  .tw {
    font-size: 30px;
  }
}

@media (max-width: 893px) {
  .tw:first-child {
    padding-top: 20%;
  }
  .tw {
    font-size: 25px;
  }
}

@media (max-width: 744px) {
  .tw:first-child {
    padding-top: 25%;
  }
  .tw {
    font-size: 22px;
  }
}

@media (max-width: 655px) {
  .tw:first-child {
    padding-top: 25%;
  }
  .tw {
    font-size: 20px;
  }
}

@media (max-width: 594px) {
  .tw:first-child {
    padding-top: 33%;
  }
  .tw {
    font-size: 16px;
  }
}
.actualite {
  height: 360px;
  width: 80%;
  margin: auto;
}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld,
//   },
// };
</script>

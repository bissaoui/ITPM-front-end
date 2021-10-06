<template>
  <div class="containrer mb-5">
    <div class="bodyy">
      <div class="w-100">
        <div class="w-100 imz fluid-img"></div>
      </div>
      <div class="bg-white w-50 m-auto position-relative sousHead pt-5">
        <h1 class="hmm fw-bold">
          AVIS AUX ELEVES DE LA 2EME ANNEE DE L’ITPM DE SAFI
        </h1>
        <p class="text-secondary">
          Publié aujourd’hui à 01h36, mis à jour à 11h42
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&family=Roboto&display=swap");
.hmm {
  font-family: "cairo";
}
.sousHead {
  height: 200px;
  top: -125px;
}

.containrer {
  width: 80% !important;
  margin: auto;
}
.head h1 {
  color: #010066;
  font-family: "Raleway";
  font-size: 30px;
  font: bold;
}
.carde {
  height: 400px;
  box-shadow: 0 0 0 !important;
}
.carde h4 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #464a54;
}
.imz {
  height: 500px;
  background-image: url(/img/p2.88c6702a.jpg);
  z-index: 0;
  background-size: cover;
  background-position-y: 55%;
  background-position-x: 52%;
}
.image {
  width: 85%;
  margin: auto;
  margin-top: 2em;
  height: 220px;
}
.carde:hover {
  transform: translateY(-12px);
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
}
.btn-primary {
  background: #010066;
  border: #010066;
}

.content h1 {
  font-family: "Raleway";
  padding: 10%;
  text-align: justify;
}
@media (max-width: 870px) {
  .imz {
    height: 300px;
  }

  .imz .content {
    height: 300px;
  }
}
@media (max-width: 570px) {
  .imz {
    height: 250px;
  }

  .imz .content {
    height: 250px;
  }

  .content h1 {
    font-size: 17px;
    text-align: justify;
    padding: 12%;
  }
}

.content {
  background-color: rgba(0, 0, 0, 0.41);
  z-index: 1;
  width: 100%;
  height: 370px;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
<script >
export default {};
</script>
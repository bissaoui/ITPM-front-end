<template>
  <div class="containrer mb-5">
    <div class="bodyy">
      <div class="w-100">
        <div class="w-100 imz fluid-img"></div>
      </div>
      <div
        class="bg-white w-50 m-auto pb-2 shadow position-relative sousHead pt-5"
      >
        <h1 class="hmm fw-bold">
          AVIS AUX ELEVES DE LA 2EME ANNEE DE L’ITPM DE SAFI
        </h1>
        <p class="text-secondary">
          Publié aujourd’hui à 01h36, mis à jour à 11h42
        </p>
      </div>
      <div class="bg-white w-75 m-auto cnt shadow">
        <p class="fs-3">
          Il est porté à la connaissance des élèves de la 2ème année, que la
          rentrée scolaire au titre de l’année scolaire 2021/2022 aura lieu le :
          Mercredi 13 Octobre à 09H00 du matin.
        </p>
        <p class="fs-3">
          A cet effet, vous êtes appelés à vous présenter à l’ITPM de Safi,
          munis de :
        </p>
        <ul class="fs-4">
          <li>** Passe sanitaire COVID 19 ou ayant reçu la 1ère dose</li>
          <li>** Besoins scolaires</li>
          <li>** Vos livrés maritimes.</li>
          <li>** Frais d’assurance annuelle (86DHS).</li>
        </ul>
        <p class="fs-2  text-danger">N.B : Les cheveux doivent être correctement coupées</p>
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

.cnt {
  height: auto;
  margin-top: -90px !important;
  text-align: justify;
  padding: 50px;
}
.sousHead {
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
.imz {
  height: 500px;
  background-image: url("../assets/image/p2.jpg");
  z-index: 0;
  background-size: cover;
  background-position-y: 55%;
  background-position-x: 52%;
}

@media (max-width: 870px) {
  .imz {
    height: 300px;
  }
  .sousHead h1 {
    font-size: 20px;
  }
  .sousHead {
    top: -100px;
  }
  .cnt {
    margin-top: -65px !important;
  }
  .sousHead p {
    font-size: 11px;
  }
  .fs-3{
    font-size: 15px !important;
  }
   .fs-4{
    font-size: 14px !important;
  }
   .fs-2{
    font-size: 13px !important;
  }
}
@media (max-width: 570px) {
  .imz {
    height: 250px;
  }
  .sousHead h1 {
    font-size: 19px;
  }
  .sousHead {
    width: 75% !important;
    top: -100px;
  }
  .cnt {
    margin-top: -65px !important;
  }
  .sousHead p {
    font-size: 11px;
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
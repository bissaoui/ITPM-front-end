<template>
  <div class="containrer mb-5">
    <div class="text-start mb-3">
      <a href="/" class="m-1 text-decoration-none"> Accueil </a>
      <span class="">›</span>
      <a href="/Formations" class="m-1 text-decoration-none"> formations </a>
      <span class="">›</span>
      <a href="" class="m-1 text-decoration-none"> Qualification </a>
    </div>
    <div class="bodyy">
      <div class="w-100">
        <div class="w-100 imz fluid-img"></div>
      </div>
      <div
        class="bg-white w-50 m-auto pb-2 shadow position-relative sousHead pt-5"
      >
        <h1 class="hmm fw-bold">Qualification</h1>
      </div>
      <div class="bg-white w-100 m-auto cnt shadow">
        <h1 class="">Filières</h1>
        <hr class="w-100" />
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4" style="text-align: center">
            <div class="carde rounded bg-white w-100">
              <div class="image">
                <img
                  src="../assets/image/f22.jpeg"
                  style="height: -webkit-fill-available"
                  alt=""
                />
              </div>
              <h4 class="mt-3">Mécanicien Pratique</h4>
              <div>
                <div class="btn btn-primary rounded-pill p-2 px-5 mt-2">
                  Découvrir
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4" style="text-align: center">
            <div class="carde rounded bg-white w-100">
              <div class="image">
                <img
                  src="../assets/image/f11.jpg"
                  style="height: -webkit-fill-available"
                  alt=""
                />
              </div>
              <h4 class="mt-3">Patron de pêche côtière</h4>
              <div>
                <div class="btn btn-primary rounded-pill p-2 px-5 mt-2">
                  Découvrir
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="">Condition d’admission</h1>
        <hr class="w-100" />
        <div class="text-start">
          <div class="fs-4 text-danger">
            <b>Pour les nouveaux candidats </b>
          </div>
          <ul class="text-secondary">
            <li>9ème année de l’enseignement fondamental</li>
            <li>
              Etre âgé de moins 25 ans Aptitude physique à exercer la fonction
              de marin.
            </li>
          </ul>
          <div class="fs-4 text-danger">
            <b>Pour les marins en activité Certificat de spécialisation </b>
          </div>
          <ul class="text-secondary">
            <li>Agé de moins 40 ans.</li>
          </ul>
        </div>
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
  margin-top: -15px;
  padding: 40px;
}
a {
  color: #665c5c !important;
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

.image {
  width: 75%;
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
  background-image: url("../assets/image/f2.jpg");
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
  .fs-3 {
    font-size: 15px !important;
  }
  .fs-4 {
    font-size: 14px !important;
  }
  .fs-2 {
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
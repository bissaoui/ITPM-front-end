<template>
  <div class="x m-auto">
    <div class="text-start mb-3">
      <a href="/" class="m-1 text-decoration-none"> Accueil </a>
      <span class="">›</span>
      <a href="/Formations" class="m-1 text-decoration-none"> formations </a>
    </div>

    <div class="bodyy">
      <div class="w-100">
        <div class="w-100 imz fluid-img">
          <div class="content">
            <h1 class="text-white">
              La formation résidentielle s’adresse aux jeunes lycéens et aux
              professionnels de la pêche maritime et aussi assure régulièrement
              des sessions de formation continue au profit des marins et
              officiers navigants à la pêche
            </h1>
          </div>
        </div>
      </div>
      <div class="head mt-5">
        <h1 class="float-start">Formations</h1>
        <hr class="w-100" />
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="carde rounded bg-white w-100">
            <div class="image">
              <img
                src="../assets/image/f1.jpg"
                style="height: -webkit-fill-available"
                alt=""
              />
            </div>
            <h4 class="mt-3">Formation Continue</h4>
            <div>
              <div class="btn btn-primary rounded-pill p-2 px-5 mt-2">
                Découvrir
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="carde rounded bg-white w-100 pb-3">
            <div class="image">
              <img
                src="../assets/image/f2.jpg"
                style="height: -webkit-fill-available"
                alt=""
              />
            </div>
            <h4 class="mt-3">Technicien</h4>
            <div>
              <div class="btn btn-primary rounded-pill p-2 px-5 mt-2">
                Découvrir
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="carde rounded bg-white w-100">
            <div class="image">
              <img
                src="../assets/image/f3.jpg"
                style="height: -webkit-fill-available"
                alt=""
              />
            </div>
            <h4 class="mt-3">Qalification</h4>
            <div>
              <div class="btn btn-primary rounded-pill p-2 px-5 mt-2">
                Découvrir
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="carde rounded bg-white w-100">
            <div class="image">
              <img
                src="../assets/image/f4.jpg"
                style="height: -webkit-fill-available"
                alt=""
              />
            </div>
            <h4 class="mt-3">Spécialisation</h4>
            <div>
              <div class="btn btn-primary rounded-pill p-2 px-5 mt-2">
                Découvrir
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&family=Roboto&display=swap");

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
  background-image: url("../assets/image/titi.jpg");
  background-size: cover;
  z-index: 0;
}
.x {
  width: 80%;
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

.content h1 {
  font-family: "Raleway";
  padding: 10%;
  text-align: justify;
}
a {
  color: #665c5c !important;
}
@media (max-width: 870px) {
  .imz {
    height: 300px;
  }

  .imz .content {
    height: 300px;
  }
  .content h1 {
    font-size: 25px;
    text-align: justify;
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
  height: 100%;
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
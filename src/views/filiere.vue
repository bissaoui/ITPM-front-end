<template>
  <div class="containrer mb-5 m-auto">
    <div class="text-start mb-3">
      <a href="/" class="m-1 text-decoration-none"> Accueil </a>
      <span class="">›</span>
      <a href="/Formations" class="m-1 text-decoration-none"> formations </a>
      <span class="">›</span>
      <a href="" class="m-1 text-decoration-none"> Qualification </a>
      <span class="">›</span>
      <a href="" class="m-1 text-decoration-none"> Mécanicien Pratique </a>
    </div>
    <div class="h-100 p-2">
      <div class="row p-4">
        <!-- <div class="col-lg-12">
          <div class="df-header">
            <h2 class="title-style">Présentation de la filiere</h2>
          </div>
        </div> -->
        <div class="col-lg-12">
          <div class="df-lblock text-start shadow">
            <div class="mb-3">
              <img src="../assets/image/diploma.png" alt="" />
              <span class="mx-3 fs-4">Mécanicien Pratique</span>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="df-rblock shadow my-4 bg-white">
            <h5 class="text-start">Présentation de la filiere</h5>
            <div>
              <p>
                Le
                <strong>Mécanicien Pratique </strong>&nbsp;Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Culpa incidunt libero
                ipsum tempora ratione odio? Nisi ad animi fuga tenetur, sed,
                magni similique maxime accusamus dolor vitae, reprehenderit
                facilis! Sapiente.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 h-100">
          <img
            src="../assets/image/f22.jpeg"
            class="w-100 h-50 shadow"
            alt=""
            srcset=""
          />
        </div>

        <div class="col-lg-6 text-start">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item my-3 shadow">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Profile de formation
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime laudantium in accusantium velit. Laborum eos,
                    similique rerum dolor ipsum impedit esse ducimus voluptatem
                    minus illo id amet modi quidem quas!
                  </p>
                  <ul>
                    <li>Installer des câbles et des canalisations</li>
                    <li>Dépanner des circuits électroniques de puissance</li>
                    <li>
                      Installer les divers raccordements et entretenir les
                      luminaires
                    </li>
                    <li>
                      Installer et entretenir les commandes à très basse tension
                    </li>
                    <li>
                      Installer, raccorder et entretenir des transformateurs
                    </li>
                    <li>
                      Installer et Repérer des moteurs et des génératrices à CC
                    </li>
                    <li>Monter des circuits hydrauliques</li>
                    <li>
                      Installer et Repérer des moteurs et des génératrices à CA
                    </li>
                    <li>
                      Installer et entretenir divers systèmes d’alarme et de
                      signalisation
                    </li>
                    <li>
                      Installer, Repérer les commandes électroniques de moteurs
                    </li>
                    <li>
                      Installer et dépanner des moteurs et de génératrices à CC
                    </li>
                    <li>
                      Installer et dépanner des moteurs et des génératrices à CA
                    </li>
                    <li>
                      Installer, Repérer des commandes électroniques des moteurs
                    </li>
                    <li>Réaliser un système automatisé</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 shadow">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Condition d'admissoin
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
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
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&family=Roboto&display=swap");
.containrer {
  width: 80%;
}
a {
  color: #665c5c !important;
}
.actualites {
}
.title-style {
  font-size: 25px;
  color: #17161e;
  text-align: start;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  display: block;
  width: 100%;
  position: relative;
  padding-left: 55px;
  margin-bottom: 18px;
  -webkit-transform: scale(1, 1.3);
  transform: scale(1, 1.3);
}
.accordion-button {
  color: #8b3434;
  font-size: 16px;
  font-family: "Helvetica";
  font-weight: bold;
  line-height: 1.125;
  text-transform: none;
  padding-left: 22px;
  padding-right: 10px;
  max-width: 98%;
  width: 100%;
  max-width: 100%;
  white-space: initial;
  text-align: left;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #091736;
  outline: 0;
  /* box-shadow: 0 0 0 1px rgb(8 31 64 / 25%); */
}

.accordion-button:not(.collapsed) {
  color: #8b3434;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
}

.title-style:after {
  content: "";
  bottom: 5px;
  display: block;
  height: 1px;
  width: 100%;
  background: #d0d0d0;
  position: absolute;
  left: 0;
}
.df-lblock {
  background-color: #8b3434;
  color: white;
  padding: 23px 18px;
}
.df-rblock {
  padding: 20px 18px 10px;
}
.df-rblock h5 {
  font-size: 16px;
  font-family: "Helvetica";
  color: #8b3434;
  font-weight: bold;
  line-height: 1.125;
  margin-bottom: 24px;
}
.df-rblock p {
  font-size: 15.5px;
  font-family: "Helvetica";
  color: #404040;
  line-height: 1.286;
}

p {
  text-align: justify;
}
</style>
<script >
export default {};
</script>
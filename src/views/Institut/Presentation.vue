<template>
  <div class="containeer">
    <div
      id="carouselExampleCaptions"
      class="carousel slide w-100 bg-body shadow"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../assets/image/p4.jpg"
            class="d-block w-100 image"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h5>Presentation</h5>
            <p>L’Institut de Technologie des Pêches Maritimes de Safi.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/image/p1.jpg"
            class="d-block w-100 image"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h5>L’ITPM de Safi</h5>
            <p>s’étend sur une superficie de <strong> 6996m².</strong></p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/image/p3.jpg"
            class="d-block w-100 image"
            alt="..."
          />
          <div class="carousel-caption d-md-block">
            <h5>Les niveaux et les types d’enseignement et La qualité</h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="w-100 bg-body shadow mb-3 pb-3">
      <div class="pres">
        <div class="row">
          <div class="col-lg-6">
            <img
              src="../../assets/image/nana1.gif"
              height="480" 
              class="w-100 imag"
              alt=""
            />
          </div>
          <div class="col-lg-5 n pt-5 p-4">
            <p>
              L’Institut de Technologie des Pêches Maritimes de Safi est un
              établissement relevant du Département de la Pêche Maritime. Sa
              mission est de former, pour le secteur de la Pêche, des officiers
              qualifiés dans les spécialités de Patron de Pêche ou d’officier
              mécanicien de 3ème classe.
            </p>
            <p>
              L’ITPM de Safi s’étend sur une superficie de 6996m² et est situé à
              environ 4 Km de la ville de Safi (Municipalité BIADA) sur la route
              secondaire n°121 vers la ville d’El-Jadida.
            </p>

            <p>
              Les niveaux et les types d’enseignement dispensés, permettent
              d’offrir une formation diversifiée, répondant aux besoins des
              professionnels de la pêche et adaptée aux contraintes de leur
              métier.
            </p>
            <p>
              La qualité et la pertinence de sa formation reposent sur un corps
              formateur et un équipement didactique moderne, dont notamment le
              navire-école « AL-MANAR » destiné à la formation pratique en mer
              des élèves et des stagiaires en matière de navigation, de
              technique de pêche et de maintenance des navires de pêche.
            </p>
          </div>
          <div>
            <p class="link10 p-3 d-inline">
              <a
                href="/instutit/Mot_Du_Directeur"
                class="float-start link10 p-2"
              >
                Mot du directeur
              </a>
            </p>

            <p class="link10 p-3 d-inline">
              <a href="/#Histoire" class="float-end p-2"> Historique</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  methods: {},
  mounted() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
.image {
  height: 600px;
}
.containeer {
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: -23px;

  /* margin-top: -20px; */
}
.n p {
  text-align: justify;
  font-family: "Raleway";
  font-size: 14px;
}
.pres {
  background: white;
  width: 99%;
}
h1 {
  color: #010066;
  font-family: "Raleway";
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
h5 {
  font-family: "Cairo";
  font-size: x-large;
}
@media (max-width: 570px) {
  .image {
    height: 400px;
  }
    .imag {
    height: 300px;
  }
}

/* Link Style 10 */
.link10 a {
  position: relative;
  text-decoration: none;
  color: gray;
  transition: color 0.15s ease-in-out;
}

.link10 a:hover {
  background-size: 100% 100%;
  cursor: pointer;
}

.link10 a:after {
  display: block;
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 3px;
  opacity: 0;
  transform: translateY(-150%);
  transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out;
  background-color: red;
}

.link10 a.is-active,
.link10 a:active,
.link10 a:focus,
.link10 a:hover {
  color: red;
}

.link10 a.is-active:after,
.link10 a:active:after,
.link10 a:focus:after,
.link10 a:hover:after {
  transform: translateY(0);
  opacity: 1;
}
</style>
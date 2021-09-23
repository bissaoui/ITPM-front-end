<template>
  <link
    href="https://allfont.net/allfont.css?fonts=agency-fb"
    rel="stylesheet"
    type="text/css"
  />

  <div class="home">
    <div class="presentation mb-4">
      <div class="content shadow">
        <div class="text-center tw mb-5" s>
          <div class="typing-demo">Royaume Du Maroc</div>
          <div>Département De La Pêche Maritim</div>
          <div>Institut De Technologie Des Pêches Maritimes De Safi</div>
        </div>
      </div>
    </div>
    <div class="Htitle">
      <h2>ACTUALITÉS</h2>
      <span>Afficher tous</span>
      <hr />
    </div>

    <div class="actualite mb-4">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="carde">
            <img
              src="../assets/image/new.png"
              width="230"
              height="230"
              alt=""
              srcset=""
            />
            <div class="titre">
              AVIS De Selection
              <hr />
              <div>...</div>
              <a href="">Lire la suite</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="carde">
            <img
              src="../assets/image/Ecole.jpg"
              width="230"
              height="230"
              alt=""
              srcset=""
            />
            <div class="titre">
              AVIS AUX STAGIAIRES
              <hr />
              <div>...</div>
              <a href="">Lire la suite</a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-6 col-12 tree">
          <div class="carde">
            <img
              src="../assets/image/logo.jpg"
              width="230"
              height="230"
              alt=""
              srcset=""
            />
            <div class="titre">
              إعلان عن عملية انتقاء
              <hr />
              <div>...</div>
              <a href="">Lire la suite</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 one">
          <div class="carde">
            <img
              src="../assets/image/Ecole.jpg"
              width="230"
              height="230"
              alt=""
              srcset=""
            />
            <div class="titre">
              AVIS De Selection
              <hr />
              <div>...</div>
              <a href="">Lire la suite</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Htitle">
      <h2>FORMATION</h2>
      <span>Afficher tous</span>
      <hr />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.titre {
  width: 100%;
  height: 75px;
  color: white;
  font-family: "Agency FB", arial;
  font-size: 28px;
  margin-top: -65px;
  padding-top: 12px;
  position: absolute;
  background-color: rgba(36, 36, 36, 0.747);
  transition: 0.3s;
}
.titre a:hover {
  color: #ffd333;
  text-decoration: none;
  font-size: 22px;
}
.titre a {
  color: #ffd333;
  text-decoration: none;
  font-size: 22px;
}
.carde:hover .titre {
  height: 320px;
  margin-top: -231px;
  padding-top: 12px;
}
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
  font-size: 39px;
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

@media (max-width: 991px) {
  .one {
    display: none;
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

@media (max-width: 991px) {
  .tw:first-child {
    padding-top: 20%;
  }
  .tw {
    font-size: 25px;
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

@media (max-width: 768px) {
  .tw:first-child {
    padding-top: 25%;
  }
  .tw {
    font-size: 22px;
  }
  .tree {
    display: none;
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
    padding-top: 25%;
  }
  .tw {
    font-size: 13px;
  }
  .titre {
    margin-top: -60px;
    font-size: 22px;
  }
  .presentation {
    background-image: url("../assets/image/Ecole.jpg");
    height: 250px;
    background-position-y: 10%;
    background-size: cover;
    z-index: 0;
  }
  .content {
    background-color: rgba(0, 0, 0, 0.41);
    z-index: 1;
    width: 100%;
    height: 250px;
  }
}

@media (max-width: 500px) {
  .tw:first-child {
    padding-top: 28%;
  }
  .tw {
    font-size: 13px;
  }
  .presentation {
    background-image: url("../assets/image/Ecole.jpg");
    height: 250px;
    background-position-y: 10%;
    background-size: cover;
    z-index: 0;
  }
  .content {
    background-color: rgba(0, 0, 0, 0.41);
    z-index: 1;
    width: 100%;
    height: 250px;
  }
}
.Htitle {
  font-family: "Agency FB", arial;
  width: 80%;
  margin: auto;
  text-align: left;
  font-size: 30px;
}
.Htitle span {
  float: right;
  font-size: large;
}
hr {
  margin: 0;
  color: #0323a2;
  background-color: #0323a2;
  opacity: 1 !important;
}
.actualite {
  width: 80%;
  margin: auto !important;
  background-color: rgba(216, 216, 216, 0.089);
  overflow: hidden;
}
.Htitle h2 {
  margin-bottom: -17px;
}
.split-carousel[data-v-3b1d70bc] {
  height: 250px !important;
}
.carde {
  width: 90%;
  height: 230px;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 6%;
  position: relative;
  overflow: hidden;
}
.carde img {
  width: 100%;
  z-index: 9;
}
</style>

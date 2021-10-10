
<template>
  <div class="footer w-100">
    <div class="row w-100">
      <div class="col-md-2 mt-4">
        <img
          src="../../assets/image/logo.jpg"
          width="100"
          class="img-fluid"
          alt=""
          srcset=""
        />
        <h2 class="ITPM">ITPM</h2>
      </div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-4 link">
            <h2>L'Institut</h2>
            <ul class="mt-4">
              <li>
                <a class="" href="/instutit/Mot_Du_Directeur">
                  Mot du directeur
                </a>
              </li>
              <li>
                <a href=""> Presentation </a>
              </li>
              <li>
                <a href=""> Historique </a>
              </li>
              <li>
                <a href=""> Le navire al manar </a>
              </li>
              <li>
                <a href="">Outils pedagogique et dedicatique </a>
              </li>
              <li>
                <a href=""> Organigramme </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 link">
            <h2>Formation</h2>
            <ul class="mt-4">
              <li>
                <a href=""> Technicien </a>
              </li>
              <li>
                <a href=""> Qualification </a>
              </li>
              <li>
                <a href=""> Specialisation </a>
              </li>
              <li>
                <a href=""> Formation continue </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 link">
            <h2>Pages</h2>
            <ul class="mt-4">
              <li>
                <a href=""> Demande & lien </a>
              </li>

              <li>
                <a href=""> Visite guidee </a>
              </li>
              <li>
                <a href=""> Bulletins d'information </a>
              </li>
              <li>
                <a href=""> Forums </a>
              </li>
              <li>
                <a href=""> à propos </a>
              </li>
              <li>
                <a href=""> Contact nous </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="">
          <div class="d-flex justify-content-center">
            <div class="mx-4 my-2">
              <a href="">
                <img src="../../assets/image/faceboo.svg" alt="" />
              </a>
            </div>
            <div class="mx-4 my-2">
              <a href="">
                <img src="../../assets/image/instagram.svg" alt="" />
              </a>
            </div>
            <div class="mx-4 my-2">
              <a href="">
                <img src="../../assets/image/linkedi.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div
          class="d-flex justify-content-center"
          style="font-family: 'Cairo'; padding: 10px"
        >
          © 2021 ITPM SAFI |Developed By BISSAOUI
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.link ul {
  list-style: none;
  text-align: start;
  margin-left: 20%;
}
.link ul li a {
  text-decoration: none !important;
  color: aliceblue;
  font-family: "Cairo";
}

.link ul li {
  margin-top: 5px;
}
.link h2 {
  margin-top: 4rem !important;
  font-family: "Cairo";
  font-size: 27px;
  text-align: start;
  margin-left: 20%;
}
.footer {
  height: auto;
  background-color: #010066;
  color: white;
}

.ITMP {
  font-family: "Agency FB", arial;
  font-size: 30px;
  margin-top: 10px;
}

@media (max-width: 1020px) {
  .link h2 {
    font-size: 25px;
  }
  .link ul li a {
    font-size: small;
  }
}

@media (min-width: 900px) {
  .ITMP {
    font-family: "Agency FB", arial;
    font-size: 50px;
    margin-top: 10px;
  }
}

@media (max-width: 800) {
  .link h2 {
    font-size: 25px;
  }
  .link ul li a {
    font-size: smaller;
  }
}
</style>
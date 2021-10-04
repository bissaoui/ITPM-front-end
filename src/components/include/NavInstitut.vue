<template>
  <div class="col-12 col-sm-4 col-md-4 col-lg-3 image-instu">
    <div>
      <div class="image w-100">
        <img
          src="../../assets/image/logo.jpg"
          style="height: -webkit-fill-available"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="institut">
        <h2>L'institut</h2>
        <ul>
          <li>
            <router-link to="/instutit/Mot_Du_Directeur" class="dropdown-item"
              >Mot du directeur
            </router-link>
          </li>
          <li>
            <router-link to="/Presentation" class="dropdown-item"
              >Présentation
            </router-link>
          </li>
          <li>
            <router-link to="/Historique" class="dropdown-item"
              >Historique
            </router-link>
          </li>
          <li>
            <router-link to="/FORMATION_CONTINUE" class="dropdown-item"
              >Le Navire Ecole « AL MANAR »
            </router-link>
          </li>
          <li>
            <router-link to="/FORMATION_CONTINUE" class="dropdown-item"
              >Outils pédagogique et didactique
            </router-link>
          </li>
          <li>
            <router-link to="/FORMATION_CONTINUE" class="dropdown-item"
              >Organigramme
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavInstitut",
};
</script>
<style scoped>
.institut ul li {
  padding: 10px 0px 10px 0px;
  margin: 3px 0px 3px 0px;
  text-align: initial;
  background-color: #010066;
  border-radius: 3px;
  font-family: "Cairo";
  height: auto;
}
.institut ul li a {
  background-color: #010066;
  color: rgba(191, 210, 211, 0.808);
  font-size: 16px;
}
.institut ul {
  padding-left: 0px !important;
  list-style: none;
  overflow: hidden;
}

.image {
  height: 150px;
}
.institut {
  height: auto;
}
.image-instu div {
}

.institut ul li a.router-link-exact-active {
  color: #ffffff;
  font-size: 19px;
  font-size: 18px;
  border-bottom: rgb(255, 252, 251) double;
  padding-left: 20%;
}

@media (max-width: 1260px) {
  .institut ul li a {
    font-size: 14px;
  }
}

@media (max-width: 1160px) {
  .institut ul li a {
    font-size: 12px;
  }
}

@media (max-width: 740px) {
  .institut ul li a {
    font-size: 10px;
  }
}

@media (max-width: 570px) {
  .institut ul li a {
    font-size: 14px;
  }
}
</style>
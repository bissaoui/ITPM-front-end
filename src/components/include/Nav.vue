
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap"
    rel="stylesheet"
  />

  <nav
    class="
      navbar navbar-expand-lg navbar-light
      shadow
      mb-4
      bg-white
      rounded
      whit
    "
    s
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">
        <img width="60" class="me-4" src="../../assets/image/logo.jpg" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse editnav" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-3 editnav">
          <li class="nav-item dropdown mx-3">
            <router-link
              class="nav-link dropdown-toggle"
              to="/institut"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              L'Institut
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link
                  to="/instutit/Mot_Du_Directeur"
                  class="dropdown-item"
                  >Mot du directeur
                </router-link>
              </li>
              <li>
                <router-link to="/instutit/Presentation" class="dropdown-item"
                  >Présentation
                </router-link>
              </li>
              <li>
                <router-link to="/#Histoire" class="dropdown-item"
                  >Historique
                </router-link>
              </li>
              <li>
                <router-link to="/instutit/Navire" class="dropdown-item"
                  >Le Navire Ecole « AL MANAR »
                </router-link>
              </li>
              <li>
                <router-link to="/annexes" class="dropdown-item"
                  >centres de formation annexes à l'itpm
                </router-link>
              </li>
              <li>
                <router-link to="/Outils" class="dropdown-item"
                  >Outils pédagogique et didactique
                </router-link>
              </li>
              <li>
                <router-link to="/Organigrame" class="dropdown-item"
                  >Organigramme / rh
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown mx-3">
            <router-link
              class="nav-link dropdown-toggle"
              to="/institut"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Formation
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link to="/TECHNICIEN" class="dropdown-item"
                  >TECHNICIEN
                </router-link>
              </li>
              <li>
                <router-link to="/QUALIFICATION" class="dropdown-item"
                  >QUALIFICATION
                </router-link>
              </li>
              <li>
                <router-link to="/SPECIALISATION" class="dropdown-item"
                  >SPECIALISATION
                </router-link>
              </li>
              <li>
                <router-link to="/FORMATION_CONTINUE" class="dropdown-item"
                  >activité socio professionnelles
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown mx-3">
            <router-link
              class="nav-link dropdown-toggle"
              to="/institut"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              admission
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link to="/admission/processus" class="dropdown-item"
                  >processus d'admission
                </router-link>
              </li>
              <li>
                <router-link to="/preinscription" class="dropdown-item"
                  >preinscription en ligne
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown mx-3">
            <router-link
              class="nav-link dropdown-toggle"
              to="/Etudiant"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              espaces étudiants
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link to="/Etudiant/pedagogiques" class="dropdown-item"
                  >activités pedagogiques
                </router-link>
              </li>
              <li>
                <router-link to="/Etudiant/parascolaires" class="dropdown-item"
                  >activités parascolaires
                </router-link>
              </li>
              <li>
                <router-link to="/Etudiant/stage" class="dropdown-item"
                  >stage
                </router-link>
              </li>
              <li>
                <router-link to="/Etudiant/insertion" class="dropdown-item"
                  >insertion professionnelle
                </router-link>
              </li>
              <li>
                <router-link to="/laureats" class="dropdown-item"
                  >laureats
                </router-link>
              </li>
              <li>
                <router-link to="/Etudiant/vie" class="dropdown-item"
                  >vie étudiants
                </router-link>
              </li>
            </ul>
          </li>

          <router-link to="/Cooperation" class="nav-link me-4"
            >Cooperation
          </router-link>
          <router-link to="/propos" class="nav-link me-4"
            >à propos
          </router-link>
          <router-link to="/Contact" class="nav-link me-4"
            >Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style>
.whit {
  background-color: white;
  color: #010066 !important;
  font-family: "Cairo", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
}
.editnav {
  margin-left: 3rem !important;
}

@media (max-width: 980px) {
  .editnav {
    margin-left: 0px !important;
  }
}
#nav a {
  font-weight: 100 !important;
  color: #2c3e50;
}
</style>
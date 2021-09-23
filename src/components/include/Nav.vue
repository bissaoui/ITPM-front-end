
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
      white
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
          <router-link
            to="/institut"
            class="nav-link active me-4"
            aria-current="page"
            href="#"
            >L'Institut</router-link
          >
          <router-link to="/formation" class="nav-link me-4" href="#"
            >Formation</router-link
          >
          <router-link to="/Espace_etudiant" class="nav-link me-4" href="#"
            >Espace etudiant</router-link
          >
          <router-link to="/demande_&_lien" class="nav-link me-4" href="#"
            >demande & lien
          </router-link>
          <router-link to="/propos" class="nav-link me-4" href="#"
            >à propos
          </router-link>
          <router-link to="/Contact" class="nav-link me-4" href="#"
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
.white {
  background-color: white;
  color: #010066;
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
</style>
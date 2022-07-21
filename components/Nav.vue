<template>
  <nav class="text-bg-dark">
    <div class="navbar navbar-dark d-flex justify-content-between">
      <div class="button">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="isCollapsed = !isCollapsed"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="theme-selector d-flex">
        <ColorModePicker />
      </div>
    </div>

    <div
      id="navbarToggleExternalContent"
      :class="{ collapse: isCollapsed, 'offcanvas-start': isCollapsed }"
      class="bg-nav align-items-center container-fluid"
    >
      <div class="row">
        <div class="col-12">
          <div id="nav-title">Lu Sacramento</div>
        </div>
        <div class="col-12"></div>
      </div>
      <ul
        :class="{ 'd-flex': !isCollapsed }"
        class="content-menu navbar-nav justify-content-center"
      >
        <li class="nav-item">
          <NuxtLink id="" to="/" class="nav-link dropdown"
            >Página Inicial</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/desenvolvimento-web" class="nav-link dropdown"
            >Desenvolvimento Web</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/musica" class="nav-link dropdown"> Música</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/reaja-comigo" class="nav-link dropdown">
            Reaja!</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isCollapsed: false,
    }
  },
}
</script>

<style>
.content-menu {
  height: 80vh !important;
}

.nav-link {
  font-size: 1.4rem;
  padding-top: 5%;
  margin-left: 1%;
}
</style>

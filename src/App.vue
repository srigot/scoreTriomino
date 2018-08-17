<template>
  <div id="app">
    <b-navbar id="nav" toggleable="sm" type="dark" variant="primary">
      <b-navbar-nav>
        <b-nav-item to="/">Score</b-nav-item>
        <b-nav-item to="/new">Nouvelle partie</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
.navbar {
  margin-bottom: 5px
}
</style>

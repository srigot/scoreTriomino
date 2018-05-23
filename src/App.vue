<template>
  <div id="app">
    <b-navbar id="nav" toggleable="sm" type="dark" variant="primary">
      <b-navbar-nav>
        <b-nav-item to="/">En cours</b-nav-item>
        <b-nav-item to="/new">NEW</b-nav-item>
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

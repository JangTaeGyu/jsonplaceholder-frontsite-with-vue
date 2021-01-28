<template>
  <header>
    <div class="container">
      <nav class="navbar">
        <router-link class="navbar-brand" to="/">
          JSONPlaceholder
        </router-link>

        <ul class="navbar-menu">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'post-list'}">
              Post
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'album-list'}">
              Album
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user-list'}">
              User
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<template>
  <div id="app">
    <Header />

    <main>
      <div class="container">
        <transition name="page" mode="out-in">
          <router-view :key="$route.fullPath" />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

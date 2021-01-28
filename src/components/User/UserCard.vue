<template>
  <section class="user-card">
    <img :src="`https://randomuser.me/api/portraits/men/${user.id}.jpg`" alt="">
    <div class="user-info">
      <h2>{{ user.username }}. {{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
      <a href="javascript:void(0)" @click="showUserDetails(user.id)">Show Details</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserCard',

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  methods: {
    showUserDetails(userId) {
      this.$parent.showUserDetails(userId);
    },
  },
};
</script>

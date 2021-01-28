<template>
  <article>
    <UserMeta />
    <UserDescription />

    <div class="filter">
      <input v-model="keyword" type="text" placeholder="Search">
    </div>

    <template v-for="user in filterUsers">
      <UserCard :key="`user_item_${user.id}`" :user="user" />
    </template>

    <UserDetailsModal :user="userDetails" :active.sync="showModal" />
  </article>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';
import UserMeta from '@/components/User/UserMeta.vue';
import UserDescription from '@/components/User/UserDescription.vue';
import UserCard from '@/components/User/UserCard.vue';
import UserDetailsModal from '@/components/User/UserDetailsModal.vue';
import * as api from '@/api/jsonplaceholder';

export default {
  name: 'UserList',

  components: {
    UserMeta,
    UserDescription,
    UserCard,
    UserDetailsModal,
  },

  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch('jsonplaceholder/fetchUsers'),
    ]).then(() => {
      next();
    });
  },

  data: () => ({
    keyword: '',
    showModal: false,
    userDetails: {
      address: {
        zipcode: '',
        street: '',
        suite: '',
        city: '',
      },
    },
  }),

  computed: {
    ...mapGetters('jsonplaceholder', ['users']),
    filterUsers() {
      if (this.keyword) {
        return this.users.filter((user) => user.username.toLowerCase().indexOf(this.keyword) !== -1
            || user.name.toLowerCase().indexOf(this.keyword) !== -1);
      }

      return this.users;
    },
  },

  methods: {
    async showUserDetails(userId) {
      api.fetchUserDetails(userId).then(({ data }) => {
        this.userDetails = data;
        this.showModal = true;
      });
    },
  },
};
</script>

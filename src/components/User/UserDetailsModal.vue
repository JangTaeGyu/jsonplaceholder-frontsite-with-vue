<template>
  <Modal :active="active" @close="closeModal">
    <template #header>
      <h3 class="modal-title">
        User Details
      </h3>
    </template>

    <div class="user-details">
      <img :src="`https://randomuser.me/api/portraits/men/${user.id}.jpg`" alt="">
      <h4>{{ user.username }}. {{ user.name }}</h4>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
      <p>{{ user.address.zipcode }} {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}</p>
      <p><a :href="`https://${user.website}`" target="_black">https://{{ user.website }}</a></p>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/UI/Modal.vue';

export default {
  name: 'UserDetailsModal',

  components: {
    Modal,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeModal() {
      this.$emit('update:active', false);
    },
  },
};
</script>

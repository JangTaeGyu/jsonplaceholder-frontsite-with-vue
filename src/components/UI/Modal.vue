<template>
  <transition name="fade">
    <div v-if="isActive" class="modal">
      <div class="modal-bg" @click="onClose" />
      <div class="modal-content">
        <div v-if="isHeader" class="modal-header">
          <slot name="header" />
        </div>

        <div class="modal-body">
          <slot />
        </div>

        <div v-if="isFooter" class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalUIComponent',

  props: {
    active: Boolean,
  },

  data: () => ({
    isActive: false,
  }),

  computed: {
    isHeader() {
      return typeof this.$slots.header !== 'undefined';
    },
    isFooter() {
      return typeof this.$slots.footer !== 'undefined';
    },
  },

  watch: {
    active(value) {
      this.isActive = value;
    },
  },

  created() {
    this.isActive = this.active || false;
  },

  methods: {
    onClose() {
      this.$emit('close');
      this.$emit('update:active', false);
    },
  },
};
</script>

<template>
  <b-container class="p-4 h-100" id="app">
    <comment :is="layout">
      <router-view />
    </comment>
  </b-container>
</template>

<script>
import MainLayout from '@/layout/MainLayout';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout';
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>

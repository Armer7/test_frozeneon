<template>
  <div class="h-100 d-flex flex-column">
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from '@/components/FooterPage';
export default {
  name: 'MainLayout', //Наименование текущего компонента
  components: {
    FooterPage,
  },
};
</script>

<style scoped lang="scss"></style>

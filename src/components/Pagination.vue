<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="paginationData.rows"
      :per-page="paginationData.perPage"
      align="center"
      @change="getPage"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  components: {},
  props: {
    paginationData: {
      currentPage: {
        type: Number,
        default: 0,
      },
      rows: {
        type: Number,
        default: 0,
      },
      perPage: {
        type: Number,
        default: 0,
      },
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {
    paginationData() {
      this.currentPage = this.paginationData.currentPage;
    },
  },
  methods: {
    getPage(page) {
      this.$emit('getPage', page);
    },
  },
};
</script>

<style scoped lang="scss"></style>

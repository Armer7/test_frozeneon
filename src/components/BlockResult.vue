<template>
  <div>
    <b-col
      v-if="
        Object.keys(this.cardsData).length !== 0 &&
        cardsData.objects.length !== 0
      "
    >
      <b-row
        class="my-2"
        cols-lg="12"
        v-for="(item, index) in cardsData.objects"
        :key="index"
      >
        <Card
          :itemData="{ item: item.package, itemId: index }"
          @showModal="showModal"
        />
      </b-row>
    </b-col>
    <b-col v-else-if="Object.keys(this.cardsData).length !== 0">
      <b-row cols-lg="12">
        <p>No results founds</p>
      </b-row>
    </b-col>
    <b-col v-else-if="question" class="justify-content-center">
      <b-row cols-lg="12" class="d-flex justify-content-center my-5">
        <b-spinner label="Loading..."></b-spinner>
      </b-row>
    </b-col>
  </div>
</template>

<script>
import Card from '@/components/Card';
export default {
  name: 'BlockResult',
  components: { Card },
  props: {
    cardsData: Object,
    question: String,
  },

  methods: {
    showModal(data) {
      this.$emit('showModal', data);
    },
  },
};
</script>

<style scoped lang="scss"></style>

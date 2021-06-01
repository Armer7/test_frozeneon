<template>
  <div class="w-100">
    <b-card
      :title="itemData.item.name"
      :sub-title="`author: ${
        itemData.item.author ? itemData.item.author.name : ''
      }`"
    >
      <b-card-text>
        {{ itemData.item.description ? itemData.item.description : '' }}
      </b-card-text>
      <b-card-text
        >version:
        {{ itemData.item.version ? itemData.item.version : '' }}</b-card-text
      >
      <div class="d-flex flex-wrap" v-if="keyWords.length">
        <b-badge
          class="m-1"
          variant="light"
          v-for="(item, index) in keyWords"
          :key="index"
          >{{ item }}</b-badge
        >
      </div>
      <b-card-text>
        <b-link class="card-link" @click.stop.prevent="showModal"
          >More...</b-link
        >
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import ReductionAmountItems from '@/module/reductionAmountItems';

export default {
  name: 'Card',
  components: {},
  props: {
    itemData: Object,
  },
  computed: {
    keyWords() {
      return this.itemData.item.keywords
        ? ReductionAmountItems(this.itemData.item.keywords, 14)
        : [];
    },
  },
  methods: {
    showModal() {
      this.$emit('showModal', {
        name: this.itemData.item.name,
        version: this.itemData.item.version,
        itemId: this.itemData.itemId,
        modalToggle: true,
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>

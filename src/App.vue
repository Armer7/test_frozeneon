<template>
  <b-container class="p-4">
    <Search @getSearchText="getSearchText" />
    <BlockResult
      :cardsData="data"
      :question="question"
      @showModal="showModal"
    />
    <MoreInfoModal
      v-if="modalPrepareData.modalToggle"
      :modalData="detailModal"
      @closeModal="closeModal"
    />
    <Pagination
      v-if="countItems > 0"
      :paginationData="{ currentPage: page, rows: countItems, perPage: size }"
      @getPage="getPage"
    />
  </b-container>
</template>

<script>
import Search from '@/components/Search';
import BlockResult from '@/components/BlockResult';
import MoreInfoModal from '@/components/MoreInfoModal';
import RequestDataGet from '@/module/requestDataGet';
import Pagination from '@/components/Pagination';
export default {
  name: 'App',
  components: { Pagination, MoreInfoModal, BlockResult, Search },
  data() {
    return {
      question: '',
      urlSearch: 'https://registry.npmjs.org/-/v1/search',
      urlDetail: 'https://data.jsdelivr.com/v1',
      data: {},
      size: 10,
      page: 1,
      modalPrepareData: {
        name: '',
        version: '',
        itemId: null,
        modalToggle: false,
      },
      detailModal: {},
      countItems: 0,
    };
  },

  watch: {
    async question() {
      this.data = await RequestDataGet(
        `${this.urlSearch}?text=${this.question}&size=${this.size}&from=${
          10 * this.page - 9
        }`
      );
    },
    async page() {
      this.data = await RequestDataGet(
        `${this.urlSearch}?text=${this.question}&size=${this.size}&from=${
          10 * this.page - 9
        }`
      );
    },
    modalPrepareData() {
      RequestDataGet(
        `${this.urlDetail}/package/npm/${this.modalPrepareData.name}@${this.modalPrepareData.version}`
      ).then((data) => {
        this.detailModal = data;
        this.detailModal.data = this.data.objects[this.modalPrepareData.itemId];
        this.detailModal.modalToggle = this.modalPrepareData.modalToggle;
      });
    },
    data() {
      this.countItems = +this.data.total;
    },
  },
  methods: {
    getSearchText(data) {
      this.question = data;
    },
    showModal(data) {
      this.modalPrepareData = data;
    },
    closeModal() {
      this.modalPrepareData.modalToggle = false;
      this.detailModal.modalToggle = false;
    },
    getPage(page) {
      this.page = page;
    },
  },
};
</script>

<style></style>

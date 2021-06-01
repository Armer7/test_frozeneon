<template>
  <div>
    <b-modal
      v-model="modalData.modalToggle"
      title="Details"
      size="lg"
      @hide="closeModal"
    >
      <b-card>
        <div class="d-flex justify-content-between flex-wrap">
          <b-card-text class="h4">
            {{ itemData.name }}
          </b-card-text>
          <div class="d-flex align-items-center pl-3">
            <b-link
              class="m-1 linkItemRepo"
              :href="itemData.links ? itemData.links.homepage : ''"
            >
              <b-icon icon="globe"></b-icon>
            </b-link>
            <b-link
              class="m-1 linkItemRepo"
              :href="itemData.links ? itemData.links.repository : ''"
            >
              <b-icon icon="github"></b-icon>
            </b-link>
            <b-link
              class="m-1 linkItemRepo d-flex align-items-center"
              :href="itemData.links ? itemData.links.npm : ''"
            >
              <b-img
                class="iconImg"
                :src="require(`../assets/image/npm@2x.png`)"
              />
            </b-link>
          </div>
        </div>
        <div class="d-flex flex-wrap">
          <b-img
            class="pl-3 mb-1"
            :src="
              'https://data.jsdelivr.com/v1/package/npm/' +
              itemData.name +
              '/badge'
            "
          />
          <div class="d-flex flex-wrap">
            <b-img
              class="pl-3 mb-1"
              :src="
                'https://data.jsdelivr.com/v1/package/npm/' +
                itemData.name +
                '/badge/rank'
              "
            />
          </div>
        </div>
        <b-card-text
          >author:
          {{ itemData.author ? itemData.author.name : '' }}</b-card-text
        >
        <b-card-text>
          {{ itemData.description ? itemData.description : '' }}
        </b-card-text>
        <b-card-text
          >version: {{ itemData.version ? itemData.version : '' }}</b-card-text
        >
        <div class="d-flex flex-wrap" v-if="keyWords.length">
          <b-badge
            class="m-1"
            variant="light"
            v-for="(item, index) in keyWords"
            :key="index"
            >{{ item }}
          </b-badge>
        </div>

        <b-card-text class="pt-3"
          ><strong>{{ itemData.name }}</strong> - root SDN files</b-card-text
        >
        <hr />
        <b-card-text v-if="modalData.default">
          <b-icon icon="file-code"></b-icon> {{ modalData.default }}
        </b-card-text>
        <hr />
        <b-col v-if="listFiles.length">
          <b-row cols="12" v-for="(file, index) in listFiles" :key="index">
            <b-card-text class="mb-1">
              <b-icon
                :icon="file.type === 'directory' ? 'folder' : 'file-code'"
              ></b-icon>
              {{ file.name }}
            </b-card-text>
          </b-row>
          <b-row cols="12">
            <b-button
              v-if="modalData.files.length > 10"
              class="mx-auto"
              variant="outline-dark"
              size="sm"
              @click="isListFiles"
              ><b-icon
                :icon="toggleListFiles ? 'chevron-up' : 'chevron-down'"
              ></b-icon>
              {{ toggleListFiles ? 'Show first 10' : 'Show all' }}</b-button
            >
          </b-row>
        </b-col>
      </b-card>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="outline-dark"
            size="sm"
            class="float-right"
            @click="closeModal"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import ReductionAmountItems from '@/module/reductionAmountItems';

export default {
  name: 'MoreInfoModal',
  components: {},
  props: {
    modalData: Object,
  },
  data() {
    return {
      itemData: {},
      keyWords: [],
      listFiles: [],
      toggleListFiles: false,
    };
  },
  watch: {
    modalData() {
      this.itemData = this.modalData.data.package;

      this.keyWords = this.itemData.keywords
        ? ReductionAmountItems(this.itemData.keywords, 14)
        : [];
      this.listFiles = this.modalData.files
        ? ReductionAmountItems(this.modalData.files, 10)
        : [];
    },
    toggleListFiles() {
      this.listFiles = this.toggleListFiles
        ? ReductionAmountItems(
            this.modalData.files,
            this.modalData.files.length
          )
        : ReductionAmountItems(this.modalData.files, 10);
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    isListFiles() {
      this.toggleListFiles = !this.toggleListFiles;
    },
  },
};
</script>

<style scoped lang="scss">
.linkItemRepo {
  color: black;
}
.iconImg {
  width: 16px;
}
</style>

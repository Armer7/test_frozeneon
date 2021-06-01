<template>
  <div role="group" class="mb-3">
    <b-form @submit.stop.prevent="inputSearch">
      <b-form-group
        id="fieldset-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
      >
        <b-input-group is-text>
          <b-form-input
            id="input-1"
            v-model="searchText"
            :state="state"
            trim
            @click="() => {this.state = null}"
            @blur="inputSearch"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-dark" type="submit" >
              <b-icon icon="search"></b-icon>
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-form>


  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {},
  data() {
    return {
      searchText: '',
      state: null,
      invalidFeedback: 'Please enter something.'
    }
  },
  methods: {
    inputSearch () {
      if (this.searchText.length < 3) {
         this.state = false;
         return;
       }
      if(this.searchText.length > 0 && this.searchText.length < 4) {
        this.invalidFeedback = 'Enter at least 3 characters.'
        return
      }
      this.$emit('getSearchText',this.searchText)

    }
  }

}
</script>

<style scoped lang = 'scss'>

</style>

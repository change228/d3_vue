<template>
  <div class="force_container"></div>
</template>

<script>
// import * as d3 from 'd3';
export default {
  props: {
    container: 'body'
  },
  data () {
    return {
      dataset: null
    }
  },
  watch: {
    dataset (val) {
      console.log(val)
    }
  },
  mounted () {
    this.getData()
    this.initChart()
  },
  methods: {
    getData () {
      this.$axios.get('static/mock/data/test.json').then(({ data }) => {
        this.dataset = data
      });
    },
    initChart () {
      // let width = this.$el.offsetWidth
      // let height = this.$el.offsetHeight
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.force {
  &_container {
    height: 100%;
  }
}
</style>

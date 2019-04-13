<template>
  <div class="force_container"></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      container: 'body'
    }
  },
  computed: {
    ...mapGetters([
      'forceData'
    ])
  },
  mounted () {
    this.getForceData(this)
      .then(({ nodes, links }) => {
        console.log(111, nodes, links)
      })
    this.initChart()
  },
  methods: {
    ...mapActions([
      'getForceData'
    ]),
    initChart () {

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

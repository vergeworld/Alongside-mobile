<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
    <h1>my</h1>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    console.dir(this)
  },
  methods: {
    onClickLeft() {
      alert('hi')
    },
    onClickRight() {
      alert('hi')
    }
  }
}
</script>
<style lang='less' scoped></style>

<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import Button from 'vant/lib/button'
export default {
  name: 'HomeIndex',
  components: {
    'van-button': Button
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {}
}
</script>
<style lang='less' scoped></style>

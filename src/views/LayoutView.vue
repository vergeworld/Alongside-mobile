<template>
  <div class="layout-view">
    <router-view></router-view>
    <van-tabbar route active-color="@theme-color">
    <van-tabbar-item icon="guide-o" to="/home">随行</van-tabbar-item>
    <van-tabbar-item icon="fire-o" to="/around">附近</van-tabbar-item>
    <van-tabbar-item icon="plus" to="/publish">发布</van-tabbar-item>
    <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
  </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'LayoutView',
  components: {},
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

<template>
  <div class="layout-view">
    <router-view></router-view>
    <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/home">随行</van-tabbar-item>
    <van-tabbar-item icon="search" to="/around">附近</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/publish">发布</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/message">消息</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
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

<template>
  <div class="picker-region">
    <van-nav-bar title="位置信息" left-text="返回" left-arrow @click-left="$router.back()" />
    <div class="site-wrapper">
      <input type="text" @click="showPopup(true)" placeholder="在哪儿" disabled>
      <hr>
      <input type="text" @click="showPopup()" placeholder="去哪儿" disabled>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area @confirm="areaConfirm" @cancel="$router.back()" :title="areaTitle" :area-list="areaList"></van-area>
    </van-popup>
  </div>
</template>
<script>
import { areaList } from '@vant/area-data'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      areaList,
      show: false,
      areaTitle: ''
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    showPopup(e) {
      if (e) {
        this.areaTitle = '请选择出发地点'
      } else {
        this.areaTitle = '请选择前往地点'
      }
      this.show = true
    },
    areaConfirm(e) {
      console.log(e)
      this.start = e[1].name
      this.target = e[1].name
      this.show = false
    }
  }
}
</script>
<style lang='less' scoped>
.picker-region {
  height: 100vh;
  background-color: white;

  .site-wrapper {
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    margin-top: 200px;
    box-shadow: 0 0 10px 10px rgba(230, 227, 227, 0.6);

    hr {
      border-bottom: 1px solid;
    }

    input {
      font-size: 20px;
      border: none;
      padding: 2px 5px;
      line-height: 40px;
    }
  }
}
</style>

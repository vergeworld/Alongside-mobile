<template>
  <div class="index-view">
    <van-nav-bar title="首页" right-text="按钮" @click-right="onClickRight">
      <template #right>
        <van-icon color="#fff" name="search" size="18" />
        <van-icon class="add-icon" color="#fff" name="add-o" size="18" />
      </template>
    </van-nav-bar>
    <div class="nav-container">
      <div class="rigth-wrapper">
        <div class="img-section">
          <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="site-section">
          <!-- <van-area :area-list="areaList" /> -->
          <router-link to="/picker-region">
            <span>{{ start }}</span>
            <img src="@/assets/images/intent.png" alt="">
            <span @click="showPopup()">{{ target }}</span>
          </router-link>
        </div>
      </div>
      <van-tabs>
        <van-tab v-for="item in tabList" :title="item.title" :key="item.id"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  components: {
  },
  props: {},
  data() {
    return {
      activeName: 'a',
      start: '在哪儿',
      target: '去哪儿',
      tabList: [
        {
          id: 1,
          title: '车主'
        }, {
          id: 2,
          title: '乘客'
        }
      ],
      show: false
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() { },
  methods: {
    onClickRight() {
      alert('right')
    }
  }
}
</script>
<style lang='less' scoped>
@import url(@/styles/common.less);

page {
  background-color: #eee;
}

.index-view {

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 0 10px;

    .rigth-wrapper {
      display: flex;
      align-items: center;

      .img-section {
        img {
          width: 15px;
          margin-right: 5px;
          vertical-align: middle;
        }
      }

      .site-section {
        display: flex;
        align-items: center;

        span {
          font-weight: bold;
          font-size: 14px;
          color: gray;
        }

        img {
          width: 15px;
          height: 5px;
          margin: 0 10px;
        }
      }
    }

    van-tabs {

      van-tab {
        font-weight: bold;

      }
    }
  }
}

.add-icon {
  margin-left: 20px;
}
</style>

<style lang="less">
.van-nav-bar {
  background-color: @theme-color;
}
</style>

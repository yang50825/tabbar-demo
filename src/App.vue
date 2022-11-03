<template>
  <div>
    <MyHeader title="Tabbar 案例"></MyHeader>
    <div class="main">
      <component :is="comName"> </component>
    </div>
    <MyTabBar :arr="tabList" @changeCom="changeCom"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyTabBar from './components/MyTabBar'
// 引入页面组件
import MyGoodsList from './views/MyGoodsList'
import MyGoodsSearch from './views/MyGoodsSearch'
import MyUserInfo from './views/MyUserInfo'

export default {
  name: 'App',
  data() {
    return {
      comName: 'MyGoodsList',
      tabList: [
        // 底部导航的数据
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    }
  },
  methods: {
    changeCom(val) {
      this.comName = val
    },
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
}
</script>

<style>
.main {
  margin-top: 45px;
  margin-bottom: 50px;
}
</style>

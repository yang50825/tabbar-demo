<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(obj, index) in arr"
      :key="index"
      @click="btn(index)"
      :class="{ current: activeIndex === index }"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="obj.iconText"></span>
      <!-- 文字 -->
      <span>{{ obj.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTabBar',
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    btn(index) {
      this.activeIndex = index
      this.$emit('changeCom', this.arr[index].componentName)
    },
  },
  props: {
    arr: {
      type: Array,
      required: true,
      // 自定义校验规则
      validator(value) {
        // value： 接收到的数据
        if (value.length >= 2 && value.length <= 5) {
          return true // 符合条件就return
        } else {
          console.error('数据源必须在2-5项')
          return false
        }
      },
    },
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>

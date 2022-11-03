<template>
  <div>
    <MyTable :arr="list"></MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable'
export default {
  name: 'MyGoodsList',
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.$axios({
      url: '/api/tabbar/queryGoodsList',
    }).then((res) => {
      console.log(res)
      this.list = res.data.data
    })
  },
  components: {
    MyTable,
  },
}
</script>

<style></style>

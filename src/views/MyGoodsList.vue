<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goodsName }}</td>
        <td>{{ scope.row.goodsPrice }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
            v-focus
            @blur="scope.row.inputVisible = false"
            v-model.trim="scope.row.inputValue"
            @keyup.enter="updateTags(scope.row)"
            @keyup.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <br />
          <span
            v-for="(val, index) in scope.row.tags"
            :key="index"
            class="badge-warning"
            >{{ val }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
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
  methods: {
    // 获取商品列表
    queryGoodsList() {
      this.$axios({
        url: '/api/tabbar/queryGoodsList',
      }).then((res) => {
        console.log('list更新')
        this.list = res.data.data
      })
    },
    // 删除
    delFn(id) {
      this.$axios({
        url: '/api/tabbar/deleteGoodsById',
        params: {
          id,
        },
      }).then(() => {
        this.queryGoodsList()
      })
    },
    // 修改tags
    updateTags(obj) {
      if (obj.inputValue === '' || obj.inputValue === null) {
        alert('内容不能为空！')
        return
      }

      obj.tags.push(obj.inputValue)
      obj.inputVisible = false
      obj.inputValue = ''

      this.$axios({
        method: 'POST',
        url: '/api/tabbar/updateTags',
        data: {
          id: obj.id,
          tagsString: obj.tags.join(','),
        },
      }).then(() => {
        console.log('添加tag')
        // this.queryGoodsList()
      })
    },
  },
  created() {
    this.queryGoodsList()
  },
  components: {
    MyTable,
  },
}
</script>

<style lang="less" scoped>
.badge-warning {
  padding: 0 3px;
  margin: 0 5px;
  font-weight: 700;
  background-color: rgb(253, 192, 3);
  border-radius: 3px;
}
</style>

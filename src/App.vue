<template>
  <div>
    <!-- 帅哥美女 -->
    <div>
      <ul>
        <li v-for="item in arr" :key=item> {{item}} </li>
      </ul>
      <button @click='go'>走一走</button>
    </div>
    <!-- 加加减减 -->
    <div>
      <ul>
        <li v-for="(item,i) in arr1" :key="item">
          <span>{{item}}</span>
          <button @click="del(i)">删除</button>
        </li>
      </ul>
      <button @click="add">生成</button>
    </div>
    <div id="car">
      <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(obj,index) in list" :key="obj.id">
        <td>{{obj.id}}</td>
        <td>{{obj.name}}</td>
        <td>{{obj.time}}</td>
        <td>
          <button  @click="del1(index)">删除</button>
        </td>
      </tr>
      <tr v-show="list.length===0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["帅哥", "美女", "程序员"],
      arr1: [1, 5, 3],
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    };
  },
  methods: {
    go() {
      this.arr.push(this.arr[0]);
      this.arr.shift();
    },
    add() {
      this.arr1.push(Math.floor(Math.random() * 20));
    },
    del(i) {
      this.arr1.splice(i, 1);
    },
    del1(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

<style scoped>
#car {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
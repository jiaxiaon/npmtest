<template>
  <div class="hello">
    <inputOption
    v-model="houseNumber"
          titleName="详细地址："
          :disabled="canNotOprate"
          tips="例：楼层、单元号或门牌号"
          :width="optionWidth"
          :labelWidth="labelWidth"
          style="margin-left: 30px;"></inputOption>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      optionWidth: 210,
      labelWidth: 90,   

      qudaoOptions: [], 
      qudaoName: '',

      fuwuOption: [],
      fuwuIndex: null,

      fuwuNum: null,

      fuwuUnits: [],
      fuwuUnitIdx: null,

      serviceDate: null,
      serviceTime: null,

      orderPrice: null,
      workerPrice: null,

      contact: null,
      phone: null,

      address: {
        longitude: '',
        latitude: '',
        province: '',
        city: '',
        district: '',
        gisName: '',
        address: '',
      },
      houseNumber: null,

      remark: null,

      showMapDialog: false,

      canNotOprate: false, //小易订单只有阿姨收入以及备注可编辑
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

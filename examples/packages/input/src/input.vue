<template>
  <div class="inputArea">
    <label 
      v-if="titleName!=''" 
      :class="{nameLight:light, nameDark: !light}" 
      :style="{
        width: labelWidth? labelWidth + 'px' : 'auto',
        textAlign: textAlign,
      }">
      <span v-if="showRedStart" style="color: red;">*</span>
      {{titleName}}
    </label>

    <!-- 防止输入e,E,+,-, . -->
    <!-- 这个会有问题 -->
    <!-- <el-input
        v-if="type == 'number'"
        :style="{'width': width == 0?'160px':width+'px'}"
        :disabled="disabled"
        type="number"
        :clearable="clearable"
        :placeholder="tips"
        @blur="loseFocus"
        @keyup.enter.native="keyUpEnter"
        oninput="value=value.replace(/[^\d]/g,'')"
        v-model.number="inputValue"
        >
            <slot slot="suffix"></slot>
    </el-input> -->
    <!--             v-else -->
    <el-input
      :style="{
        'width': width == 0?'160px':width+'px',
        'box-shadow': boxShadow?'0px 0px 6px 0px rgba(0, 0, 0, 0.3)':'null'
        }"
      :disabled="disabled"
      :type="type"
      :clearable="clearable"
      :placeholder="tips"
      :maxlength="maxLength"
      @input="input"
      @blur="loseFocus"
      @keyup.enter.native="keyUpEnter"
      @wheel.native.prevent='stopScrollFun($event)'
      @change="inputChange"
      v-model="inputValue"
    >
      <slot name="prefix" slot="prefix"></slot>
      <slot name="suffix" slot="suffix"></slot>
      <slot name="prepend" slot="prepend"></slot>
      <slot name="append" slot="append"></slot>
    </el-input>
    <div v-if="unit!=''" class="unit" :style="{width: unitWidth<=40?'40px':(unitWidth+'px')}">
      {{unit}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'inputOption',
    props: {
      titleName: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number],
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      light: {
        type: Boolean,
        default: true
      },
      tips: {
        type: String,
        default: '请输入'
      },
      labelWidth: {
        type: Number,
        default: 80
      },
      width: {
        type: Number,
        default: 0
      },
      clearable: {
        type: Boolean,
        default: true
      },
      // 单位
      unit: {
        type: String,
        default: ''
      },
      unitWidth: {
        type: Number,
        default: 40        
      },
      maxLength: {
        type: [String, Number],
        default: 1000
      },
      showRedStart: {
        type: Boolean,
        default: false        
      },
      textAlign: {
        type: String,
        default: 'right',
      },
      boxShadow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    computed: {
      inputValue: {
        get() {
          return this.value
        },
        set(val) {
          // 只针对手机号码验证(截取输入的钱11位)
          // if(this.type === 'number' && val.length > 11) val = val.slice(0,11)
          val = val.replace(/\s*/g,'')    
          this.$emit('input', val)
        }
      }
    },
    methods: {
      input(){
 
      },
      loseFocus(e) {
        this.$emit('loseFocus', e)
      },
      keyUpEnter() {
        this.$emit('keyUpEnter')
      },
      inputChange(e) {
        this.$emit('change', e)
      },   
      // 禁止input滚轮滚动
      stopScrollFun(evt) {
        evt = evt || window.event
        if (evt.preventDefault) {
          // Firefox
          evt.preventDefault()
          evt.stopPropagation()
        } else {
          // IE
          evt.cancelBubble = true
          evt.returnValue = false
        }
        return false
      }
    }

  }
</script>


<style scoped>

  .inputArea {
    /* width: 350px; */
    display: flex;
    height: 40px;
  }

  .nameLight {
    /* width: 80px; */
    text-align: right;
    padding-right: 10px;
    line-height: 40px;
    font-size: 12px;
    font-weight: normal;
    color: #333333;
  }

  .nameDark {
    font-size: 12px;
    font-weight: normal;
    color: #666666;
    text-align: right;
    padding-right: 10px;
    /* width: 80px; */
    line-height: 40px;
  }
 

  .unit {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #333333;
    margin-left: 4px;
  }
</style>

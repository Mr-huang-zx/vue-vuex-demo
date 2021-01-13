<template>
  <div class="hello">
    vuex 中的值是  {{$store.state.count}} <hr>
    
    <input type="button" @click="add()" name="" value="点击vuex中count的值+1">

    <span>利用vuex底部导航栏切换显示隐藏</span>  <hr>

    辅助函数点击增加
    <input type="button" @click="ADD" name="" value="点击vuex中辅助函数count的值+1">  <hr>

    <input type="button" @click="ADD" name="" value="从vuex中获取的数据是">
    {{shareDatas}}


    
  </div>
</template>

<script>
// vuex的辅助函数  mapGetters 是调用的store中的getters属性,在页面的computed计算属性中使用
//                 mapActions调用的store中的actions，在页面的methods属性中使用
import {mapGetters,mapActions} from 'vuex'


export default {
  name: 'HelloWorld',
  data() {
    return {
      datas:["这是点击传给vuex的值"]
    }
  },

  // 在计算属性中使用辅助函数   //数组中传在store 中getters中定义的函数名
  // computed:mapGetters(['showOr']) , //当此页面还需要用到其他计算属性时
  computed: {
    ...mapGetters(['showOr']),  //调用getters中的方法  可以获取vuex的数据
    ...mapGetters(['shareDatas']),  //获取vuex中的数据  这个shareDatas是store中getters的函数名 也是该页面的数据名 for循环shareDatas


    // add(){
    //   return 1
    // },
  },
  methods: {
    // 调用vuex中actions中的方法 可替换dispatch用法
    ...mapActions(['ADD']),
    add(){
      this.$store.dispatch('addone',this.datas)
    },
  },
  mounted() { 
    // 进入详情隐藏底部导航
    this.$store.dispatch("hideTabbar")
  },
  destroyed() {
     // 离开详情显示底部导航
    this.$store.dispatch("showTabbar")
  },
}
</script>

<style scoped>

</style>

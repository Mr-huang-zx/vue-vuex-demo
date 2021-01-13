import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// actions是异步
// mutations是同步
// vuex常用写法  当处理的业务逻辑比较多的时候，可以创建一个文件存放数据
var state ={
  count:100,
  isShowTabbar:true,
  getDatas:[]
}
// 相当于计算属性
var getters ={
  showOr(state){
    return state.isShowTabbar=false
  },
  shareDatas(state){
    return state.getDatas  //将vuex中的数据分享出去
  }
}

var mutations = {
  add(state,datas){
    state.count+=1
    state.getDatas.push(datas)
    console.log(state.getDatas)
    console.log(state.getDatas.length)

  },
  hideTabbar(state){
    state.isShowTabbar=false
  },
  showTabbar(state){
    state.isShowTabbar=true
  },
}

var actions = {
    // 写法一   datas 为传过来的参数
    addone(context,datas){
      context.commit("add",datas)
    },

    // 辅助函数加1
    ADD(context){
      context.commit("add")
    },
     // 写法二
    //  addone({commit,state}){
          // commit(add)
    // }

    hideTabbar({commit}){
      commit("hideTabbar")
    },
    showTabbar({commit}){
      commit("showTabbar")
    },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})


// // vuex第二种写法
// export default new Vuex.Store({
//   state: {
//     count:100
//   },
//   mutations: {
//     add(state){
//       state.count+=1
//     }
//   },
//   actions: {

//     // 写法一
//     addone(context){
//       context.commit("add")
//     }

//      // 写法二
//     //  addone({commit,state}){
//           // commit(add)
//     // }
//   },

//   // modules: {
//   // }
// })

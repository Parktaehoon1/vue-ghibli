<template>
<div class="wrap">
  <HeaderView />
  <div class="container">
  <RouterView /> 
  </div>
</div>
</template>

<script>
  import { useStore } from 'vuex';
  import HeaderView from './components/HeaderView.vue'
  export default {
    components:{
      HeaderView
    },
    setup() {
      // vuex에 dispatch 전송
      const store = useStore();
      // 각각의 페이지에서 자료 호출 한건지ㅎㅎ
      store.dispatch('fetchMovieList')
      return {

      }
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, li{
  list-style: none;
}
a{
  color: #333;
  text-decoration: none;
}
html{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background: #eff3f7;
}

.wrap{ 
  position: absolute;
  left: 0;
  top: 0;
  display: block;
}
.container{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* width: 100%; */
}
</style>
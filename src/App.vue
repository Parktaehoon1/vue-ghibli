<template>
  <ModalView />
  <div class="wrap">
    <HeaderView />
    <div class="container">
      <!-- <Transition name="fade">
        <div class="intro" v-if="show"></div>
      </Transition> -->

      <RouterView @hide="hideIntro" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import HeaderView from "./components/HeaderView.vue";
import ModalView from "./views/ModalView.vue";
export default {
  components: {
    HeaderView,
    ModalView,
  },
  setup() {
    // vuex에 dispatch 전송
    const store = useStore();
    // 각각의 페이지에서 자료 호출 한건지ㅎㅎ
    store.dispatch("fetchMovieList");
    // 인트로 화면 관련
    const show = ref(true);
    const hideIntro = () => {
      show.value = false;
      // html 에 overflow-y 의 속성을 auto로 교체
      document.querySelector("html").style.overflowY = "auto";
    };

    return {
      show,
      hideIntro,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
}

/* SCROLL */
::-webkit-scrollbar {
  width: 10px;
}

/* 스크롤바의 width */
::-webkit-scrollbar-track {
  background-color: #fff;
}

/* 스크롤바의 전체 배경색 */
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #fff, #000, #fff);
}

/* 스크롤바 색 */
::-webkit-scrollbar-button {
  display: none;
}

html {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 16px;
  background: radial-gradient(circle, #333, #333, #000);
  overflow-x: hidden;
  overflow-y: hidden;
}

.wrap {
  position: relative;
  display: block;
  width: 1200px;
  margin: 0 auto;
}

.container {
  position: absolute;
  left: 50%;
  top: 150%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* width: 100%; */
}

.intro {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: url("@/assets/mainintro.jpg") no-repeat center;
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

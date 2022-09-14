import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/page-ghibli/home',
      redirect:'/'
    },
    {
    // 웹브라우저 주소 표시줄에 명시
    path: '/page-ghibli/',
    // RouterView 에 보여줄 페이지 컴포넌트 이름
    component: HomeView
    },
    {
      path: '/page-ghibli/detail/:id',
      component: DetailView
    },
    {
      path: "/page-ghibli/404",
      name: "notFound",
      component: NotFound,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/page-ghibli/404",
    },
  ]
});
export default router
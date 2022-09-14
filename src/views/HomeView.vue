<template>
    <div class="movie" v-for="(item, index) in movieList" :key="index">
        <MovieList :propsdata="item" />
        <!--여기서 item은 v-for의 아이템 -->
    </div>

    <button class="gotop" @click="moveTop"><i class="fas fa-arrow-up"></i></button>

</template>

<script>
    import {
        computed,
        onUpdated,
        onMounted,
        ref
    } from 'vue';
    import {
        useStore
    } from 'vuex';
    import MovieList from '../components/MovieList.vue'
    export default {
        components: {
            MovieList
        },
        setup(props, context) {
            
            const store = useStore();
            // 처음에는 computed 가 결과가 없는 상태
            const movieList = computed(() => store.getters.getMovieList)
            //html 태그의 속성으로 ref 를 사용함

            const gotop = ref(null)
            onMounted(() => { //ref 참조할때는 요롷게~~ 
                console.log(gotop.value)
            })
            // axios 실행 > vuex : mutation 실행
            
            onUpdated(() => {
                // 내용물이 최종 업데이트가 되었다면 App 으로 intro 화면 사라지라고 부탁해야됨
                let delay = setTimeout(() => {
                    clearTimeout(delay); // clearTimeout 때문에 변수에 담은 거임
                    context.emit('hide'); // emit은 엄마의 이벤트 네임을 줘야됨
                }, 1500)
            })

            const moveTop = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
            return {
                movieList,
                gotop,
                moveTop,
            }
        }
    }
</script>

<style scoped>
    .movie {
        position: relative;
        display: flex;
        width: 30%;
        background: #fff;
        margin-bottom: 70px;
        border-radius: 5px;
        color: #adaeb9;
        padding: 20px;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        cursor: pointer;
    }


    .gotop {
        position: fixed;
        right: 50px;
        bottom: 100px;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #f00;
        color: #fff;
        cursor: pointer;
        z-index: 9;
        border: 0;
        border-radius: 10px;
    }

    @media all and (max-width:1200px) {
        .movie {
            width: 45%
        }
    }

    @media all and (max-width:1000px) {
        .movie {
            width: 95%
        }
    }
</style>
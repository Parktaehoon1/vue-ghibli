<template>

    <Swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="sw-movie">

        <swiper-slide class="movie" v-for="(item, index) in movieList" :key="index">
            <MovieList :propsdata="item" />
            <!--여기서 item은 v-for의 아이템 -->
        </swiper-slide>

    </Swiper>

    <button class="gotop" @click="moveTop"><i class="fas fa-arrow-up"></i></button>

</template>

<script>
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";
    import "swiper/css";

    import "swiper/css/effect-cards";

    import {
        EffectCards
    } from "swiper";

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
            MovieList,
            Swiper,
            SwiperSlide,
        },
        setup(props, context) {
            const store = useStore();
            // 처음에는 computed 가 결과가 없는 상태
            const movieList = computed(() => store.getters.getMovieList)
            //html 태그의 속성으로 ref 를 사용함

            const gotop = ref(null)
            onMounted(() => { //ref 참조할때는 요롷게~~ 
                // console.log(gotop.value)

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
                const gotop = document.querySelector('.gotop')
                const gotopY = window.scrollY;

                if (gotopY < 400) {
                    gotop.style.opacity = "1"
                } else {
                    gotop.style.opacity = "0"
                }
                let delay = setTimeout(() => {
                    clearTimeout(delay); // clearTimeout 때문에 변수에 담은 거임
                    gotop.style.opacity = "1"
                }, 3000)
                console.log(gotopY);

                // 임시방편으로ㅠ
            }



            return {
                movieList,
                gotop,
                moveTop,
                modules: [EffectCards],
                // status
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
        transition: all 0.5s;
    }

    .sw-movie {
        position: relative;
        display: block;
    }

    .swiper {
        width: 400px;
        height: 600px;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
    }

    .swiper-slide:nth-child(1n) {
        /* background-color: rgb(206, 17, 17); */
        background-color: rgb(0, 0, 0);
    }

    .swiper-slide:nth-child(2n) {
        /* background-color: rgb(0, 140, 255); */
        background-color: rgb(10, 10, 10);

    }

    .swiper-slide:nth-child(3n) {
        /* background-color: rgb(10, 184, 111); */
        background-color: rgb(20, 20, 20);
    }

    .swiper-slide:nth-child(4n) {
        /* background-color: rgb(211, 122, 7); */
        background-color: rgb(30, 30, 30);
    }

    .swiper-slide:nth-child(5n) {
        /* background-color: rgb(118, 163, 12); */
        background-color: rgb(40, 40, 40);

    }

    .swiper-slide:nth-child(6n) {
        /* background-color: rgb(180, 10, 47); */
        background-color: rgb(50, 50, 50);
    }

    .swiper-slide:nth-child(7n) {
        /* background-color: rgb(35, 99, 19); */
        background-color: rgb(60, 60, 60);
    }

    .swiper-slide:nth-child(8n) {
        /* background-color: rgb(0, 68, 255); */
        background-color: rgb(70, 70, 70);
    }

    .swiper-slide:nth-child(9n) {
        /* background-color: rgb(218, 12, 218); */
        background-color: rgb(80, 80, 80);
    }

    .swiper-slide:nth-child(10n) {
        /* background-color: rgb(54, 94, 77); */
        background-color: rgb(90, 90, 90);
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
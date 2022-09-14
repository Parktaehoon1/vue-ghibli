<template>
    <div>
        <div class="movie-box">
            <a class="a-back" @click.stop="back">all list</a>
            <div class="movie-detail">
                <img class="movie-image" :src="movieInfo.image">
                <div class="movie-info-wrap">

                    <h2 class="movie-title">{{movieInfo.title}} <small>{{movieInfo.original_title}}</small></h2>

                    <p class="movie-info">
                        Release Date : {{movieInfo.release_date}}년<br />
                        Director : {{movieInfo.director}}<br />
                        Producer : {{movieInfo.producer}}<br />
                        Running Time : {{movieInfo.running_time}}분
                    </p>
                    <p class="movie-desc">
                        {{movieInfo.description}}
                    </p>
                </div>
            </div>
        </div>
        <Transition name="fade">
        <div class="detail-intro" v-if="show"></div>
        </Transition>
    </div>
</template>

<script>
    import {
        computed,
        onMounted,
        onUpdated,
        ref
    } from 'vue';
    // router 를 통해서 전송받은 데이터 활용
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import {
        useStore
    } from 'vuex'
    export default {
        setup(props, context) {
            const route = useRoute() // router , route 구분
            const id = route.params.id; // router index에서 id로 받기로했기에
            // 상세정보 호출
            const store = useStore();
            // console.log('문제발생',id) 새로고침의 문제 Persistent 설치?
            store.dispatch('fetchMovieInfo', id);

            const movieInfo = computed(() => store.getters.getMovieInfo);
            const router = useRouter();
            const back = () => {
                router.push('/page-ghibli/');
            }
            const show = ref(true);

            onMounted(() => {
                // 스크롤바를 최상단으로 이동시킨다.
                window.scrollTo(0, 0);
                document.querySelector('html').style.overflowY = 'hidden';
            })
            onUpdated(() => {
                // show.value = false
                document.querySelector('html').style.overflowY = 'auto';
                context.emit('hide');
            })
            
            const delay = setTimeout(()=>{
                clearTimeout(delay)
                show.value = false
            },1500)

            return {
                id,
                movieInfo,
                back,show
            }
        }
    }
</script>

<style scoped>
    .movie-box {
        position: relative;
        display: block;
        width: 100%;
        /* height: 100vh; */
    }

    .a-back {
        position: absolute;
        right: 0;
        top: -65px;
        display: block;
        float: right;
        margin-top: 10px;
        margin-right: 20px;
        padding: 10px;
        background: transparent;
        border-radius: 8px;
        border: 1px solid #000;
        text-transform: uppercase;
        cursor: pointer;
        z-index: 99;
        font-weight: 700;
    }

    .movie-detail {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .movie-image {
        position: relative;
        display: block;
        width: 45%;
        height: 70%;
        border-radius: 10px;
        border: 10px solid #fff;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    }

    .movie-info-wrap {
        position: relative;
        display: block;
        width: 45%;
    }


    .movie-title {
        position: relative;
        display: block;
        font-size: 20px;
        background: #fff;
        border-radius: 5px;
        color: #000;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        padding: 20px;
        margin-bottom: 20px;
    }

    .movie-title small {
        position: relative;
        display: block;
        float: right;
        color: #333;
        font-size: 12px;
        margin-top: 5px;
    }

    .movie-info {
        position: relative;
        display: block;
        font-size: 14px;
        background: #fff;
        border-radius: 5px;
        color: #000;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        padding: 20px;
        margin-bottom: 20px;
    }

    .movie-desc {
        position: relative;
        display: block;
        font-size: 20px;
        background: #fff;
        border-radius: 5px;
        color: #000;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        padding: 20px;
        margin-bottom: 20px;
    }

    .detail-intro {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 90%;
        background: url('@/assets/detailintro.gif') no-repeat center;
        background-size: cover;
        z-index: 99;
    }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

    @media screen and (max-width:1000px) {
        .movie-image {
            width: 95%;
            margin: 30px 0;
        }

        .movie-info-wrap {
            width: 95%;
            margin: 20px auto;
        }
    }
</style>
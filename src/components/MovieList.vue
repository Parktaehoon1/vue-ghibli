<template>
    <div class="movie-box">

        <a @click.stop="detailMove">
            <p class="movie-title">{{propsdata.title}}</p>
            <div class="a-img">
                <img :src="propsdata.image">
            </div>
            <h2 class="a-title">
                {{propsdata.title}}<small>{{propsdata.original_title}}</small></h2>
            <p class="a-desc">{{propsdata.description}}</p>
        </a>
        <p class="a-desc-list">
            Release Date : {{propsdata.release_date}}년<br />
            Director : {{propsdata.director}}<br />
            Producer : {{propsdata.producer}}<br />
            Running Time : {{propsdata.running_time}}분
        </p>
        <i class="fas fa-check check-bt" :class="{movieComplete:propsdata.complete}" @click="updateMemo(propsdata)"></i>
    </div>
</template>

<script>
    // router 를 이용한 page 이동
    import {
        useRouter
    } from 'vue-router';
    // import { useStore } from 'vuex';
    export default {
        props: ['propsdata'],
        setup(props) {
            // const store = useStore();
            const router = useRouter();
            const detailMove = () => {
                // props 를 참조하고자 할때는 setup(props)를 활용
                router.push('/page-ghibli/detail/' + props.propsdata.id)
            }

            const updateMemo = (propsdata) => {
                console.log("id값", propsdata.id)
            }
            return {
                detailMove,
                updateMemo
            }
        }

    }
</script>
<style scoped>
    .movie-box {
        position: relative;
        display: block;
        width: 90%;
        height: 100%;
    }

    .movie-title {
        position: relative;
        display: block;
        text-align: center;
        bottom: 15px;
        font-size: 22px;
        font-weight: 700;
        color: #e9e9e9;
    }

    .movie-box a {
        position: relative;
        display: block;
    }

    .a-img {
        position: relative;
        display: block;
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 10px;
    }

    .a-img img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .a-title {
        position: relative;
        display: none;
        margin: 20px 0;
        font-size: 18px;
    }

    .a-title small {
        display: block;
        float: right;
        font-size: 14px;
        color: #999;
        margin-top: 3px;
    }

    .a-desc {
        position: relative;
        display: none;
        margin-bottom: 20px;
        font-size: 12px;
        line-height: 1.25;
        color: #333;
    }

    .check-bt {
        position: absolute;
        right: 0;
        bottom: 15%;
        color: #62acde;
        line-height: 50px;
        margin-right: 10px;
        cursor: pointer;
    }

    .movieComplete {
        color: red;
    }

    .a-desc-list{
        position: relative;
        display: block;
        margin-top: 10px;
        font-size: 16px;
        color: #e9e9e9;
    }

    @media screen and (max-width:1200px) {
        .a-img img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width:1000px) {
        .a-img img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
        }
    }
</style>
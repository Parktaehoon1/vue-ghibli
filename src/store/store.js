import { createStore } from "vuex"
import { fetchAllApi,fetchDetailInfo } from '../api/index'
const storage = {
    getData() {
        const arr = [];
        const total = localStorage.length;
        if (total > 0) {
            for (let i = 0; i < total; i++) {
                // 추후 DB 연동 예정
                let obj = localStorage.getItem(localStorage.key(i));
                arr.push(JSON.parse(obj));
            }
        }
        return arr;
    }
};
export default createStore({
    state :{
        movieList:[],
        movieInfo:{},
        movieLocal: storage.getData()
    },

    // API 연동
    actions:{
        fetchMovieList({commit}){
            fetchAllApi()
            .then(res => {
               // commit 으로 결과 전송
                commit('MOVIE_LIST_INIT', res.data)
            })
            .catch(err => console.log(err))
        },
        // 상세 데이터 호출
        fetchMovieInfo({commit}, _id){
            fetchDetailInfo(_id)
            .then(res => {
                commit('MOVIE_INFO', res.data)
                console.log("id를 받아오나",res.data)
            })
            .catch(
                err => console.log(err)
            )
        },
        fetchUpdateMemo({commit}, obj){
            commit("UPDATE_MEMO", obj);
            console.log("객체",obj)
        }

    },
    // 데이터 저장
    mutations:{
        // actions 에서 전송된 데이터 저장
        MOVIE_LIST_INIT(state, payload){
            state.movieList = payload
        },
        MOVIE_INFO(state, payload){
            state.movieInfo = payload
        },
        UPDATE_MEMO(state, payload){
        console.log("state",state)
        console.log("payload",payload)
        
        let movieTemp = {
            id: payload.id,
            complete: false,
        };
        localStorage.setItem(movieTemp.id, JSON.stringify(movieTemp));
        state.movieLocal.push(movieTemp);
        state.movieLocal[payload.id] = !state.movieLocal[payload.id];


        localStorage.setItem(payload.id, JSON.stringify(payload));

        localStorage.removeItem(payload.id);

        // state.movieLocal[payload.id].complete = !state.movieLocal[payload.id].complete;

        localStorage.setItem(payload.id, JSON.stringify(payload.item));


        }
    },
    // 데이터 참조
    getters:{
        // 전체데이터 출력/참조
        getMovieList(state){
            return state.movieList
        },
        getMovieInfo(state){
            return state.movieInfo
        }
    }
});
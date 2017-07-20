import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
      is_login:false,
      list_Article:[],
      listArticleByUser:[]
    },
    getters:{
      isLogin(state){
        return state.is_login;
      },
      listArticle(state){
        return state.list_Article;
      },
      listArticleByUser(state){
        return state.listArticleByUser;
      }
    },
    mutations:{
      changeIsLogin(state,value){
        state.is_login=value
      },
      getListArticle(state,list){
        state.list_Article=list
      },
      getListArticleByUser(state,list){
        state.listArticleByUser=list
      }
    },
    actions:{
      changeIsLogin({commit},value){
        commit('changeIsLogin',value)
      },
      getListArticle({commit}){
        this.axios.get('http://localhost:3000/artikel')
        .then(response =>{
          commit('getListArticle',response.data)
        })
      },
      getListArticleByUser({commit}){
        let user = window.localStorage.getItem('user');
        let list=[]
        this.axios.get('http://localhost:3000/artikel')
        .then(response =>{
          list=response.data.filter(article =>{
            return article.author.username==user
          })
          commit('getListArticleByUser',list)
        })
      }
    }
})
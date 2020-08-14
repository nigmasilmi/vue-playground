import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
    // state equals the data
    state: {
        messages: [],
        message: '',
        currentUser: '',
        users: [],
        token: localStorage.getItem('token') || ''
    },
    // mutations are methods to modify the state object
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
        },
        giveMeTheSingle(state, theSingle) {
            state.message = theSingle;
        },
        soloPlaceholder(state, whatComes) {
            console.log(state);
            console.log('whatcomes en el soloPlaceholder', whatComes);
        },
        auth(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = '';
            localStorage.clear('token');
        }


    },
    // actions that go beyond modifying the state object
    actions: {
        getMessages({ commit }) {
            return (axios.get('http://localhost:3000/messages').then(res => {
                let messages = res.data;
                commit('updateMessages', messages);
            }));

        },
        postNewMessage({ commit }, dataComing) {
            axios.post('http://localhost:3000/messages', {
                text: dataComing.text,
            }).then(response => {
                //aqui captura nombre
                let msg = response.data.text;
                commit('newMessage', msg);
            });

        },
        getSingleMessage({ commit }, id) {
            axios.get(`http://localhost:3000/messages/${id}`).then(res => {
                let theSingle = res.data.text;
                commit('giveMeTheSingle', theSingle);
            });
        },
        register({ commit }, registerData) {
            axios.post('http://localhost:3000/register', registerData).then(res => {
                localStorage.setItem('token', res.data);
                axios.defaults.headers.common['Authorization'] = res.data;
                commit('auth', res.data);
            });
        },
        login({ commit }, loginData) {
            axios.post('http://localhost:3000/login', loginData).then(res => {
                localStorage.setItem('token', res.data);
                axios.defaults.headers.common['Authorization'] = res.data;
                commit('auth', res.data);
            });
        }


    }
});

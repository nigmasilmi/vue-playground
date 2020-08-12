import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
    // state equals the data
    state: {
        messages: []
    },
    // mutations are methods to modify the state object
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
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
        postNewMessage({ commit }, msgComming) {
            axios.post('http://localhost:3000/messages', {
                title: msgComming
            }).then(response => {
                let msg = response.data.title;
                console.log('estamos ejecutando un post method');
                console.log(response);
                commit('newMessage', msg);
            });

        }
    }
});

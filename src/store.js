import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

const errorSys = {
    state: {
        showError: false,
        errorText: "Error",

    },
    mutations: {
        showTheError(state, errMesg) {
            state.showError = true;
            state.errorText = errMesg;
        }
    }
};

export default new Vuex.Store({
    // state equals the data
    state: {
        messages: [],
        message: '',
        currentUser: '',
        users: [],
        token: localStorage.getItem('token') || '',
        students: [],

    },
    getters: {
        students: state => state.students.map(stu => ({ ...stu, fullName: stu.name + ' ' + stu.lastname })),
        findTheStudent: (state) => theId => state.students.find(ele => ele.id == theId),
        isLoaded: (state) => !!state.students.length
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
        },
        fillStudents(state, studentsComing) {
            state.students = studentsComing;
        },
        addNewStudent(state, newStudent) {
            state.students.push(newStudent);
            console.log('students en store:', state.students);
        },
        setTheUpdatedStudent(state, updatedData) {
            let theIndex = updatedData.id;
            Vue.set(state.students, theIndex, updatedData);
        },




    },

    // actions that go beyond modifying the state object
    actions: {
        getMessages({ commit }) {
            return (axios.get('http://localhost:3000/messages').then(res => {
                let messages = res.data;
                console.log('vienen los mensajes como objeto?', messages);
                commit('updateMessages', messages);
            }));

        },
        postNewMessage({ commit }, dataComing) {
            axios.post('http://localhost:3000/messages', {
                text: dataComing.text,
            }).then(response => {
                let msg = response.data;

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
        },
        getStudents({ commit }) {
            axios.get('http://localhost:3000/students').then((res) => {
                let studentsComing = res.data.students;
                commit('fillStudents', studentsComing);
            }).catch(err => commit('showTheError', err));


        },
        newStudent({ commit }) {
            axios.post('http://localhost:3000/students').then(res => {
                let newStudent = res.data;
                commit('addNewStudent', newStudent);
            });
        },
        updateStudent({ commit }, updateData) {
            axios
                .put(`http://localhost:3000/students/${updateData.id}`, updateData)
                .then((res) => {
                    commit("setTheUpdatedStudent", res.data);
                });
        }

    },
    modules: {
        errorMod: errorSys
    }

});

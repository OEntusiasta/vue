import Vue from 'vue'
import App from './components/app.vue'
import VueRouter from 'vue-router'
import { fireBase } from './fireBase'

Vue.use(VueRouter)

import DashBoard from './components/dashBoard.vue'
import SignIn from './components/signIn.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/Dashboard', component: DashBoard },
        { path: '/Signin', component: SignIn }
    ]
})

fireBase.auth().onAuthStateChanged(user => {

})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})
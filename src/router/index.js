import Vue from 'vue';
import VueRouter from 'vue-router';
import Project from '../components/projects/Project.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About,
            props: { projectName: "about" }
        },
        {
            path: '/:projectName',
            component: Project,
            props: true,
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
});

export default router;

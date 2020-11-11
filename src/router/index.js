import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VuetifyTable from "@/views/VuetifyTable";
import Antd from "@/views/Antd";
import VueDataTables from "@/views/VueDataTables";
import Syncfusion from "@/views/Syncfusion";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: VuetifyTable
  },
  {
    path: '/antd',
    name: 'antd',
    component: Antd
  },
  {
    path: '/element-ui',
    name: 'element-ui',
    component: VueDataTables
  },
  {
    path: '/syncfusion',
    name: 'Syncfusion',
    component: Syncfusion
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

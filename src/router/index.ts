import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home.vue"
import Survey from "../components/Survey.vue"
import Creator from "../components/Creator.vue"
import PDFGenerator from "../components/PDFGenerator.vue"
import Dashboard from "../components/Dashboard.vue"
import DashboardTabulator from "../components/DashboardTabulator.vue"
import DashboardDatatables from "../components/DashboardDatatables.vue"
import Test from "../components/Test.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/survey", component: Survey },
    { path: "/creator", component: Creator },
    { path: "/exportpdf", component: PDFGenerator },
    { path: "/analytics", component: Dashboard },
    { path: "/analyticstabulator", component: DashboardTabulator },
    { path: "/analyticsdatatables", component: DashboardDatatables },
    { path: "/test", component: Test },
  ]
})

export default router

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/search",
			name: "search",
			component: () => import("../views/SearchView.vue"),
		},
		{
			path: "/pod",
			name: "pod",
			component: () => import("../views/PodView.vue"),
		},
		{
			path: "/library",
			name: "library",
			component: () => import("../views/LibraryView.vue"),
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../views/ProfileView.vue"),
		},
	],
})

export default router

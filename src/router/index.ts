import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { launchMiddlewareSystem } from './middleware-system';
import { useAppStore } from '@/stores/useAppStore';

const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: () => import('../pages/Home.page.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (_, __, savedPosition) => {
		if (savedPosition) {
			return {
				...savedPosition,
				behavior: 'smooth',
			};
		}

		return {
			top: 0,
			behavior: 'smooth',
		};
	},
});

router.beforeEach(launchMiddlewareSystem);

router.afterEach(() => {
	const appStore = useAppStore();

	if (!appStore.isAppReadyToRender) appStore.isAppReadyToRender = true;
});

export default router;

import type {
	RouteLocationNormalized,
	RouteLocationNormalized,
	NavigationGuardNext,
} from 'vue-router';
import type { Component } from 'vue';

declare global {
	type MidlewareLaunchContext = [
		to: RouteLocationNormalized,
		from: RouteLocationNormalized,
		next: NavigationGuardNext,
	];

	type MiddlewareContext = {
		to: MidlewareLaunchContext[0];
		from: MidlewareLaunchContext[1];
		next: MidlewareLaunchContext[2];
	};

	type Middleware = (context: MiddlewareContext) => void | Promise<void>;
}

declare module 'vue-router' {
	interface RouteMeta {
		layoutName?: string;
		layoutComponent?: Component;
		middleware?: Middleware | Middleware[];
	}
}

<script setup lang="ts">
import AppLayout from '@/containers/AppLayout.vue';
import AppLoader from '@/containers/AppLoader.vue';
import { useAppStore } from './stores';
import TransitionApp from '@/containers/Transition/TransitionApp.vue';

const appStore = useAppStore();
</script>

<template>
	<div :class="$style.appContainer">
		<AppLoader :class="$style.appLoader" />

		<TransitionApp>
			<AppLayout v-if="appStore.isAppFullLoaded" :class="$style.app">
				<RouterView v-slot="{ Component, route }">
					<Component :is="Component" :key="route.fullPath" />
				</RouterView>
			</AppLayout>
		</TransitionApp>
	</div>
</template>

<style src="@/assets/scss/global/index.scss" />
<style lang="scss" module>
.appContainer {
	@extend %fontTTHoves;

	height: 100dvh;
	width: 100dvw;
	overflow: hidden;

	color: white;
}

.app {
	z-index: zindex.$zindexApp;
	position: relative;
}

.appLoader {
	z-index: zindex.$zindexAppLoader;
}
</style>

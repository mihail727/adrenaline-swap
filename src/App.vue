<script setup lang="ts">
import AppLayout from '@/containers/AppLayout.vue';
import { useAppStore } from './stores/useAppStore';

const appStore = useAppStore();
</script>

<template>
	<div :class="$style.appContainer">
		<AppLayout v-if="appStore.isStartupLogicCompleted">
			<RouterView v-slot="{ Component, route }">
				<Component :is="Component" :key="route.fullPath" />
			</RouterView>
		</AppLayout>

		<!-- TODO: add app loader -->
		<div v-else>...Loading</div>
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
</style>

import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app-store', () => {
	const isStartupLogicCompleted = ref(false);
	const isAppReadyToRender = ref(false);

	const isAppFullLoaded = computed(
		() => isStartupLogicCompleted.value && isAppReadyToRender.value,
	);

	return {
		isStartupLogicCompleted,
		isAppReadyToRender,
		isAppFullLoaded,
	};
});

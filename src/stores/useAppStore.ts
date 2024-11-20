import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app-store', () => {
	const isStartupLogicCompleted = ref(false);

	return { isStartupLogicCompleted };
});

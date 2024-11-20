import { defineMiddleware } from '@/hooks';
import { useAssetStore } from '@/stores';
import { useAppStore } from '@/stores/useAppStore';

export const startupMiddleware = defineMiddleware(async ({ next }) => {
	const appStore = useAppStore();
	const assetStore = useAssetStore();

	if (appStore.isStartupLogicCompleted) {
		return next();
	}

	await assetStore.updateAssetList();

	appStore.isStartupLogicCompleted = true;

	return next();
});

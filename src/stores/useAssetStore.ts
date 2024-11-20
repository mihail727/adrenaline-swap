import { useAssetMeta } from '@/hooks';
import { assetMockDatList } from '@/mock';
import { promiseTimeout } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAssetStore = defineStore('asset-store', () => {
	const assetMeta = useAssetMeta();

	const assetList = ref<Asset[]>([]);

	async function updateAssetList() {
		const response = assetMockDatList as Asset[];

		// await promiseTimeout(1000);

		assetList.value = response.map((item) => ({
			...item,
			...assetMeta.getAssetMetaByKey(item.key),
		}));
	}

	return {
		assetList,
		updateAssetList,
	};
});

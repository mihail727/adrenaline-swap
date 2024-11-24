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

		const randomLoad = Math.floor(Math.random() * 10) * 1000;

		await promiseTimeout(randomLoad);

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

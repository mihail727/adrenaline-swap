import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLiquidityStore = defineStore('liquidity-store', () => {
	const liquidityList = ref<Liquidity[]>([]);

	return { liquidityList };
});

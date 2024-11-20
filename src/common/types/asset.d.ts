import type { FunctionalComponent } from 'vue';

declare global {
	type AssetKey = 'BNB' | 'ETH' | 'BTC';

	interface AssetMeta {
		key: AssetKey;
		name: string;
		icon: FunctionalComponent;
	}

	interface Asset extends AssetMeta {
		balance: number;
	}
}

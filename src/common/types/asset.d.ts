import type { FunctionalComponent } from 'vue';

declare global {
	type AssetKey = 'BNB' | 'ETH' | 'BTC' | 'BNB2' | 'ETH2' | 'BTC2' | 'BNB3' | 'ETH3' | 'BTC3';

	interface AssetMeta {
		key: AssetKey;
		name: string;
		icon: FunctionalComponent;
	}

	interface Asset extends AssetMeta {
		balance: number;
		incomeValue: number;
		lockedInPoolValue: number;
		totalAssets: number;
	}

	type AssetBlockID = 0 | 1;
}

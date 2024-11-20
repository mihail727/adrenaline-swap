import IconTokenBNB from 'assets/icons/tokens/bnb.svg?component';
import IconTokenETH from 'assets/icons/tokens/eth.svg?component';
import IconTokenBTC from 'assets/icons/tokens/btc.svg?component';
import { markRaw } from 'vue';

export const useAssetMeta = () => {
	const assetMetaList: AssetMeta[] = [
		{
			key: 'BNB',
			name: 'BNB',
			icon: markRaw(IconTokenBNB),
		},
		{
			key: 'ETH',
			name: 'Ether',
			icon: markRaw(IconTokenETH),
		},
		{
			key: 'BTC',
			name: 'Bitcoin',
			icon: markRaw(IconTokenBTC),
		},
	];

	function getAssetMetaByKey(key: AssetKey) {
		return assetMetaList.find((asset) => asset.key === key);
	}

	return {
		assetMetaList,
		getAssetMetaByKey,
	};
};

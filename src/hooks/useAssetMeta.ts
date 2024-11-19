import IconTokenBNB from 'assets/icons/tokens/bnb.svg?component';
import IconTokenETH from 'assets/icons/tokens/eth.svg?component';
import IconTokenBTC from 'assets/icons/tokens/btc.svg?component';

export const useAssetMeta = () => {
	const assets: AssetsList = [
		{
			key: 'BNB',
			name: 'BNB',
			icon: IconTokenBNB,
		},
		{
			key: 'ETH',
			name: 'Ether',
			icon: IconTokenETH,
		},
		{
			key: 'BTC',
			name: 'Bitcoin',
			icon: IconTokenBTC,
		},
	];

	function getAssetMetaByKey(key: string) {
		return assets.find((asset) => asset.key === key);
	}

	function getAssetMetaByName(name: string) {
		return assets.find((asset) => asset.name === name);
	}

	return {
		getAssetMetaByKey,
		getAssetMetaByName,
	};
};

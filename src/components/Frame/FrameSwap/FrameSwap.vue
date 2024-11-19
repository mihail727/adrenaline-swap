<script setup lang="ts">
import AssetBalance from '@/components/Asset/AssetBalance.vue';
import AssetButton from '@/components/Asset/AssetButton.vue';
import { useAssetMeta } from '@/hooks';

const assetMeta = useAssetMeta();

const asset = assetMeta.getAssetMetaByKey('BNB');
</script>

<template>
	<div :class="$style.frameSwap">
		<AssetButton :asset="asset" />
		<AssetBalance :balance="14762.5" />
	</div>
</template>

<style lang="scss" module>
.frameSwap {
}
</style>

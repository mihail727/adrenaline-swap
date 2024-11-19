<script setup lang="ts">
import ButtonAsset from '@/components/ButtonAsset.vue';
import { useAssetMeta } from '@/hooks';

const assetMeta = useAssetMeta();

const asset = assetMeta.getAssetMetaByKey('BNB');
</script>

<template>
	<div :class="$style.frameSwap">
		<ButtonAsset :asset="asset" />
	</div>
</template>

<style lang="scss" module>
.frameSwap {
	width: 400px;
}
</style>

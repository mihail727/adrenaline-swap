<script setup lang="ts">
import AssetButton from './AssetButton.vue';
import AssetBalance from './AssetBalance.vue';
import AssetInput from './AssetInput.vue';

const inputValue = defineModel<number | undefined>('inputValue');

defineProps<{
	asset: Asset;
}>();

const emit = defineEmits<{
	click: [asset: AssetMeta];
}>();

function onClick(asset: AssetMeta) {
	emit('click', asset);
}
</script>

<template>
	<div :class="$style.assetBlock">
		<div :class="$style.infoWrapper">
			<AssetButton :asset="asset" @click="onClick" />
			<AssetBalance :asset-key="asset.key" :assetBalance="asset.balance" />
		</div>

		<AssetInput v-model="inputValue" :asset-key="asset.key" :asset-balance="asset.balance" />
	</div>
</template>

<style lang="scss" module>
.assetBlock {
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.infoWrapper {
	display: flex;
	gap: 10px;
}
</style>

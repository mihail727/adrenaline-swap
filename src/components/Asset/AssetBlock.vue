<script setup lang="ts">
import AssetButton from './AssetButton.vue';
import AssetBalance from './AssetBalance.vue';
import AssetInput from './AssetInput.vue';

const inputValue = defineModel<number | undefined>('inputValue');

withDefaults(
	defineProps<{
		asset?: Asset;
		selected?: boolean;
	}>(),
	{
		selected: false,
	},
);

const emit = defineEmits<{
	click: [asset?: AssetMeta];
}>();

function onClick(asset?: AssetMeta) {
	emit('click', asset);
}
</script>

<template>
	<div :class="[$style.assetBlock, selected && $style.selected]">
		<div :class="$style.infoWrapper">
			<AssetButton :asset="asset" @click="onClick" />
			<AssetBalance :asset-key="asset?.key" :assetBalance="asset?.balance" />
		</div>

		<AssetInput v-model="inputValue" :asset-key="asset?.key" :asset-balance="asset?.balance" />
	</div>
</template>

<style lang="scss" module>
.assetBlock {
	display: flex;
	flex-direction: column;
	gap: 14px;

	&.selected > :not(.infoWrapper) {
		transition: opacity 0.3s ease;
		opacity: 0.5;
	}
}

.infoWrapper {
	display: flex;
	gap: 10px;
}
</style>

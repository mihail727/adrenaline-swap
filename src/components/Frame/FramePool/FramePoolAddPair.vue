<script setup lang="ts">
import AssetBlock from '@/components/Asset/AssetBlock.vue';
import FrameHeader from '../FrameHeader.vue';
import VButton from '@/components/VButton.vue';
import { ref } from 'vue';
import { useAssetStore } from '@/stores';
import { vOnClickOutside } from '@vueuse/components';

const assetStore = useAssetStore();

const emit = defineEmits<{
	add: [assetOne: Asset, assetTwo: Asset];
	close: [];
}>();

const selectedBlock = ref<AssetBlockID | undefined>();
const upperAsset = ref<Asset | undefined>(assetStore.assetList[0]);
const bottomAsset = ref<Asset | undefined>(assetStore.assetList[1]);

function onClickAdd() {
	if (!upperAsset.value || !bottomAsset.value) return;

	emit('add', upperAsset.value, bottomAsset.value);
	emit('close');
}

function onClickOutside() {
	emit('close');
}
</script>

<template>
	<div v-on-click-outside="onClickOutside" :class="$style.framePoolAddPair">
		<FrameHeader
			title="Select pair and amount"
			:class="selectedBlock !== undefined && $style.hasSelected"
			@click-back="$emit('close')"
		/>

		<div :class="$style.blockWrapper">
			<AssetBlock
				:asset="upperAsset"
				:selected="selectedBlock === 0"
				:class="selectedBlock !== undefined && selectedBlock !== 0 && $style.hasSelected"
				@click="selectedBlock = 0"
			/>
			<AssetBlock
				:asset="bottomAsset"
				:selected="selectedBlock === 1"
				:class="selectedBlock !== undefined && selectedBlock !== 1 && $style.hasSelected"
				@click="selectedBlock = 1"
			/>
		</div>

		<VButton
			:class="[$style.btnAdd, selectedBlock !== undefined && $style.hasSelected]"
			@click="onClickAdd"
		>
			Add
		</VButton>
	</div>
</template>

<style lang="scss" module>
.framePoolAddPair {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	background-color: colors.$darkSecond;
	border-radius: 10px;
	padding: 12px 20px 20px 20px;
	gap: 28px;

	@media screen and (min-width: vars.$minDesktopWidth) {
		width: vars.$frameWidth;
	}
}

.blockWrapper {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.btnAdd {
	margin-top: auto;
}

.hasSelected {
	opacity: 0.5;
	transition: all 0.3s ease;
}
</style>

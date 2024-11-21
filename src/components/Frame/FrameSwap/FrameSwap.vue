<script setup lang="ts">
import { ref } from 'vue';
import FrameTokenSelect from '../FrameTokenSelect.vue';
import FrameSwapMain from './FrameSwapMain.vue';
import { useAssetStore } from '@/stores';

const assetStore = useAssetStore();

const selectedBlock = ref<AssetBlockID | undefined>();
const upperAsset = ref<Asset | undefined>(assetStore.assetList[0]);
const bottomAsset = ref<Asset | undefined>(assetStore.assetList[1]);

function onSelectAsset(asset: Asset) {
	if (selectedBlock.value === 0) upperAsset.value = asset;
	if (selectedBlock.value === 1) bottomAsset.value = asset;
}

function onCloseTokenSelect() {
	selectedBlock.value = undefined;
}
</script>

<template>
	<div :class="$style.frameSwap">
		<TransitionGroup
			:enter-active-class="$style.transitionActive"
			:leave-active-class="$style.transitionActiveLeave"
			:move-class="$style.transitionActive"
			:enter-from-class="$style.transition"
			:leave-to-class="$style.transition"
		>
			<FrameSwapMain
				key="main"
				v-model:selected-block="selectedBlock"
				v-model:upper-asset="upperAsset"
				v-model:bottom-asset="bottomAsset"
			/>
			<FrameTokenSelect
				v-if="selectedBlock !== undefined"
				key="tokenSelect"
				@select-asset="onSelectAsset"
				@close="onCloseTokenSelect"
			/>
		</TransitionGroup>
	</div>
</template>

<style lang="scss" module>
.frameSwap {
	position: relative;
	display: flex;
	gap: 20px;
	justify-content: flex-end;
	height: vars.$frameHeight;
}

.transitionActive {
	transition: all 0.6s ease;
}

.transitionActiveLeave {
	position: absolute;
	transition: all 0.6s ease;
	z-index: -1;
}

.transition {
	transform: translateX(60%);
	opacity: 0;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import FrameTokenSelect from '../FrameTokenSelect.vue';
import FrameSwapMain from './FrameSwapMain.vue';
import { useAssetStore } from '@/stores';
import TransitionFrames from '@/containers/Transition/TransitionFrames.vue';

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
		<TransitionFrames>
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
		</TransitionFrames>
	</div>
</template>

<style lang="scss" module>
.frameSwap {
	@extend %frame;

	gap: 20px;
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

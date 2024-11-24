<script setup lang="ts">
import { useAssetStore, useLiquidityStore } from '@/stores';
import FramePoolLiqudity from './FramePoolLiqudity.vue';
import FrameTokenSelect from '../FrameTokenSelect.vue';
import FramePoolAddPair from './FramePoolAddPair.vue';
import { computed, ref } from 'vue';
import TransitionFrames from '@/containers/Transition/TransitionFrames.vue';
import { promiseTimeout } from '@vueuse/core';
import FramePoolWithdraw from './FramePoolWithdraw.vue';

const liquidityStore = useLiquidityStore();
const assetStore = useAssetStore();

const selectedBlock = ref<AssetBlockID | undefined>();
const selectedPair = ref<Liquidity | undefined>();
const upperAsset = ref<Asset | undefined>(assetStore.assetList[0]);
const bottomAsset = ref<Asset | undefined>(assetStore.assetList[1]);
const isFrameAddPairVisible = ref(false);

const isFrameTokenSelectVisible = computed(
	() => isFrameAddPairVisible.value && selectedBlock.value !== undefined,
);
const isFramePoolLiqudityUnactive = computed(
	() => isFrameAddPairVisible.value || isFrameWithdrawVisible.value,
);
const isFrameWithdrawVisible = computed(() => selectedPair.value !== undefined);

async function onAddPair(upperAsset: Asset, bottomAsset: Asset) {
	const liquidity: Liquidity = {
		first: upperAsset,
		second: bottomAsset,
	};

	await promiseTimeout(400);

	liquidityStore.liquidityList.splice(0, 0, liquidity);
}

function onSelectAsset(asset: Asset) {
	if (selectedBlock.value === 0) upperAsset.value = asset;
	if (selectedBlock.value === 1) bottomAsset.value = asset;

	onCloseTokenSelect();
}

function onClickItem(liquidity: Liquidity) {
	selectedPair.value = liquidity;
}

function onCloseAddPair() {
	if (!isFrameTokenSelectVisible.value) isFrameAddPairVisible.value = false;
}

function onCloseTokenSelect() {
	selectedBlock.value = undefined;
}

async function onWithdraw(pair: Liquidity) {
	onCloseWithdraw();

	const index = liquidityStore.liquidityList.findIndex(
		(v) => v.first === pair.first && v.second === pair.second,
	);

	await promiseTimeout(400);
	liquidityStore.liquidityList.splice(index, 1);
}

function onCloseWithdraw() {
	selectedPair.value = undefined;
}
</script>

<template>
	<div :class="$style.framePool">
		<TransitionFrames>
			<FramePoolLiqudity
				key="list"
				:class="isFramePoolLiqudityUnactive && $style.unactive"
				@click-add="isFrameAddPairVisible = true"
				@click-item="onClickItem"
			/>

			<FramePoolAddPair
				v-if="isFrameAddPairVisible"
				key="addPair"
				v-model:selected-block="selectedBlock"
				v-model:upper-asset="upperAsset"
				v-model:bottom-asset="bottomAsset"
				@add="onAddPair"
				@close="onCloseAddPair"
			/>

			<FrameTokenSelect
				v-if="isFrameTokenSelectVisible"
				key="tokenSelect"
				@select-asset="onSelectAsset"
				@close="onCloseTokenSelect"
			/>

			<FramePoolWithdraw
				v-if="selectedPair !== undefined"
				:pair="selectedPair"
				@click-withdraw="onWithdraw"
				@close="onCloseWithdraw"
			/>
		</TransitionFrames>
	</div>
</template>

<style lang="scss" module>
.framePool {
	@extend %frame;

	gap: 20px;
}

.unactive {
	opacity: 0.5;
}
</style>

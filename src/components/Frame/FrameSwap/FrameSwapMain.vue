<script setup lang="ts">
import AssetBlock from '@/components/Asset/AssetBlock.vue';
import IconArrowCircle from 'assets/icons/arrow-circle.svg?component';
import { useAssetStore } from '@/stores';
import { ref } from 'vue';
import FrameSwapOptions from './FrameSwapOptions.vue';

const assetStore = useAssetStore();

const firstAsset = ref(assetStore.assetList[0]);
const secondAsset = ref(assetStore.assetList[1]);

function onClickBlock() {}

function onClickReplace() {
	if (!firstAsset.value || !secondAsset.value) return;

	const buffer = firstAsset.value;
	firstAsset.value = { ...secondAsset.value };
	secondAsset.value = { ...buffer };
}
</script>

<template>
	<div :class="$style.frameSwapMain">
		<AssetBlock v-if="firstAsset" :asset="firstAsset" @click="onClickBlock" />

		<button :class="$style.btnReplace" @click="onClickReplace">
			<IconArrowCircle :class="$style.iconArrowCircle" />
		</button>

		<AssetBlock v-if="secondAsset" :asset="secondAsset" @click="onClickBlock" />

		<FrameSwapOptions :class="$style.frameSwapOptions" />

		<button :class="$style.btnSwap">Swap</button>
	</div>
</template>

<style lang="scss" module>
.frameSwapMain {
	display: flex;
	flex-direction: column;
	width: 100%;
	flex-shrink: 0;
	gap: 14px;

	@media screen and (min-width: vars.$minDesktopWidth) {
		width: vars.$frameWidth;
	}
}

.btnReplace {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	border-radius: 100%;
	background-color: transparent;
	margin-left: auto;
	margin-right: auto;
	transition: transform 0.3s ease-out;

	&:active {
		transform: scale(0.9);
	}
}

.iconArrowCircle {
	width: 31px;
	height: auto;
}

.frameSwapOptions {
	padding-top: 30px;
}

.btnSwap {
	width: 100%;
	font-size: 24px;
	padding: 18px;
	background-color: colors.$red;
	color: colors.$white;
	border-radius: 10px;
	margin-top: auto;
	transition: transform 0.3s ease-out;

	&:active {
		transform: scale(0.9);
	}
}
</style>

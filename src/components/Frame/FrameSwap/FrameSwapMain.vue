<script setup lang="ts">
import AssetBlock from '@/components/Asset/AssetBlock.vue';
import IconArrowCircle from 'assets/icons/arrow-circle.svg?component';
import FrameSwapOptions from './FrameSwapOptions.vue';

const selectedBlock = defineModel<AssetBlockID>('selectedBlock');
const upperAsset = defineModel<Asset>('upperAsset');
const bottomAsset = defineModel<Asset>('bottomAsset');

function onClickReplace() {
	if (!upperAsset.value || !bottomAsset.value) return;

	const buffer = upperAsset.value;
	upperAsset.value = { ...bottomAsset.value };
	bottomAsset.value = { ...buffer };
}
</script>

<template>
	<div :class="$style.frameSwapMain">
		<AssetBlock
			:asset="upperAsset"
			:selected="selectedBlock === 0"
			:class="selectedBlock !== undefined && selectedBlock !== 0 && $style.hasSelected"
			@click="selectedBlock = 0"
		/>

		<button
			:class="[$style.btnReplace, selectedBlock !== undefined && $style.hasSelected]"
			@click="onClickReplace"
		>
			<IconArrowCircle :class="$style.iconArrowCircle" />
		</button>

		<AssetBlock
			:asset="bottomAsset"
			:selected="selectedBlock === 1"
			:class="selectedBlock !== undefined && selectedBlock !== 1 && $style.hasSelected"
			@click="selectedBlock = 1"
		/>

		<FrameSwapOptions
			:class="[$style.frameSwapOptions, selectedBlock !== undefined && $style.hasSelected]"
		/>

		<button :class="[$style.btnSwap, selectedBlock !== undefined && $style.hasSelected]">
			Swap
		</button>
	</div>
</template>

<style lang="scss" module>
.hasSelected {
	opacity: 0.5;
}

.frameSwapMain {
	display: flex;
	flex-direction: column;
	width: 100%;
	flex-shrink: 0;
	gap: 14px;

	@media screen and (min-width: vars.$minDesktopWidth) {
		width: vars.$frameWidth;
	}

	& > * {
		transition: all 0.3s ease;
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
	transition: all 0.3s ease-out;

	&:active {
		transform: scale(0.8);
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
	transition: all 0.3s ease-out;

	&:active {
		transform: scale(0.9);
	}
}
</style>

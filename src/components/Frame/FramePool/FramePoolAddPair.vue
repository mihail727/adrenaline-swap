<script setup lang="ts">
import AssetBlock from '@/components/Asset/AssetBlock.vue';
import FrameHeader from '../FrameHeader.vue';
import VButton from '@/components/VButton.vue';
import { vOnClickOutside } from '@vueuse/components';

const selectedBlock = defineModel<AssetBlockID | undefined>('selectedBlock');
const upperAsset = defineModel<Asset | undefined>('upperAsset');
const bottomAsset = defineModel<Asset | undefined>('bottomAsset');

const emit = defineEmits<{
	add: [assetOne: Asset, assetTwo: Asset];
	close: [];
}>();

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
	<article v-on-click-outside="onClickOutside" :class="$style.framePoolAddPair">
		<FrameHeader
			title="Select pair and amount"
			:class="selectedBlock !== undefined && $style.hasSelected"
			@click-back="$emit('close')"
		/>

		<section :class="$style.blockWrapper">
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
		</section>

		<VButton
			:class="[$style.btnAdd, selectedBlock !== undefined && $style.hasSelected]"
			@click="onClickAdd"
		>
			Add
		</VButton>
	</article>
</template>

<style lang="scss" module>
.framePoolAddPair {
	@extend %frameItem;

	background-color: colors.$darkSecond;
	border-radius: 10px;
	padding: 12px 20px 20px 20px;
	gap: 28px;
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

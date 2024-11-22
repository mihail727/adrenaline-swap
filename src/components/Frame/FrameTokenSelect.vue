<script setup lang="ts">
import { computed, ref } from 'vue';
import VInput from '../VInput.vue';
import FrameHeader from './FrameHeader.vue';
import FrameTokenSelectList from './FrameTokenSelectList.vue';
import { useAssetStore } from '@/stores';
import { vOnClickOutside } from '@vueuse/components';

const assetStore = useAssetStore();

const emit = defineEmits<{
	selectAsset: [asset: Asset];
	close: [];
}>();

const filterValue = ref<string>('');

const filterdAssetList = computed<Asset[]>(() => {
	return assetStore.assetList.filter((asset) => {
		if (
			asset.key.toLowerCase().includes(filterValue.value) ||
			asset.name.toLowerCase().includes(filterValue.value)
		)
			return asset;

		return;
	});
});

function onSelectAsset(asset: Asset) {
	emit('selectAsset', asset);
	emit('close');
}

function onClickOutside() {
	emit('close');
}
</script>

<template>
	<div v-on-click-outside="onClickOutside" :class="$style.frameTokenSelect">
		<div :class="$style.upperContent">
			<FrameHeader title="Select a token" @click-back="$emit('close')" />

			<VInput
				v-model="filterValue"
				mode="text"
				input-mode="text"
				placeholder="Enter token name"
			>
				<template #label>Search token name or ticker</template>
			</VInput>
		</div>

		<FrameTokenSelectList :assets="filterdAssetList" @select-asset="onSelectAsset" />
	</div>
</template>

<style lang="scss" module>
.frameTokenSelect {
	@extend %frameItem;

	padding: 12px 0px;
	max-height: 100%;
	background-color: colors.$darkSecond;
	border-radius: 10px;
	gap: 22px;
}

.upperContent {
	display: flex;
	flex-direction: column;
	gap: 22px;
	padding: 0px 20px;
}
</style>

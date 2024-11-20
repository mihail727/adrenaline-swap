<script setup lang="ts">
import IconArrow from 'assets/icons/arrow.svg?component';
import { computed } from 'vue';

const props = defineProps<{
	asset?: AssetMeta;
}>();

const emit = defineEmits<{
	click: [asset?: AssetMeta];
}>();

const computedAsset = computed(() => {
	if (!props.asset) {
		return {
			key: 'Unselected',
			name: 'Unselected',
			icon: null,
		};
	}

	return props.asset;
});

function onClick() {
	emit('click', props.asset);
}
</script>

<template>
	<button :class="$style.buttonAsset" @click="onClick">
		<Transition
			:enter-from-class="$style.transitionChangeAssetEnter"
			:leave-to-class="$style.transitionChangeAssetLeave"
			:enter-active-class="$style.transitionChangeAssetActive"
			:leave-active-class="$style.transitionChangeAssetActive"
			mode="out-in"
		>
			<div :key="computedAsset.key" :class="$style.asset">
				<Component :is="computedAsset.icon" :class="$style.iconAsset" />
				<span :class="$style.assetKey">{{ computedAsset.key }}</span>
			</div>
		</Transition>

		<IconArrow :class="$style.iconArrow" />
	</button>
</template>

<style lang="scss" module>
.buttonAsset {
	display: flex;
	align-items: center;
	width: 100%;
	gap: 4px;
	padding: 12px;
	background: colors.$redGradient;
	border-radius: 10px;
	color: colors.$white;
}

.asset {
	display: flex;
	align-items: center;
	gap: 8px;
	transition: all 0.6s ease;
}

.iconAsset {
	width: 24px;
	height: auto;
}

.assetKey {
	font-size: 20px;
}

.iconArrow {
	width: 10px;
	height: auto;
	margin-left: auto;
}

.transitionChangeAssetActive {
	transition: all 0.3s ease;
}

.transitionChangeAssetEnter {
	transform: translateY(-50%);
	opacity: 0;
}

.transitionChangeAssetLeave {
	transform: translateY(50%);
	opacity: 0;
}
</style>

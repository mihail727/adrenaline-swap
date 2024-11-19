<script setup lang="ts">
import IconArrow from 'assets/icons/arrow.svg?component';

const props = defineProps<{
	asset: AssetMeta;
}>();

const emit = defineEmits<{
	click: [asset: AssetMeta];
}>();

function onClick() {
	emit('click', props.asset);
}
</script>

<template>
	<button :class="$style.buttonAsset" @click="onClick">
		<div :class="$style.asset">
			<Component :is="asset.icon" :class="$style.iconAsset" />
			<span :class="$style.assetKey">{{ asset.key }}</span>
		</div>

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
</style>

<script setup lang="ts">
import { formatNumberWithCommas } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{
	asset: Asset;
}>();

const formattedBalance = computed(() => formatNumberWithCommas(props.asset.balance, 2));
</script>

<template>
	<div :class="$style.itemWrapper">
		<Component :is="asset.icon" :class="$style.assetIcon" />

		<div :class="$style.itemLabelWrapper">
			<span :class="$style.mainItemInfo">{{ asset.key }}</span>
			<span :class="$style.additionalItemInfo">{{ asset.name }}</span>
		</div>

		<div :class="$style.itemBalanceWrapper">
			<span :class="$style.mainItemInfo">{{ formattedBalance }}</span>
			<span :class="$style.additionalItemInfo">In pool</span>
		</div>
	</div>
</template>

<style lang="scss" module>
.itemWrapper {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 9px 20px;
	cursor: pointer;
	width: 100%;

	&:hover {
		background: colors.$redSelectGradient;
	}
}

.assetIcon {
	height: 24px;
	width: auto;
}

.itemLabelWrapper {
	display: flex;
	flex-direction: column;
}

.mainItemInfo {
	font-size: 14px;
}

.additionalItemInfo {
	font-size: 12px;
	color: rgba(colors.$white, 0.6);
}

.itemBalanceWrapper {
	display: flex;
	flex-direction: column;
	margin-left: auto;
	text-align: right;
}
</style>

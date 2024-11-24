<script setup lang="ts">
import { formatNumberWithCommas } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{
	asset: Asset;
}>();

const formattedLocked = computed(() => formatNumberWithCommas(props.asset.lockedInPoolValue, 8));
const formattedIncome = computed(() => formatNumberWithCommas(props.asset.incomeValue, 8));
const formattedTotal = computed(() => formatNumberWithCommas(props.asset.totalAssets, 8));
</script>

<template>
	<div :class="$style.framePoolWithdrawAsset">
		<div :class="$style.header">
			<Component :is="asset.icon" :class="$style.icon" />
			<span>{{ asset.key }}</span>
		</div>

		<div :class="$style.valuesWrapper">
			<div :class="$style.cell">
				<span :class="$style.label">Locked in Pool</span>
				<span :class="$style.value">{{ formattedLocked }}</span>
			</div>

			<div :class="$style.cell">
				<span :class="$style.label">{{ `${asset.key} Income` }}</span>
				<span :class="$style.value">{{ formattedIncome }}</span>
			</div>

			<div :class="$style.cell">
				<span :class="$style.label">Total assets</span>
				<span :class="$style.value">{{ formattedTotal }}</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.framePoolWithdrawAsset {
	display: flex;
	flex-direction: column;
}

.header {
	display: flex;
	gap: 8px;
	background: colors.$redGradient;
	border-radius: 10px;
	width: 100%;

	padding: 12px;
	font-size: 20px;
}

.icon {
	width: 24px;
	height: auto;
}

.valuesWrapper {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 12px;
}

.cell {
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.label {
	font-size: 14px;
	color: rgba(colors.$white, 0.7);
}

.value {
	font-size: 18px;
}
</style>

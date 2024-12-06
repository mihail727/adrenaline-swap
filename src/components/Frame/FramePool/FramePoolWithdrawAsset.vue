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
	<article :class="$style.framePoolWithdrawAsset">
		<header :class="$style.header">
			<figure :class="$style.icon">
				<Component :is="asset.icon" />
			</figure>
			<p>{{ asset.key }}</p>
		</header>

		<section :class="$style.valuesWrapper">
			<article :class="$style.cell">
				<header :class="$style.label">Locked in Pool</header>
				<p :class="$style.value">{{ formattedLocked }}</p>
			</article>

			<article :class="$style.cell">
				<header :class="$style.label">{{ `${asset.key} Income` }}</header>
				<p :class="$style.value">{{ formattedIncome }}</p>
			</article>

			<article :class="$style.cell">
				<header :class="$style.label">Total assets</header>
				<p :class="$style.value">{{ formattedTotal }}</p>
			</article>
		</section>
	</article>
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
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 24px;
		height: auto;
	}
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

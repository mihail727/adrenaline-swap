<script setup lang="ts">
import { formatNumberWithCommas } from '@/helpers';
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		assetKey?: string;
		assetBalance?: number | string;
	}>(),
	{
		assetKey: 'Unselected',
		assetBalance: 0,
	},
);

const formattedBalance = computed(() => formatNumberWithCommas(props.assetBalance, 2));
</script>

<template>
	<article :class="$style.balanceInfo">
		<header :class="$style.header">Balance</header>

		<Transition
			:enter-active-class="$style.transitionChangeAssetActive"
			:leave-active-class="$style.transitionChangeAssetActive"
			:enter-from-class="$style.transitionChangeAssetEnter"
			:leave-to-class="$style.transitionChangeAssetLeave"
			mode="out-in"
		>
			<p :key="assetKey" :class="$style.balance">{{ formattedBalance }}</p>
		</Transition>
	</article>
</template>

<style lang="scss" module>
.balanceInfo {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2px;
	padding: 7px 12px;
	border-radius: 10px;
	background-color: colors.$darkSecond;
}

.header {
	font-size: 14px;
	color: rgba(colors.$white, 0.8);
}

.balance {
	font-size: 18px;
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

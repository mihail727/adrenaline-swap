<script setup lang="ts">
import { formatNumberWithCommas } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{
	assetKey: AssetKey;
	assetBalance: number | string;
}>();

const formattedBalance = computed(() => formatNumberWithCommas(props.assetBalance));
</script>

<template>
	<div :class="$style.balanceInfo">
		<span :class="$style.header">Balance</span>

		<Transition
			:enter-active-class="$style.transitionChangeAssetActive"
			:leave-active-class="$style.transitionChangeAssetActive"
			:enter-from-class="$style.transitionChangeAssetEnter"
			:leave-to-class="$style.transitionChangeAssetLeave"
			mode="out-in"
		>
			<span :key="assetKey" :class="$style.balance">{{ formattedBalance }}</span>
		</Transition>
	</div>
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

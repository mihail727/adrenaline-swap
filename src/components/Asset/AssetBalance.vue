<script setup lang="ts">
import { formatNumberWithCommas } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{
	balance: number | string;
}>();

const formattedBalance = computed(() => formatNumberWithCommas(props.balance));
</script>

<template>
	<div :class="$style.balanceInfo">
		<span :class="$style.header">Balance</span>
		<span :class="$style.balance">{{ formattedBalance }}</span>
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
</style>

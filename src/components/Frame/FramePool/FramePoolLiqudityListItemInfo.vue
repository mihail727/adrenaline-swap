<script setup lang="ts">
import { formatNumberWithCommas } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{
	asset: Asset;
}>();

const formattedValue = computed(() => {
	const targetValue = props.asset.incomeValue;
	const formatted = formatNumberWithCommas(targetValue, 8);

	if (targetValue > 0) return `+${formatted}`;
	if (targetValue < 0) return `-${formatted}`;

	return formatted;
});
</script>

<template>
	<article :class="$style.framePoolLiqudityListItemInfo">
		<header :class="$style.key">{{ asset.key }}</header>
		<p :class="$style.value">{{ formattedValue }}</p>
	</article>
</template>

<style lang="scss" module>
.framePoolLiqudityListItemInfo {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

.key {
	font-size: 12px;
	font-weight: 600;
}

.value {
	font-size: 12px;
	color: rgba(colors.$white, 0.9);
}
</style>

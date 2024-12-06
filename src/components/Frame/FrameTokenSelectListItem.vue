<script setup lang="ts">
import { formatNumberWithCommas } from '@/helpers';
import { computed } from 'vue';

const props = defineProps<{
	asset: Asset;
}>();

const formattedBalance = computed(() => formatNumberWithCommas(props.asset.balance, 2));
</script>

<template>
	<li :class="$style.itemWrapper">
		<figure :class="$style.assetIcon">
			<Component :is="asset.icon" aria-hidden="true" />
		</figure>

		<section :class="$style.itemLabelWrapper">
			<header :class="$style.mainItemInfo">{{ asset.key }}</header>
			<p :class="$style.additionalItemInfo">{{ asset.name }}</p>
		</section>

		<section :class="$style.itemBalanceWrapper">
			<p :class="$style.mainItemInfo">{{ formattedBalance }}</p>
			<p :class="$style.additionalItemInfo">In pool</p>
		</section>
	</li>
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
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 24px;
		width: auto;
	}
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

<script setup lang="ts">
import FramePoolLiqudityListItemInfo from './FramePoolLiqudityListItemInfo.vue';
import IconArrow from 'assets/icons/arrow.svg?component';

defineProps<{
	liquidity: Liquidity;
}>();
</script>

<template>
	<div :class="$style.framePoolLiqudityListItem">
		<div :class="$style.iconsWrapper">
			<Component :is="liquidity.first.icon" :class="$style.icon" />
			<Component :is="liquidity.second.icon" :class="$style.icon" />
		</div>

		<div :class="$style.infoWrapper">
			<FramePoolLiqudityListItemInfo :asset="liquidity.first" />
			<FramePoolLiqudityListItemInfo :asset="liquidity.second" />
		</div>

		<IconArrow :class="$style.iconArrow" />
	</div>
</template>

<style lang="scss" module>
.framePoolLiqudityListItem {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 10px 12px;
	cursor: pointer;

	&:hover {
		background: colors.$redSelectGradient;
	}
}

.iconsWrapper {
	display: flex;
	align-items: center;
	gap: 4px;
}

.icon {
	width: 24px;
	height: 24px;
}

.infoWrapper {
	display: flex;
	flex-direction: column;
}

.iconArrow {
	height: 16px;
	width: auto;
}
</style>

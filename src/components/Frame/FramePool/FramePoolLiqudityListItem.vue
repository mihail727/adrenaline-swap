<script setup lang="ts">
import FramePoolLiqudityListItemInfo from './FramePoolLiqudityListItemInfo.vue';
import IconArrow from 'assets/icons/arrow.svg?component';

defineProps<{
	liquidity: Liquidity;
}>();
</script>

<template>
	<li :class="$style.framePoolLiqudityListItem">
		<section :class="$style.iconsWrapper">
			<figure :class="$style.icon">
				<Component :is="liquidity.first.icon" aria-hidden="true" />
			</figure>

			<figure :class="$style.icon">
				<Component :is="liquidity.second.icon" aria-hidden="true" />
			</figure>
		</section>

		<section :class="$style.infoWrapper">
			<FramePoolLiqudityListItemInfo :asset="liquidity.first" />
			<FramePoolLiqudityListItemInfo :asset="liquidity.second" />
		</section>

		<figure :class="$style.iconArrow">
			<IconArrow aria-hidden="true" />
		</figure>
	</li>
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
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 24px;
		height: 24px;
	}
}

.infoWrapper {
	display: flex;
	flex-direction: column;
}

.iconArrow {
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 16px;
		width: auto;
	}
}
</style>

<script setup lang="ts">
import IconPlusBox from '@/assets/icons/plus-box.svg';
import { useLiquidityStore } from '@/stores';
import FramePoolLiqudityListItem from './FramePoolLiqudityListItem.vue';

const liquidityStore = useLiquidityStore();

defineEmits<{
	clickAdd: [];
	clickItem: [liquidity: Liquidity];
}>();
</script>

<template>
	<article :class="$style.framePoolLiquidity">
		<button :class="$style.btnAdd" @click="$emit('clickAdd')">
			<header>Add liquidity</header>

			<figure :class="$style.iconAdd">
				<IconPlusBox aria-hidden="true" />
			</figure>
		</button>

		<ul :class="$style.liquidityList">
			<TransitionGroup
				:enter-active-class="$style.transitionActive"
				:leave-active-class="$style.transitionActiveLeave"
				:move-class="$style.transitionActive"
				:enter-from-class="$style.transition"
				:leave-to-class="$style.transition"
			>
				<FramePoolLiqudityListItem
					v-for="liquidity in liquidityStore.liquidityList"
					:key="liquidity.first.key + liquidity.second.key"
					:liquidity="liquidity"
					@click="$emit('clickItem', liquidity)"
				/>
			</TransitionGroup>
		</ul>
	</article>
</template>

<style lang="scss" module>
.framePoolLiquidity {
	@extend %frameItem;

	gap: 8px;
}

.btnAdd {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	color: rgba(colors.$white, 0.7);
	border-radius: 10px;
	background: colors.$redGradient;
	padding: 12px;
	transition: all 0.3s ease;
}

.iconAdd {
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 20px;
		width: auto;
	}
}

.liquidityList {
	position: relative;
	display: flex;
	flex-direction: column;
	width: auto;
	height: 100%;
	border-radius: 10px;
	background-color: colors.$darkSecond;
	overflow: auto;
}

.transitionActive {
	transition: all 0.3s ease;
}

.transitionActiveLeave {
	transition: all 0.3s ease;
	position: absolute;
}

.transition {
	transform: translateX(20%);
	opacity: 0;
}
</style>

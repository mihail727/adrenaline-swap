<script setup lang="ts">
import { useLiquidityStore } from '@/stores';
import FramePoolAddPair from './FramePoolAddPair.vue';
import FramePoolLiqudity from './FramePoolLiqudity.vue';
import { computed, ref } from 'vue';

const liquidityStore = useLiquidityStore();

const isFrameAddPairVisible = ref(false);

const isFramePoolLiqudityUnactive = computed(() => !!isFrameAddPairVisible.value);

function onAddPair(assetOne: Asset, assetTwo: Asset) {
	if (
		isLiquidityListAlreadyHas({
			first: assetOne,
			second: assetTwo,
		})
	)
		return;

	liquidityStore.liquidityList.push({
		first: assetOne,
		second: assetTwo,
	});
}

function isLiquidityListAlreadyHas(liquidity: Liquidity) {
	for (const item of liquidityStore.liquidityList) {
		if (item.first.key === liquidity.first.key && item.second.key === liquidity.second.key)
			return true;
	}

	return false;
}

function onClickItem(liquidity: Liquidity) {}
</script>

<template>
	<div :class="$style.framePool">
		<TransitionGroup
			:enter-active-class="$style.transitionActive"
			:leave-active-class="$style.transitionActiveLeave"
			:move-class="$style.transitionActive"
			:enter-from-class="$style.transition"
			:leave-to-class="$style.transition"
		>
			<FramePoolLiqudity
				key="list"
				@click-add="isFrameAddPairVisible = true"
				@click-item="onClickItem"
				:class="isFramePoolLiqudityUnactive && $style.unactive"
			/>
			<FramePoolAddPair
				v-if="isFrameAddPairVisible"
				key="addPair"
				@add="onAddPair"
				@close="isFrameAddPairVisible = false"
			/>
		</TransitionGroup>
	</div>
</template>

<style lang="scss" module>
.framePool {
	position: relative;
	display: flex;
	gap: 20px;
	justify-content: flex-end;
	height: vars.$frameHeight;
}

.transitionActive {
	transition: all 0.6s ease;
}

.transitionActiveLeave {
	position: absolute;
	transition: all 0.6s ease;
	z-index: -1;
}

.transition {
	transform: translateX(60%);
	opacity: 0;
}

.unactive {
	opacity: 0.5;
}
</style>

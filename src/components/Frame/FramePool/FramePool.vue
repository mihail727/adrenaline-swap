<script setup lang="ts">
import { useLiquidityStore } from '@/stores';
import FramePoolAddPair from './FramePoolAddPair.vue';
import FramePoolLiqudity from './FramePoolLiqudity.vue';
import { ref } from 'vue';

const liquidityStore = useLiquidityStore();

const isFrameAddPairVisible = ref(false);

function onAddPair(assetOne: Asset, assetTwo: Asset) {
	liquidityStore.liquidityList.push({
		first: assetOne,
		second: assetTwo,
	});
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
</style>

<script setup lang="ts">
import { SwitchButtonState } from '@/common/enum';
import ButtonSwitch from '@/components/ButtonSwitch.vue';
import { type Component, computed, ref } from 'vue';
import FrameSwap from '@/components/Frame/FrameSwap/FrameSwap.vue';
import FramePool from '@/components/Frame/FramePool/FramePool.vue';

const frameElements = {
	[SwitchButtonState.Swap]: FrameSwap,
	[SwitchButtonState.Pool]: FramePool,
};

const selectedFrame = ref<SwitchButtonState>(SwitchButtonState.Swap);

const selectedFrameEl = computed<Component>(() => frameElements[selectedFrame.value]);
</script>

<template>
	<div :class="$style.homePage">
		<ButtonSwitch v-model:selected-state="selectedFrame" :class="$style.btnSwitch" />

		<div :class="$style.framesWrapper">
			<Transition
				:enter-from-class="$style.transitionFrame"
				:leave-to-class="$style.transitionFrame"
				:enter-active-class="$style.transitionFrameActive"
				:leave-active-class="$style.transitionFrameActive"
				mode="out-in"
			>
				<Component :is="selectedFrameEl" />
			</Transition>
		</div>
	</div>
</template>

<style lang="scss" module>
.homePage {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
}

.btnSwitch {
	@media screen and (min-width: vars.$minDesktopWidth) {
		width: vars.$frameWidth;
	}
}

.framesWrapper {
	position: relative;
	padding-top: 40px;
	width: 100%;
	height: 100%;

	@media screen and (min-width: vars.$minDesktopWidth) {
		padding-top: 80px;
	}
}

.transitionFrameActive {
	transition: all 0.3s ease;
}

.transitionFrame {
	transform: translateX(10%);
	opacity: 0;
}
</style>

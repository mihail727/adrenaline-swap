<script setup lang="ts">
import FrameTokenSelect from '../FrameTokenSelect.vue';
import FrameSwapMain from './FrameSwapMain.vue';
</script>

<template>
	<div :class="$style.frameSwap">
		<FrameSwapMain />
		<FrameTokenSelect />
	</div>
</template>

<style lang="scss" module>
.frameSwap {
	display: flex;
	gap: 20px;
	justify-content: flex-end;
	height: vars.$frameHeight;
}
</style>

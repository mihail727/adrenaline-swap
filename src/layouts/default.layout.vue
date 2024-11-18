<script setup lang="ts">
import PanelTop from '@/components/PanelTop.vue';
</script>

<template>
	<div :class="$style.defaultLayout">
		<PanelTop />

		<slot />
	</div>
</template>

<style lang="scss" module>
.defaultLayout {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 18px;
	margin-top: 52px;
	width: 100%;
	height: 100%;

	@media screen and (min-width: vars.$minDesktopWidth) {
		margin-top: 0px;
		align-items: end;
		margin-left: auto;
		max-width: 400px;
		overflow: visible;
	}
}
</style>

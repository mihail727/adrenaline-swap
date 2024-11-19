<script setup lang="ts">
import PanelBottom from '@/components/PanelBottom.vue';
import PanelTop from '@/components/PanelTop.vue';
</script>

<template>
	<div :class="$style.defaultLayout">
		<PanelTop />

		<slot />

		<PanelBottom />
	</div>
</template>

<style lang="scss" module>
.defaultLayout {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 18px;
	padding-top: 52px;
	width: 100%;
	height: 100%;

	@media screen and (min-width: vars.$minDesktopWidth) {
		padding-top: 0px;
		align-items: end;
		margin-left: auto;
		overflow: visible;
		width: vars.$frameWidth;
	}
}
</style>

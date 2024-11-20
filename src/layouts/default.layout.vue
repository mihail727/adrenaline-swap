<script setup lang="ts">
import PanelBottom from '@/components/PanelBottom.vue';
import PanelTop from '@/components/PanelTop.vue';
</script>

<template>
	<div :class="$style.defaultLayout">
		<PanelTop :class="$style.panelTop" />

		<slot />

		<PanelBottom :class="$style.panelBottom" />
	</div>
</template>

<style lang="scss" module>
.defaultLayout {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 18px;
	padding: 52px 20px 20px 20px;
	width: 100%;
	height: 100%;
	overflow: auto;

	@media screen and (min-width: vars.$minDesktopWidth) {
		padding: 20px;
		align-items: end;
		margin-left: auto;
	}
}

.panelTop {
	@media screen and (min-width: vars.$minDesktopWidth) {
		width: vars.$frameWidth;
	}
}

.panelBottom {
	margin-top: auto;
}
</style>

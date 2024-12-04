<script setup lang="ts">
import HeartIcon from '@/assets/icons/heart.svg';
</script>

<template>
	<footer :class="$style.panelBottom">
		<span :class="$style.text">Made with</span>
		<figure :class="$style.heartIcon">
			<HeartIcon aria-hidden="true" />
		</figure>
	</footer>
</template>

<style lang="scss" module>
.panelBottom {
	display: flex;
	justify-content: center;
	gap: 8px;
	width: 100%;

	@media screen and (min-width: vars.$minDesktopWidth) {
		justify-content: flex-end;
	}
}

.text {
	font-size: 16px;
	color: rgba(colors.$white, 0.7);
}

.heartIcon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 22px;
	height: auto;
}
</style>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<template>
	<Transition
		:enter-active-class="$style.transitionActive"
		@after-enter="(el) => el.classList.add($style.loaded)"
	>
		<div v-if="appStore.isAppFullLoaded" :class="$style.appLoaderName">
			<span>ADRE</span>
			<span>NA</span>
			<span>LINE</span>
		</div>
	</Transition>
</template>

<style lang="scss" module>
$paddingX: 18px;
$widthSpan: 253px;
$widthWrapper: calc($paddingX * 2 + $widthSpan);

.appLoaderName {
	@extend %fontRadiate;

	position: absolute;
	bottom: 62px;
	left: 0;
	display: none;
	padding: 20px 18px;
	width: 100%;

	z-index: zindex.$zindexAppLoaderTextContent;

	font-size: 60px;

	&.loaded {
		width: $widthWrapper;
	}

	* {
		width: $widthSpan;
	}

	@media screen and (min-width: vars.$minDesktopWidth) {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
}

.transitionActive {
	animation: anim-text 4.2s ease forwards;

	@keyframes anim-text {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		50% {
			transform: translateY(0%);
			opacity: 1;
			width: 100%;
		}
		100% {
			width: $widthWrapper;
		}
	}
}
</style>

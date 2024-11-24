<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<template>
	<Transition
		:enter-active-class="$style.transitionActive"
		@after-enter="(el) => el.classList.add($style.loaded)"
	>
		<div v-if="appStore.isAppFullLoaded" :class="$style.appLoaderTopText">
			<span :class="$style.text">TRON</span>
			<span :class="$style.text">NETWORK</span>
		</div>
	</Transition>
</template>

<style lang="scss" module>
.appLoaderTopText {
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	justify-content: space-between;
	width: 100%;
	padding: 20px 18px;
	transition: all 1s ease;

	z-index: zindex.$zindexAppLoaderTextContent;

	&.loaded {
		width: 170px;
	}

	@media screen and (min-width: vars.$minDesktopWidth) {
		display: flex;
	}
}

.text {
	font-size: 16px;
	font-weight: 600;
}

.transitionActive {
	animation: anim-text 4s ease forwards;

	@keyframes anim-text {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}
		50% {
			transform: translateY(0%);
			opacity: 1;
			width: 100%;
		}
		100% {
			width: 170px;
		}
	}
}
</style>

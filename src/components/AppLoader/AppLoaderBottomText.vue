<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<template>
	<Transition
		:enter-active-class="$style.transitionActive"
		@after-enter="(el) => el.classList.add($style.loaded)"
	>
		<div v-if="appStore.isAppFullLoaded" :class="$style.appLoaderBottomText">
			<span :class="$style.text">CRYPTO</span>
			<span :class="$style.text">SWAP</span>
		</div>
	</Transition>
</template>

<style lang="scss" module>
.appLoaderBottomText {
	position: absolute;
	bottom: 0;
	left: 0;
	display: none;
	width: 100%;
	padding: 20px 18px;
	transition: all 1s ease;

	z-index: zindex.$zindexAppLoaderTextContent;

	&.loaded {
		width: 155px;
	}

	@media screen and (min-width: vars.$minDesktopWidth) {
		display: flex;
		justify-content: space-between;
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
			transform: translateY(100%);
			opacity: 0;
		}
		50% {
			transform: translateY(0%);
			opacity: 1;
			width: 100%;
		}
		100% {
			width: 155px;
		}
	}
}
</style>

<script setup lang="ts"></script>

<template>
	<Transition :enter-active-class="$style.transitionActive" :enter-from-class="$style.transition">
		<slot />
	</Transition>
</template>

<style lang="scss" module>
.transitionActive {
	transition: all 2s ease;
	transition-delay: 1.5s;
}

.transition {
	opacity: 0;

	@media screen and (min-width: vars.$minDesktopWidth) {
		transform: translateX(100%);
	}
}
</style>

<script setup lang="ts"></script>

<template>
	<TransitionGroup
		:enter-active-class="$style.transitionActive"
		:leave-active-class="$style.transitionActiveLeave"
		:move-class="$style.transitionActive"
		:enter-from-class="$style.transition"
		:leave-to-class="$style.transition"
	>
		<slot />
	</TransitionGroup>
</template>

<style lang="scss" module>
.transitionActive {
	transition: all 0.4s ease;
}

.transitionActiveLeave {
	position: absolute;
	transition: all 0.4s ease;
	z-index: -1;
}

.transition {
	transform: translateX(100%);
	opacity: 0;
}
</style>

<script setup lang="ts">
import AppLoaderBottomText from '@/components/AppLoader/AppLoaderBottomText.vue';
import AppLoaderMainContent from '@/components/AppLoader/AppLoaderMainContent.vue';
import AppLoaderName from '@/components/AppLoader/AppLoaderName.vue';
import AppLoaderTopText from '@/components/AppLoader/AppLoaderTopText.vue';
</script>

<template>
	<Transition
		appear
		:appear-active-class="$style.transitionActiveWrapper"
		:appear-from-class="$style.transitionEnterFromWrapper"
	>
		<aside :class="$style.appLoader">
			<AppLoaderTopText />
			<AppLoaderMainContent />
			<AppLoaderName />
			<AppLoaderBottomText />
		</aside>
	</Transition>
</template>

<style lang="scss" module>
.appLoader {
	position: absolute;
	top: 0;
	left: 0;

	height: 100dvh;
	width: 100dvw;
	overflow: hidden;
}

.transitionActiveWrapper {
	transition: all 1s ease;
}

.transitionEnterFromWrapper {
	opacity: 0;
}
</style>

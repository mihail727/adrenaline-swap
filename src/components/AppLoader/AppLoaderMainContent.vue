<script setup lang="ts">
import IconBigHeart from '@/assets/icons/big-heart.svg?component';
import IconRays from '@/assets/icons/rays.svg?component';
import { useAppStore } from '@/stores';
import { ref, useCssModule, watch } from 'vue';

const appStore = useAppStore();
const cssModule = useCssModule();

const heartWrapperEl = ref<HTMLElement | undefined>();
const iconRaysEl = ref<HTMLElement | undefined>();

const unWatch = watch(
	() => appStore.isAppFullLoaded,
	async (loaded: boolean) => {
		if (!loaded || !heartWrapperEl.value || !iconRaysEl.value) return;

		heartWrapperEl.value.classList.add(cssModule.animationLoadedHeartWrapper);
		iconRaysEl.value.classList.add(cssModule.animationLoadedIconRays);

		unWatch();
	},
);
</script>

<template>
	<div ref="heartWrapperEl" :class="$style.heartWrapper">
		<Transition
			appear
			:appear-active-class="$style.transitionActiveItems"
			:appear-from-class="$style.transitionEnterItems"
			@after-appear="(el) => el.classList.add($style.animateHeartBit)"
		>
			<IconBigHeart :class="$style.iconBigHeart" />
		</Transition>

		<Transition
			appear
			:appear-active-class="$style.transitionActiveItems"
			:appear-from-class="$style.transitionEnterItems"
		>
			<div ref="iconRaysEl" :class="[$style.raysWrapper, $style.animateSpin]">
				<IconRays :class="$style.iconRays" />
			</div>
		</Transition>
	</div>
</template>

<style lang="scss" module>
.heartWrapper {
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	width: 100px;

	&.animationLoadedHeartWrapper {
		animation: loaded-heart-wrapper 1.5s ease forwards;

		@keyframes loaded-heart-wrapper {
			70% {
				scale: 0.4;
			}
			100% {
				opacity: 0;
			}
		}
	}

	@media screen and (min-width: vars.$minDesktopWidth) {
		&.animationLoadedHeartWrapper {
			animation: loaded-heart-wrapper 2s ease forwards;
			animation-delay: 2.1s;

			@keyframes loaded-heart-wrapper {
				100% {
					width: 60%;
					top: 56%;
					left: 3%;
				}
			}
		}
	}
}

.iconBigHeart {
	width: 100%;
	height: auto;

	&.animateHeartBit {
		@extend %animteHeartBit;

		animation-delay: 1s;
	}
}

.raysWrapper {
	position: absolute;
	top: -53%;
	left: -98%;
	width: 300px;
	height: auto;
	z-index: -1;

	&.animateSpin > * {
		@extend %animateSpin;
	}

	@media screen and (min-width: vars.$minDesktopWidth) {
		&.animationLoadedIconRays {
			animation: loaded-icon-rays 2s ease forwards;
			animation-delay: 2s;

			@keyframes loaded-icon-rays {
				35% {
					width: 160%;
				}
				100% {
					width: 160%;
					top: -5%;
					left: -15%;
				}
			}
		}
	}
}

.iconRays {
	width: 100%;
	height: auto;
}

.transitionActiveItems {
	transition: all 3s ease;

	&.iconRays {
		transition-delay: 0.8s;
	}
}

.transitionEnterItems {
	transform: scale(0.2);
}
</style>

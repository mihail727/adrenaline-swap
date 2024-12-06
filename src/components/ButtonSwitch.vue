<script setup lang="ts">
import { SwitchButtonState } from '@/common/enum';

const selectedState = defineModel<SwitchButtonState>('selectedState', { required: true });

function onClickBtn(ev: MouseEvent) {
	const target = ev.target as HTMLButtonElement;
	const targetId = Number(target.id);
	const targetAsState = SwitchButtonState[targetId] as keyof typeof SwitchButtonState | undefined;

	if (!targetAsState) {
		return;
	}

	selectedState.value = targetId;
}
</script>

<template>
	<article :class="$style.buttonSwitch">
		<span :class="[$style.switcher, $style[`${SwitchButtonState[selectedState]}`]]" />

		<button
			id="0"
			:class="[$style.btn, selectedState === 0 && $style.selected]"
			@click="onClickBtn"
		>
			Swap
		</button>
		<button
			id="1"
			:class="[$style.btn, selectedState === 1 && $style.selected]"
			@click="onClickBtn"
		>
			Pool
		</button>
	</article>
</template>

<style lang="scss" module>
.buttonSwitch {
	position: relative;
	display: flex;
	flex-shrink: 0;
	border-radius: 30px;
	background-color: colors.$darkRed;
	width: 100%;
	overflow: hidden;
}

.switcher {
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	background-color: colors.$red;
	z-index: 1;
	transition: left 0.2s ease, border-radius 0.3s ease;

	&.Swap {
		left: 0;
		border-radius: 30px 0px 0px 30px;
	}

	&.Pool {
		left: 50%;
		border-radius: 0px 30px 30px 0px;
	}
}

.btn {
	width: 100%;
	color: rgba(colors.$white, $alpha: 0.6);
	padding: 10px;
	background-color: transparent;
	font-size: 20px;
	transition: color 0.4s ease, transform 0.2s ease;
	z-index: 2;

	&:hover,
	&.selected {
		color: rgba(colors.$white, $alpha: 1);
	}
}
</style>

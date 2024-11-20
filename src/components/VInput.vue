<script setup lang="ts">
import { type InputHTMLAttributes } from 'vue';

type InputValue = number | string;

const inputValue = defineModel<InputValue>();
const inputFocused = defineModel<boolean>('inputFocused', {
	default: false,
});

const props = withDefaults(
	defineProps<{
		value?: InputValue;
		mode?: 'text' | 'number';
		inputMode?: InputHTMLAttributes['inputmode'];
		placeholder?: string;
		max?: number;
		min?: number;
		precision?: number;
	}>(),
	{
		value: 0,
		mode: 'number',
		inputMode: 'numeric',
		max: 0,
		min: 0,
		precision: 2,
	},
);

function onInputNumber(ev: Event) {
	const target = ev.target as HTMLInputElement;

	if ('unmasked' in target) {
		inputValue.value = Number(target.unmasked);

		return;
	}

	inputValue.value = Number(target.value);
}

function onInputDefault(ev: Event) {
	const target = ev.target as HTMLInputElement;

	inputValue.value = target.value;
}
</script>

<template>
	<div :class="$style.input">
		<div :class="$style.label">
			<slot name="label" />
		</div>

		<input
			v-if="mode === 'number'"
			v-number="{
				min: props.min,
				max: props.max,
				precision: props.precision,
			}"
			:value="inputValue"
			:inputmode="inputMode"
			:placeholder="placeholder"
			:class="$style.inputEl"
			@input="onInputNumber"
			@focus="inputFocused = true"
			@blur="inputFocused = false"
		/>

		<input
			v-else
			:value="inputValue"
			:inputmode="inputMode"
			:placeholder="placeholder"
			:class="$style.inputEl"
			@input="onInputDefault"
			@focus="inputFocused = true"
			@blur="inputFocused = false"
		/>

		<div :class="$style.additionalWrapper">
			<slot name="additional" />
		</div>
	</div>
</template>

<style lang="scss" module>
.input {
	position: relative;
	width: 100%;
}

.label {
	position: absolute;
	top: -8px;
	left: 14px;
	display: flex;
	gap: 3px;
	font-size: 12px;
	background-color: colors.$main;
}

.inputEl {
	width: 100%;
	background-color: transparent;
	border: 1px solid colors.$darkRed;
	border-radius: 10px;
	color: colors.$white;
	padding: 9px 10px;
	font-size: 18px;
	transition: border-color 0.3s ease;

	&:focus {
		border-color: rgba(colors.$red, $alpha: 0.6);
	}
}

.additionalWrapper {
	position: absolute;
	top: 50%;
	right: 10px;
	display: flex;
	align-items: center;
	gap: 8px;
	transform: translateY(-50%);
}
</style>

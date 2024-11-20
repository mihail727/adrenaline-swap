<script setup lang="ts">
const inputValue = defineModel<number | undefined>();
const inputFocused = defineModel<boolean>('inputFocused', {
	default: false,
});

withDefaults(
	defineProps<{
		value?: number;
		max?: number;
		min?: number;
		precision?: number;
	}>(),
	{
		value: 0,
		max: 0,
		min: 0,
		precision: 2,
	},
);

function onInput(ev: Event) {
	const target = ev.target as HTMLInputElement;

	if ('unmasked' in target) {
		inputValue.value = Number(target.unmasked);

		return;
	}

	inputValue.value = Number(target.value);
}
</script>

<template>
	<div :class="$style.input">
		<div :class="$style.label">
			<slot name="label" />
		</div>

		<input
			v-number="{
				max: max,
				min: min,
				precision: precision,
			}"
			:value="inputValue"
			inputmode="numeric"
			placeholder="0.00"
			:class="$style.inputEl"
			@input="onInput"
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

<script setup lang="ts">
import IconArrowCircle from '@/assets/icons/arrow-circle.svg?component';

defineProps<{
	title?: string;
}>();

const emit = defineEmits<{
	clickBack: [];
}>();
</script>

<template>
	<div :class="$style.frameHeader">
		<button :class="$style.btnBack" @click="emit('clickBack')">
			<IconArrowCircle :class="$style.iconArrowCircle" />
		</button>

		<span>{{ title }}</span>
	</div>
</template>

<style lang="scss" module>
.frameHeader {
	display: flex;
	align-items: center;
	gap: 10px;

	font-size: 20px;
}

.btnBack {
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	transition: transform 0.3s ease-out;

	&:active {
		transform: scale(0.8);
	}
}

.iconArrowCircle {
	height: 24px;
	width: auto;
	rotate: 90deg;
	stroke: colors.$white;
}
</style>

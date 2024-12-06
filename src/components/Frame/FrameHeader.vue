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
	<header :class="$style.frameHeader">
		<button :class="$style.btnBack" @click="emit('clickBack')">
			<figure :class="$style.iconArrowCircle">
				<IconArrowCircle aria-hidden="true" />
			</figure>
		</button>

		<p>{{ title }}</p>
	</header>
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
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 24px;
		width: auto;
		rotate: 90deg;
		stroke: colors.$white;
	}
}
</style>

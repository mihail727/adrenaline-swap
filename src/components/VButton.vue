<script setup lang="ts"></script>

<template>
	<button :class="$style.button">
		<slot />
	</button>
</template>

<style lang="scss" module>
.button {
	width: 100%;
	font-size: 24px;
	padding: 18px;
	background-color: colors.$red;
	color: colors.$white;
	border-radius: 10px;
	transition: all 0.3s ease-out;

	&:active {
		transform: scale(0.9);
	}
}
</style>

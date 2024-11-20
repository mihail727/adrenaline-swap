<script setup lang="ts">
import { ref } from 'vue';
import VInput from '../VInput.vue';
import FrameHeader from './FrameHeader.vue';

const emit = defineEmits<{
	clickBack: [];
}>();

const filterValue = ref<string>();
</script>

<template>
	<div :class="$style.frameTokenSelect">
		<FrameHeader title="Select a token" @click-back="emit('clickBack')" />

		<VInput v-model="filterValue" mode="text" input-mode="text" placeholder="Enter token name">
			<template #label>Search token name or ticker</template>
		</VInput>
	</div>
</template>

<style lang="scss" module>
.frameTokenSelect {
	display: flex;
	flex-direction: column;
	padding: 12px 20px;
	width: 100%;
	flex-shrink: 0;
	background-color: colors.$darkSecond;
	border-radius: 10px;
	gap: 22px;

	@media screen and (min-width: vars.$minDesktopWidth) {
		width: vars.$frameWidth;
	}
}
</style>

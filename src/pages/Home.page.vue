<script setup lang="ts">
import { SwitchButtonState } from '@/common/enum';
import SwitchBtn from '@/components/SwitchBtn.vue';
import { ref } from 'vue';

const selectedFrame = ref<SwitchButtonState>(SwitchButtonState.Swap);
</script>

<template>
	<div :class="$style.homePage">
		<SwitchBtn v-model:selected-state="selectedFrame" />
	</div>
</template>

<style lang="scss" module>
.homePage {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
}
</style>

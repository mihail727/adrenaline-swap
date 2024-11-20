<script setup lang="ts">
import VInput from '@/components/VInput.vue';
</script>

<template>
	<div :class="$style.frameSwapOptions">
		<VInput :max="100">
			<template #label>Slippage tolerance</template>
			<template #additional>
				<span :class="$style.percent">%</span>
			</template>
		</VInput>
		<VInput :max="100">
			<template #label>Transaction deadline</template>
			<template #additional>
				<span :class="$style.percent">min</span>
			</template>
		</VInput>
	</div>
</template>

<style lang="scss" module>
.frameSwapOptions {
	display: flex;
	gap: 10px;
}

.percent {
	color: rgba(colors.$white, 0.6);
}
</style>

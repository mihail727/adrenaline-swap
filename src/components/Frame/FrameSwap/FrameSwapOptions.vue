<script setup lang="ts">
import VInput from '@/components/VInput.vue';
</script>

<template>
	<article :class="$style.frameSwapOptions">
		<VInput :max="100" placeholder="0.00">
			<template #label>Slippage tolerance</template>
			<template #additional>
				<span :class="$style.percent">%</span>
			</template>
		</VInput>
		<VInput :max="100" placeholder="0.00">
			<template #label>Transaction deadline</template>
			<template #additional>
				<span :class="$style.percent">min</span>
			</template>
		</VInput>
	</article>
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

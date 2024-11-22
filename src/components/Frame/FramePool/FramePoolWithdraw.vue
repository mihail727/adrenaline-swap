<script setup lang="ts">
import { computed } from 'vue';
import FrameHeader from '../FrameHeader.vue';
import { vOnClickOutside } from '@vueuse/components';
import VButton from '@/components/VButton.vue';

const props = defineProps<{
	pair: Liquidity;
}>();

defineEmits<{
	close: [];
}>();

const computedTitle = computed(() => `${props.pair.first.key} / ${props.pair.second.key}`);
</script>

<template>
	<div v-on-click-outside="() => $emit('close')" :class="$style.framePoolWithdraw">
		<FrameHeader :title="computedTitle" @click-back="$emit('close')" />

		<VButton :class="$style.btnWithdraw"> Withdraw </VButton>
	</div>
</template>

<style lang="scss" module>
.framePoolWithdraw {
	@extend %frameItem;

	background-color: colors.$darkSecond;
	border-radius: 10px;
	padding: 12px 20px 20px 20px;
}

.btnWithdraw {
	margin-top: auto;
}
</style>

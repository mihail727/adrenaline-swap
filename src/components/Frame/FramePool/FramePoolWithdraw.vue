<script setup lang="ts">
import { computed } from 'vue';
import FrameHeader from '../FrameHeader.vue';
import FramePoolWithdrawAsset from './FramePoolWithdrawAsset.vue';
import { vOnClickOutside } from '@vueuse/components';
import VButton from '@/components/VButton.vue';

const props = defineProps<{
	pair: Liquidity;
}>();

defineEmits<{
	clickWithdraw: [pair: Liquidity];
	close: [];
}>();

const computedTitle = computed(() => `${props.pair.first.key} / ${props.pair.second.key}`);
</script>

<template>
	<article v-on-click-outside="() => $emit('close')" :class="$style.framePoolWithdraw">
		<FrameHeader :title="computedTitle" @click-back="$emit('close')" />

		<section :class="$style.assetsWrapper">
			<FramePoolWithdrawAsset :asset="pair.first" />
			<FramePoolWithdrawAsset :asset="pair.second" />
		</section>

		<VButton :class="$style.btnWithdraw" @click="$emit('clickWithdraw', pair)">
			Withdraw
		</VButton>
	</article>
</template>

<style lang="scss" module>
.framePoolWithdraw {
	@extend %frameItem;

	background-color: colors.$darkSecond;
	border-radius: 10px;
	padding: 12px 20px 20px 20px;
	gap: 8px;
}

.assetsWrapper {
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	gap: 30px;
}

.btnWithdraw {
	margin-top: auto;
}
</style>

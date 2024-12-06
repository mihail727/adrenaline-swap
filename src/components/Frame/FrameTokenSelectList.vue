<script setup lang="ts">
import FrameTokenSelectListItem from './FrameTokenSelectListItem.vue';

defineProps<{
	assets: Asset[];
}>();

const emit = defineEmits<{
	selectAsset: [asset: Asset];
}>();
</script>

<template>
	<ul :class="$style.frameTokenSelectList">
		<TransitionGroup
			:enter-active-class="$style.transitionActive"
			:leave-active-class="$style.transitionLeave"
			:move-class="$style.transitionActive"
			:enter-from-class="$style.transition"
			:leave-to-class="$style.transition"
		>
			<FrameTokenSelectListItem
				v-for="asset in assets"
				:key="asset.key"
				:asset="asset"
				@click="emit('selectAsset', asset)"
			/>
		</TransitionGroup>
	</ul>
</template>

<style lang="scss" module>
.frameTokenSelectList {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: auto;
}

.transition {
	opacity: 0;
}

.transitionLeave {
	position: absolute;
	transition: all 0.3s ease;
}

.transitionActive {
	transition: all 0.3s ease;
}
</style>

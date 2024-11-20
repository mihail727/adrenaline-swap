<script setup lang="ts">
import IconX from 'assets/icons/x.svg?component';
import { ref } from 'vue';
import VInput from '../VInput.vue';

const inputValue = defineModel<number | undefined>();

const props = withDefaults(
	defineProps<{
		assetKey: AssetKey;
		assetBalance?: number;
	}>(),
	{
		assetBalance: 0,
	},
);

const inputFocused = ref(false);

function onClickMax() {
	inputValue.value = props.assetBalance;
}

function onClickRemove() {
	inputValue.value = undefined;
}
</script>

<template>
	<div :class="$style.assetInput">
		<VInput
			v-model="inputValue"
			v-model:input-focused="inputFocused"
			placeholder="0.00"
			:min="0"
			:max="assetBalance"
		>
			<template #label>
				<span>Enter</span>

				<Transition
					:enter-from-class="$style.transitionChangeAssetEnter"
					:leave-to-class="$style.transitionChangeAssetLeave"
					:enter-active-class="$style.transitionChangeAssetActive"
					:leave-active-class="$style.transitionChangeAssetActive"
					mode="out-in"
				>
					<span :key="assetKey">{{ assetKey }}</span>
				</Transition>

				<span>amount</span>
			</template>

			<template #additional>
				<Transition
					:enter-from-class="$style.transitionAdditional"
					:leave-to-class="$style.transitionAdditional"
				>
					<div v-if="inputFocused" :class="$style.additionalWrapper">
						<button :class="$style.btnMax" @click="onClickMax">Max</button>

						<button :class="$style.btnRemove" @click="onClickRemove">
							<IconX :class="$style.iconRemove" />
						</button>
					</div>
				</Transition>
			</template>
		</VInput>
	</div>
</template>

<style lang="scss" module>
.assetInput {
	position: relative;
	width: 100%;
}

.additionalWrapper {
	display: flex;
	align-items: center;
	gap: 8px;
	transition: opacity 0.3s ease;
}

.btnMax {
	background-color: colors.$main;
	color: colors.$white;
	font-size: 12px;
	border: 1px solid colors.$white;
	border-radius: 4px;
	padding: 3px 6px;
}

.btnRemove {
	display: flex;
	align-items: center;
	background-color: colors.$main;
	border: none;
	padding: 0;
}

.iconRemove {
	height: 15px;
	width: auto;
}

.transitionAdditional {
	opacity: 0;
}

.transitionChangeAssetActive {
	transition: all 0.3s ease;
}

.transitionChangeAssetEnter {
	transform: translateY(-50%);
	opacity: 0;
}

.transitionChangeAssetLeave {
	transform: translateY(50%);
	opacity: 0;
}
</style>

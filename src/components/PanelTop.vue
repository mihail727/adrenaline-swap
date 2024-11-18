<script setup lang="ts">
import TronLogo from '@/assets/icons/tron-logo.svg';
import AvatarImage from '@/assets/icons/avatar.svg';
</script>

<template>
	<div :class="$style.panelTop">
		<div :class="$style.panelItem">
			<TronLogo :class="$style.tronLogo" />
			<span>Tron Network</span>
		</div>

		<div :class="$style.panelItem">
			<span>TTEWew..y678</span>
			<AvatarImage :class="$style.avatarImage" />
		</div>
	</div>
</template>

<style lang="scss" module>
.panelTop {
	display: flex;
	gap: 8px;
	width: 100%;
}

.panelItem {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 100%;
	background-color: colors.$darkSecond;
	border-radius: 10px;
	padding: 8px;
	font-size: 18px;
	white-space: nowrap;
}

.tronLogo {
	width: 32px;
	height: auto;
}

.avatarImage {
	width: 26px;
	height: auto;
}
</style>

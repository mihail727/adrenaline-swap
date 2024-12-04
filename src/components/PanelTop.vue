<script setup lang="ts">
import TronLogo from '@/assets/icons/tron-logo.svg';
import AvatarImage from '@/assets/icons/avatar.svg';
</script>

<template>
	<header :class="$style.panelTop">
		<section :class="$style.panelItem">
			<figure :class="$style.tronLogo">
				<TronLogo aria-hidden="true" />
			</figure>
			<span>Tron Network</span>
		</section>

		<section :class="$style.panelItem">
			<span>TTEWew..y678</span>
			<figure :class="$style.avatarImage">
				<AvatarImage aria-hidden="true" />
			</figure>
		</section>
	</header>
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
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: auto;
}

.avatarImage {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 26px;
	height: auto;
}
</style>

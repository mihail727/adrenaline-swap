import type { FunctionalComponent } from 'vue';

declare global {
	interface AssetMeta {
		key: string;
		name: string;
		icon: FunctionalComponent;
	}

	type AssetsList = AssetMeta[];
}

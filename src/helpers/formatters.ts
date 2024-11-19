export function formatNumberWithCommas(
	value: number | string,
	maxFractionDigits: number = 1,
): string {
	if (typeof value === 'string') value = Number(value);

	const formatter = Intl.NumberFormat('en-US', {
		roundingMode: 'trunc',
		maximumFractionDigits: maxFractionDigits,
	});

	return formatter.format(value);
}

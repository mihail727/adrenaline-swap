interface AnimationArgs {
	timing: (timeFraction: number) => number;
	draw: (progress: number) => void;
	duration: number;
}

export function animate({ timing, draw, duration }: AnimationArgs) {
	const start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		const progress = timing(timeFraction);

		draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}

export function timingLinear(timeFraction: number) {
	return timeFraction;
}

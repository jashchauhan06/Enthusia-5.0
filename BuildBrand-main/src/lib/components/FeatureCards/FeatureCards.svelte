<script lang="ts">
	import { onMount, type ComponentType, createEventDispatcher } from 'svelte';
	import cn from 'clsx';

	import { useRect } from '$lib/lifecycle-functions/useRect';
	import { useWindowSize } from '$lib/lifecycle-functions/useWindowSize';
	import { useScroll } from '$lib/lifecycle-functions/useScroll';
	import { clamp, mapRange } from '$lib/utils/maths';

	import Card from '../Card.svelte';

	const cards = [
		{ text: 'Clarity of the brand’s purpose, audience, and positioning.' },
		{ text: 'Strength and originality of the core brand idea.' },
		{ text: 'Quality of logo, colors, and typography.' },
		{ text: 'Consistency across all brand visuals and applications.' },
		{
			text: 'Craft and polish of the final designs.'
		},
		{ text: 'Effectiveness of mockups and real-world brand usage.' },
		{ text: 'How clearly the design process and thinking are shown.' },
		{ text: 'How well the brand story is communicated.' },
		{
			text: 'Confidence and clarity of the final presentation.'
		}
	];

	let AppearTitle: ComponentType;
	let containerRef: HTMLDivElement;
	let elementRef: HTMLDivElement;
	let current: number = -1;

	const emit = createEventDispatcher();

	const [windowSize] = useWindowSize();
	const [setRef, rect] = useRect();

	onMount(async () => {
		AppearTitle = (await import('../AppearTitle.svelte')).default;

		setRef(containerRef);

		emit('mounted');
	});

	useScroll(({ scroll }) => {
		if (!elementRef) return;

		const start = $rect.top - $windowSize.height * 2;
		const end = $rect.top + $rect.height - $windowSize.height;

		const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1);

		elementRef.style.setProperty(
			'--progress',
			String(clamp(0, mapRange($rect.top, end, scroll, 0, 1), 1))
		);

		current = Math.floor(progress * 10);
	});
</script>

<div bind:this={containerRef} class="features">
	<div class="layout-block-inner sticky">
		<aside class="title">
			<p class="h3">
				<svelte:component this={AppearTitle}
					>How We'll Judge
					<br />
					<span class="grey">Your Work</span></svelte:component
				>
			</p>
		</aside>
		<div bind:this={elementRef}>
			{#each cards as card, index (index)}
				<div class={cn('card', index <= current - 1 && 'current')} style={`--i: ${index}`}>
					<Card background="rgba(239, 239, 239, 0.8)" number={index + 1} text={card.text} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../styles/functions' as *;

	.features {
		height: 1000vh;

		@include desktop {
			height: 1600vh;
			min-height: desktop-vw(1310px);
		}

		.card {
			--d: 100vh;

			position: absolute;
			will-change: transform;
			transition-duration: 1.2s;
			transition-property: opacity, transform;
			transition-timing-function: var(--ease-out-expo);

			@include mobile {
				@for $i from 0 through 8 {
					&:nth-child(#{$i + 1}) {
						top: calc(
							(((100 * var(--vh, 1vh)) - #{mobile-vw(440px)} - (var(--layout-margin))) / 8) * $i
						);
					}
				}
			}

			@include desktop {
				@for $i from 0 through 8 {
					&:nth-child(#{$i + 1}) {
						top: calc(((var(--d) - #{desktop-vw(440px)} - (2 * var(--layout-margin))) / 8) * $i);
						left: calc(((100vw - #{desktop-vw(440px)} - (2 * var(--layout-margin))) / 8) * $i);
					}
				}
			}

			&:not(.current) {
				transform: translate3d(100%, 100%, 0);
				opacity: 0;
			}
		}

		.title {
			text-align: start;
			padding-bottom: var(--layout-margin);

			@include desktop {
				padding: 0;
				position: absolute;
				left: var(--layout-margin);
				bottom: var(--layout-margin);
			}

			.h3 {
				color: #ffffff;
				font-size: mobile-vw(28px);

				@include desktop {
					font-size: desktop-vw(34px);
				}

				.grey {
					color: #ffffff;
				}
			}
		}
	}

	.sticky {
		overflow: hidden;
		position: sticky;
		top: 0;
		height: 100vh;
		padding: var(--layout-margin);

		@include desktop {
		}

		> * {
			position: relative;
		}
	}
</style>

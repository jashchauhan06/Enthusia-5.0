<script lang="ts">
	import { onMount, onDestroy, type ComponentType } from 'svelte';
	import cn from 'clsx';

	import { lenisStore as lenis } from '$lib/stores/lenis';
	import { introOutStore } from '$lib/stores/introOut';
	import { addThreshold } from '$lib/stores/thresholds';
	import { setThemeStore, themeStore } from '$lib/stores/theme';
	import {
		homePageLoadedComponentsStore,
		setHomePageLoadedComponentsStore
	} from '$lib/stores/homePageLoadedComponents';

	import { intersection } from '$lib/actions/intersection';
	import { useRect } from '$lib/lifecycle-functions/useRect';
	import { useWindowSize } from '$lib/lifecycle-functions/useWindowSize';
	import { useScroll } from '$lib/lifecycle-functions/useScroll';
	import { clamp, mapRange } from '$lib/utils/maths';
	import { dynamicImport } from '$lib/utils/dynamicImport';

	import { faqs } from '$lib/content/faqs';

	import Link from '$lib/components/Link.svelte';	
	import Button from '$lib/components/Button.svelte';
	import Hand from '$lib/components/Hand/index.svelte';
	import Title from '$lib/components/Title.svelte';
	import HeroTextIn from '$lib/components/HeroTextIn.svelte';
	import FaqItem from '$lib/components/FaqItem.svelte';
	import Card from '$lib/components/Card.svelte';

	let AppearTitle: ComponentType;

	let Register: ComponentType;
	let Parallax: ComponentType;
	let HorizontalSlides: ComponentType;
	let FeatureCards: ComponentType;

	let hasScrolled = false;
	let visible = false;

	const [size] = useWindowSize();
	const [setZoomWrapperRectRef, zoomWrapperRect] = useRect();
	const [setWhyRectRef, whyRect] = useRect();
	const [setCardsRectRef, cardsRect] = useRect();
	const [setWhiteRectRef, whiteRect] = useRect();
	const [setFeaturesRectRef, featuresRect] = useRect();
	const [setInuseRectRef, inuseRect] = useRect();

	let zoomWrapperRef: HTMLElement;
	let whyRef: HTMLElement;
	let cardsRectRef: HTMLElement;
	let whiteRectRef: HTMLElement;
	let featuresRectRef: HTMLElement;
	let inuseRectRef: HTMLElement;

	$: if (Object.keys($homePageLoadedComponentsStore).length === 4) {
		setRectRefs();

		setTimeout(() => {
			updateThresholds();
		}, 800);
	}

	onMount(async () => {
		Register = (await import('../lib/components/Icons/Register.svelte')).default;

		AppearTitle = await dynamicImport(
			'AppearTitle',
			import('../lib/components/AppearTitle.svelte')
		);
		HorizontalSlides = await dynamicImport(
			'HorizontalSlides',
			import('../lib/components/HorizontalSlides.svelte')
		);
		Parallax = await dynamicImport('Parallax', import('../lib/components/Parallax.svelte'));
		FeatureCards = await dynamicImport(
			'Parallax',
			import('../lib/components/FeatureCards/FeatureCards.svelte')
		);
	});

	onDestroy(() => {
		// Cleanup if needed
	});

	useScroll(({ scroll }) => {
		hasScrolled = scroll > 10;

		if (!zoomWrapperRef) return;

		const start = $zoomWrapperRect.top + $size.height * 0.5;
		const end = $zoomWrapperRect.top + $zoomWrapperRect.height - $size.height;

		const center = 0.6;
		const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1);
		const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1);
		const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1);

		const theme = progress2 === 1 ? 'light' : 'dark';
		if (theme !== $themeStore) {
			setThemeStore(theme);
		}

		zoomWrapperRef.style.setProperty('--progress1', String(progress1));
		zoomWrapperRef.style.setProperty('--progress2', String(progress2));

		if (progress === 1) {
			zoomWrapperRef.style.setProperty('background-color', 'currentColor');
		} else {
			zoomWrapperRef.style.removeProperty('background-color');
		}
	});

	function setRectRefs() {
		setZoomWrapperRectRef(zoomWrapperRef);
		setWhyRectRef(whyRef);
		setCardsRectRef(cardsRectRef);
		setWhiteRectRef(whiteRectRef);
		setFeaturesRectRef(featuresRectRef);
		setInuseRectRef(inuseRectRef);
	}

	function updateThresholds() {
		addThreshold({ id: 'top', value: 0 });

		const top1 = $whyRect.top - $size.height / 2;
		addThreshold({ id: 'why-start', value: top1 });
		addThreshold({
			id: 'why-end',
			value: top1 + $whyRect.height
		});

		const top2 = $cardsRect.top - $size.height / 2;
		addThreshold({ id: 'cards-start', value: top2 });
		addThreshold({ id: 'cards-end', value: top2 + $cardsRect.height });
		addThreshold({
			id: 'red-end',
			value: top2 + $cardsRect.height + $size.height
		});

		const top3 = $whiteRect.top - $size.height;
		addThreshold({ id: 'light-start', value: top3 });

		const top4 = $featuresRect.top;
		addThreshold({ id: 'features', value: top4 });

		// const top5 = $inuseRect.top;
		const top5 = inuseRectRef.getBoundingClientRect().top;
		addThreshold({ id: 'in-use', value: top5 });

		const top6 = $lenis?.limit;
		addThreshold({ id: 'end', value: top6! });
	}
</script>

<div class="canvas">
	<Hand />
</div>

<!-- Top navigation button -->
<div class="top-nav">
	<a href="https://enthusia-5-0.netlify.app/" class="enthusia-btn">
		<span class="arrow-emoji">←</span>
		Visit Enthusia 5.0
	</a>
</div>

<!-- SIT Logo -->
<div class={cn('sit-logo-container', $introOutStore && 'show')}>
	<img src="/SIT_LOGO.jpg" alt="SIT Nagpur" class="sit-logo" />
</div>

<section class="hero">
	<div class="layout-grid-inner">
		<span class="sub">
			<HeroTextIn>
				<h2 class="h3 subtitle">BUILD BRAND</h2>
			</HeroTextIn>
			<HeroTextIn>
				<h2 class="p-xs tm">
					SITNagpur Presents
				</h2>
			</HeroTextIn>
		</span>
		
		<!-- Title removed - now part of background image -->
	</div>

	<div class="bottom layout-grid">
		<div
			class={cn('hide-on-mobile', 'scroll-hint', hasScrolled && 'hide', $introOutStore && 'show')}
		>
			<div class="text">
				<HeroTextIn>
					<p>scroll</p>
				</HeroTextIn>
				<HeroTextIn>
					<p>to explore</p>
				</HeroTextIn>
			</div>
		</div>
		<!-- Description removed - now part of background image -->
		<div class="cta-wrapper">
			<Button
				class={cn('cta', $introOutStore && 'in')}
				arrow={true}
				icon={Register}
				href="https://unstop.com/p/build-brand-enthusia-50-symbiosis-institute-of-technology-nagpur-1626415?lb=i9smS0vw&utm_medium=Share&utm_source=harshkum8980&utm_campaign=Competitions"
			>
				Register Now
			</Button>
		</div>
	</div>
</section>
<section class="why" data-lenis-scroll-snap-align="start">
	<div class="layout-grid">
		<h2 class="sticky h2">
			<svelte:component this={AppearTitle}>What is Build Brand?</svelte:component>
		</h2>
		<aside class="features" bind:this={whyRef}>
			<div class="feature">
				<p class="p">
					Build Brand is a 8-hour off-line design hackathon, a collision of creativity and competition. Teams are on a time to develop a raw business concept into a finished, professional brand - strategy and visual identity, digital presence, and marketing materials.
				</p>
			</div>
			<div class="feature">
				<h3 class="title h4">Not Your Average Design Competition</h3>
				<p class="p">
					
It is not an ordinary design competition. The purpose of Build Brand is to mimic the workings of a real branding agency and have tight deadlines, real-life briefs, and industry expectations. You do not simply design, you think, work and find solutions to the branding issues like the professionals do.
				</p>
			</div>
			<div class="feature">
				<h3 class="title h4">Build Work That Builds Your Portfolio</h3>
				<p class="p">
					At the conclusion of the sprint, there is something that really counts delivered by each and every team: a portfolio-ready brand case study. It could be logos, mockups, or creative social media, and all you produce is destined to present your talents to your prospective employer and customers.
				</p>
			</div>
			<div class="feature">
				<h3 class="title h4">A Launchpad for Creative Careers</h3>
				<p class="p">
				Build Brand is not just an event but a catapult to the creative career. It unites designers, strategists, and storytellers to challenge themselves, get mentored by the industry, and know what it is like to create an actual brand, up to the ground.
				</p>
			</div>
		</aside>
	</div>
</section>
<section class="rethink">
	<div class="layout-grid pre">
		<div class="highlight" data-lenis-scroll-snap-align="start">
			<svelte:component
				this={Parallax}
				speed={-0.5}
				on:mounted={() => setHomePageLoadedComponentsStore('Parallax')}
			>
				<p class="h2">
					<AppearTitle>What You’ll Create</AppearTitle>
				</p>
			</svelte:component>
		</div>
		<div class="comparison">
			<svelte:component this={Parallax} speed={0.5}>
				<p class="p">
					In 8 hours of rigorous work each team will have a full-fledged real world brand identity, not just a logo. You will start getting out of theory to practice in creating a unified system that determines how a brand will appear, speak, and perform itself in various platforms. All you do will be organized, written and prepared to be presented in your portfolio. It has some of the major aspects that you will develop in this process as highlighted below.
				</p>
			</svelte:component>
		</div>
	</div>
	<div class="cards" bind:this={cardsRectRef}>
		<svelte:component
			this={HorizontalSlides}
			on:mounted={() => setHomePageLoadedComponentsStore('HorizontalSlides')}
		>
			<Card class="card" number={1} text="Brand purpose, audience, and positioning." />
			<Card
				class="card"
				number={2}
				text="Logo, color palette, and typography system."
			/>
			<Card class="card" number={3} text="Mockups and real-world brand applications." />
			<Card
				class="card"
				number={4}
				text="Social media and digital creatives."
			/>
			<Card
				class="card"
				number={5}
				text="Complete design process, case study deck and Presentation."
			/>
		</svelte:component>
	</div>
</section>
<section bind:this={zoomWrapperRef} class="solution">
	<div class="inner">
		<div class="zoom">
			<h2 class="first h1 vh">
				SO WE<br />
				<span class="contrast"> BUILT </span>
			</h2>
			<h2 class="enter h3 vh">
				BUILD<br /> BRAND
			</h2>
			<h2 class="second h1 vh">As it should be</h2>
		</div>
	</div>
</section>
<section class="theme-light featuring" bind:this={whiteRectRef}>
	<div class="inner">
		<div class="layout-block intro">
			<p class="p-l">
				Build Brand is a branding sprint In Build Brand, high-intensity and real-world sessions, creative students are pushed through idea to execution in one time-bound sprint process, producing a complete, portfolio-ready brand case study demonstrating how you think, create, and deliver as a professional.
			</p>
		</div>
	</div>
	<section bind:this={featuresRectRef}>
		<svelte:component
			this={FeatureCards}
			on:mounted={() => setHomePageLoadedComponentsStore('FeatureCards')}
		/>
	</section>
</section>
<section
	bind:this={inuseRectRef}
	class={cn('theme-light', 'in-use', visible && 'visible', 'hide-on-mobile')}
	use:intersection={{
		threshold: 0.2
	}}
	on:intersecting={() => {
		visible = true;
	}}
>
	<div class="layout-grid">
		<aside class="title">
			<p class="h3">
				<svelte:component
					this={AppearTitle}
					on:mounted={() => setHomePageLoadedComponentsStore('AppearTitle')}
					>FAQS
					<br />
					<!-- <span class="grey">in use</span> -->
                    </svelte:component
				>
			</p>
		</aside>
		<ul class="list">
			{#each faqs as { question, answer }, i (question)}
				<li>
					<FaqItem {question} {answer} index={i} {visible} />
				</li>
			{/each}
		</ul>
	</div>
</section>


<style lang="scss">
	@use '../lib/styles/functions' as *;

	.home main {
		> *:not(.canvas) {
			position: relative;
		}
	}

	.canvas {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			height: 100vw;
			width: 200vw;
			background: radial-gradient(var(--pink), var(--pink-transparent) 70%);
			transform: translateX(-50%) translateY(50vh);
			opacity: 0.5;
		}
	}

	.top-nav {
		position: absolute;
		top: mobile-vw(20px);
		left: mobile-vw(20px);
		z-index: 100;

		@include desktop {
			top: desktop-vw(30px);
			left: desktop-vw(40px);
		}

		.enthusia-btn {
			display: inline-flex;
			align-items: center;
			gap: mobile-vw(8px);
			padding: mobile-vw(8px) mobile-vw(16px);
			background: rgba(255, 255, 255, 0.1);
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.2);
			color: white;
			text-decoration: none;
			border-radius: mobile-vw(20px);
			font-size: mobile-vw(12px);
			font-weight: 600;
			transition: all 0.3s ease;

			@include desktop {
				gap: desktop-vw(8px);
				padding: desktop-vw(10px) desktop-vw(20px);
				border-radius: desktop-vw(20px);
				font-size: desktop-vw(14px);
			}

			&:hover {
				transform: translateY(-2px);
				background: rgba(255, 255, 255, 0.2);
				border-color: rgba(255, 255, 255, 0.4);
				box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
			}

			.arrow-emoji {
				font-size: mobile-vw(16px);
				font-weight: bold;

				@include desktop {
					font-size: desktop-vw(18px);
				}
			}
		}
	}

	.sit-logo-container {
		position: fixed;
		top: mobile-vw(20px);
		right: mobile-vw(20px);
		z-index: 1000;
		background: #ffffff;
		padding: mobile-vw(12px);
		border-radius: mobile-vw(8px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		opacity: 0;
		transform: translateY(-20px);
		transition: opacity 0.6s ease, transform 0.6s ease;

		@include desktop {
			top: desktop-vw(30px);
			right: desktop-vw(40px);
			padding: desktop-vw(15px);
			border-radius: desktop-vw(10px);
		}

		&.show {
			opacity: 1;
			transform: translateY(0);
		}

		.sit-logo {
			display: block;
			height: mobile-vw(35px);
			width: auto;

			@include desktop {
				height: desktop-vw(45px);
			}
		}
	}

	$delay-intro-bottom: 150ms;
	$delay-intro-top: 450ms;
	$intro-duration: 2050ms;

	.hide-text {
		overflow: hidden;

		@include desktop {
			> * {
				transform: translate3d(0, 200%, 0);
			}
		}
	}

	.show-text {
		@include desktop {
			> * {
				transform: translate3d(0, 0, 0);
				transition: transform $intro-duration var(--ease-out-expo);
				transition-delay: $delay-intro-top;
			}
		}
	}

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		height: calc(100 * var(--vh));
		margin-bottom: mobile-vw(160px);
		position: relative;

		@include mobile {
			padding: mobile-vh(100px) 0 mobile-vw(18px);
			justify-content: flex-start;

			> div {
				grid-gap: mobile-vw(20px);
			}
		}

		@include desktop {
			height: 100vh;
			margin-bottom: desktop-vw(320px);
		}

		:global(.title) {
			grid-column: 1 / -1;
			margin-top: mobile-vw(30px);
			width: var(--layout-width);

			@include mobile {
				height: mobile-vw(120px);
				margin-top: 0;
				margin-bottom: mobile-vw(40px);
			}

			@include desktop {
				margin-top: 0;
				position: absolute;
				top: 40%;
				left: 45%;
				transform: translate(-50%, -50%);
				width: 100%;
			}
		}



		.sub {
			display: flex;
			flex-direction: column;
			text-align: end;
			grid-column: 2 / -1;

			@include mobile {
				text-align: center;
				grid-column: 1 / -1;
				margin-bottom: mobile-vw(50px);
			}

			@include desktop {
				position: relative;
				top: desktop-vw(395px);
				grid-column: 6 / span 7;
			}

			.subtitle {
				margin-bottom: mobile-vw(8px);
				letter-spacing: 0.15em;
				text-indent: 0.15em;
				font-weight: 500;
				font-family: 'Didot', serif;
				color: #ffffff;
				text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
				font-size: mobile-vw(60px);

			@include mobile {
				font-size: mobile-vw(50px);
				letter-spacing: 0.1em;
				text-indent: 0.1em;
			}

				@include desktop {
					margin-bottom: desktop-vw(12px);
					font-size: desktop-vw(72px);
				}
			}

			.tm {
				color: var(--grey);
				letter-spacing: 0.1em;
				text-indent: 0.1em;
				opacity: 0.8;

			@include mobile {
				font-size: mobile-vw(16px);
			}

				span {
					vertical-align: text-top;
				}
			}
		}

		.bottom {
			width: 100%;
			overflow: hidden;

			@include mobile {
				margin-top: auto;
				padding-top: mobile-vw(100px);
			}

			@include desktop {
				padding-bottom: desktop-vw(40px);
			}

			// Scroll Hint is only rendered on desktop
			.scroll-hint {
				position: relative;
				grid-column: 1 / span 2;
				transition: opacity 0.6s var(--ease-in-out-quad), transform 0.6s var(--ease-in-out-quad);

				.text {
					font-family: var(--font-primary);
					font-weight: 900;
					text-transform: uppercase;
					font-stretch: condensed;
					line-height: 100%;
					letter-spacing: -0.01em;

					@include desktop {
						padding-left: desktop-vw(16px);
						font-size: desktop-vw(24px);
					}
				}

				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					height: 100%;
					width: desktop-vw(2px);
					background-color: var(--pink);
					animation: scale 4s infinite;
					animation-play-state: paused;
					transform-origin: 50% 0;
					transform: scale(0);
				}

				@keyframes scale {
					50% {
						transform: scaleY(1.5);
					}
				}

				&.show {
					&::before {
						animation-play-state: running;
					}
				}

				&.hide {
					opacity: 0;
					transform: translateY(20%);

					&::before {
						animation-play-state: paused;
					}
				}
			}

			.description {
				grid-column: 1 / -1;

				@include mobile {
					text-align: center;
				margin-bottom: mobile-vw(32px);
				letter-spacing: 0.1em;
				opacity: 0.9;
				}

				@include desktop {
					grid-column: 3 / span 3;
					letter-spacing: 0.15em;
				}
			}

			:global(.cta) {
				grid-column: 1 / -1;
				text-align: end;

				@include mobile {
					text-align: center;
				}

				@include desktop {
					transition: transform calc($intro-duration - 200ms) var(--ease-out-expo),
						opacity $intro-duration var(--ease-out-expo);
					grid-column: 10 / -1;
					opacity: 0.5;
					transform: translate3d(0, 100%, 0);
				}
			}

			:global(.cta.in) {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}

			.cta-wrapper {
				grid-column: 1 / -1;
				text-align: end;
				cursor: not-allowed;

				@include mobile {
					text-align: center;
				}

				@include desktop {
					grid-column: 10 / -1;
				}
			}
		}
	}

	.why {
		margin-bottom: mobile-vw(160px);
		position: relative;

		@include mobile {
			margin-bottom: mobile-vw(120px);
		}

		@include desktop {
			margin-bottom: desktop-vw(640px);
		}

		.sticky {
			grid-column: 1 / -1;

			@include mobile {
				margin-bottom: mobile-vw(40px);
			}

			@include desktop {
				position: sticky;
				top: 33%;
				align-self: start;
				border-left: 4px solid var(--theme-contrast);
				grid-column: 3 / span 4;
				padding: desktop-vw(24px) desktop-vw(32px);
			}
		}

		.features {
			grid-column: 1 / -1;

			@include desktop {
				grid-column: 7 / -1;
				margin-top: desktop-vw(256px);
			}
		}

		.feature {
			&:not(:first-child) {
				margin-top: mobile-vw(120px);
			}

			@include mobile {
				&:not(:first-child) {
					margin-top: mobile-vw(60px);
				}
			}

			@include desktop {
				width: columns(4);

				&:not(:first-child) {
					margin-top: desktop-vw(400px);
				}
			}

			.title {
				color: var(--theme-contrast);
				margin-bottom: mobile-vw(16px);

				@include desktop {
					margin-bottom: desktop-vw(24px);
				}
			}
		}
	}

	.rethink {
		position: relative;

		.pre {
			margin-bottom: mobile-vw(160px);

			@include mobile {
				margin-bottom: mobile-vw(80px);
			}

			@include desktop {
				margin-bottom: desktop-vw(240px);
			}

			.highlight {
				@include mobile {
					margin-bottom: mobile-vw(40px);
				}

				@include desktop {
					border-left: 4px solid var(--theme-contrast);
					grid-column: 3 / span 4;
					top: desktop-vw(64px);
					padding: desktop-vw(24px) 0 desktop-vw(24px) desktop-vw(32px);
				}
			}

			.comparison {
				grid-column: 1 / -1;

				@include desktop {
					grid-column: 7 / span 4;
					margin-top: desktop-vw(256px);
				}
			}
		}

		.cards {
			margin-bottom: mobile-vw(160px);

			@include mobile {
				margin-bottom: mobile-vw(120px);
			}

			@include desktop {
				margin-bottom: desktop-vw(400px);
			}

			:global(.card) {
				@include desktop {
					&:first-child {
						margin-left: calc(columns(6) + var(--layout-margin) + var(--layout-columns-gap));
					}

					&:not(:last-child) {
						margin-right: calc(var(--layout-columns-gap) * 2 + var(--layout-column-width));
					}

					&:last-child {
						margin-right: calc(columns(2) + var(--layout-margin) + var(--layout-columns-gap));
					}
				}
			}
		}
	}

	.solution {
		color: var(--white);
		height: 500vh;
		position: relative;

		@include desktop {
			height: 1000vh;
		}

		.inner {
			position: sticky;
			top: 0;
			margin: 0 auto;
			overflow: hidden;
			height: calc(100 * var(--vh, 1vh));

			&::after {
				content: '';
				background-color: currentColor;
				position: absolute;
				height: 100%;
				width: 100%;
				left: 50%;
				transform: translateX(-50%) scaleX(var(--progress2));
				top: 0;
			}

			@include desktop {
				height: 100vh;
			}

			.zoom {
				align-self: start;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;
				transform: scale(calc(1 + (var(--progress1)) * 3));
				padding: mobile-vh(16px);

				@include desktop {
					padding: desktop-vh(40px) var(--layout-margin);
				}
			}
		}

		.first {
			transform: translateY(calc(var(--progress1) * -100%));
		}

		.second {
			text-align: end;
		}

		.enter {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-54.2%, -50%) scale(calc((var(--progress1) * 18.2)));
			transform-origin: 50% calc(50% - (var(--progress1) * 27%));
			opacity: calc(var(--progress1) * 2);
			text-align: center;
			// will-change: transform;

			@include desktop {
				transform: translate(-50%, -50%) scale(calc((var(--progress1) * 8.5)));
				transform-origin: 50% calc(50% - (var(--progress1) * 25%));
			}
		}
	}

	.featuring {
		position: relative;
		padding-bottom: mobile-vw(160px);
		color: var(--theme-secondary);

		&::before {
			content: '';
			top: 0;
			left: 0;
			width: 100%;
			height: mobile-vw(150px);
			position: absolute;
			background: linear-gradient(
				to bottom,
				var(--theme-primary),
				var(--theme-primary-transparent)
			);

			@include desktop {
				height: desktop-vw(150px);
			}
		}

		@include desktop {
			padding: desktop-vw(40px) 0;
			padding-bottom: desktop-vw(320px);
		}

		.inner {
			position: relative;
		}

		.intro {
			padding-bottom: mobile-vw(160px);
			position: relative;

			@include desktop {
				padding-bottom: desktop-vw(440px);
			}

			.p-l {
				background: linear-gradient(
					135deg, 
					rgba(255, 255, 255, 0.95) 0%, 
					rgba(255, 255, 255, 0.9) 100%
				);
				backdrop-filter: blur(10px);
				padding: mobile-vw(30px);
				border-radius: mobile-vw(20px);
				box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
				border: 1px solid rgba(255, 255, 255, 0.2);

				@include desktop {
					padding: desktop-vw(40px);
					border-radius: desktop-vw(25px);
				}
			}
		}
	}

	.in-use {
		// background-color: var(--theme-primary);
		color: var(--theme-secondary);
		padding-top: mobile-vw(160px);
		padding-bottom: mobile-vw(160px);
		position: relative;

		@include mobile {
			margin-top: mobile-vw(200px);
		}

		@include desktop {
			padding-bottom: desktop-vw(400px);
		}

		.title {
			grid-column: 1 / -1;
			
			@include desktop {
				grid-column: 1 / span 5;
			}

			.h3 {
				color: #ffffff;
				text-shadow: 
					0 2px 4px rgba(0, 0, 0, 0.8),
					0 4px 8px rgba(0, 0, 0, 0.6),
					0 0 20px rgba(0, 0, 0, 0.4);
				margin: 0;
				font-weight: 900;
				-webkit-text-stroke: 1px rgba(0, 0, 0, 0.3);
				text-stroke: 1px rgba(0, 0, 0, 0.3);
			}
		}

		.list {
			grid-column: 1 / -1;

			@include desktop {
				grid-column: 6 / span 7;
			}
		}
	}

	.team-transition {
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #000000;
		padding: 0 var(--layout-margin);
		background-color: #ffffff;
		position: relative;
		z-index: 50;
		// overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));
			pointer-events: none;
		}
		
		h2 {
			font-family: var(--font-primary);
			text-transform: uppercase;
			line-height: 0.85;
			letter-spacing: 0.1em;
			font-weight: 900;
			font-size: mobile-vw(60px);
			text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
			animation: cinematicTracking 10s infinite alternate ease-in-out;
			
			.contrast {
				color: #ffffff;
				display: block;
				font-size: 1.2em;
			}
		}

		@keyframes cinematicTracking {
			from { letter-spacing: 0.05em; }
			to { letter-spacing: 0.2em; }
		}
	}

	.temp {
		height: 100vh;
		opacity: 0.95;
		display: flex;
		align-items: center;
	}
</style>
